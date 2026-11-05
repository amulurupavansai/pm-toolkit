# PM Toolkit

Reusable product-management and business-analysis templates for **payroll and HR tech**, written in Markdown, plus a small static website to search them and copy them to the clipboard.

Every template has a short *How to use* note, a copy-ready *Template*, and a filled-in *fictional example*. Everything is generic: no company or client names.

## Templates

| Category | Template | Purpose |
|---|---|---|
| communication | [Meeting Notes and Action Items](templates/communication/meeting-notes-action-items.md) | Capture decisions, discussion, and owned, dated actions so meetings produce follow-through. |
| communication | [Weekly Status Report](templates/communication/weekly-status-report.md) | A one-page RAG-rated project status with progress, next steps, risks, decisions needed, and milestones. |
| delivery | [Payroll Implementation Project Plan](templates/delivery/implementation-project-plan.md) | Phased plan for implementing or replacing a payroll/HR system, with milestones, deliverables, owners, and gates. |
| delivery | [Payroll Go-Live Checklist](templates/delivery/payroll-go-live-checklist.md) | Cut-over and go-live readiness checklist for payroll, covering data, calculations, statutory setup, payments, people, and rollback. |
| governance | [Change Request Form](templates/governance/change-request-form.md) | Request, assess, and decide on a change to agreed scope, schedule, budget, or configuration. |
| governance | [RACI Matrix](templates/governance/raci-matrix.md) | Assign Responsible, Accountable, Consulted, and Informed roles across deliverables or activities. |
| governance | [Risk Register](templates/governance/risk-register.md) | Log, score, and track project risks with owners, mitigations, contingency, and review dates. |
| process | [Process Mapping (As-Is / To-Be)](templates/process/as-is-to-be-process-map.md) | Document a current-state process, its pain points, and the redesigned future state with a gap analysis. |
| prompts | [Prompt: Draft a BRD](templates/prompts/draft-brd.md) | Turn rough notes, interview output, or a problem statement into a structured first-draft BRD. |
| prompts | [Prompt: Generate Test Cases from Requirements](templates/prompts/generate-test-cases-from-requirements.md) | Produce traceable positive, negative, and boundary test cases (with expected payroll values) from requirements or user stories. |
| prompts | [Prompt: Summarise a Meeting](templates/prompts/summarise-meeting.md) | Convert a transcript or rough notes into decisions, action items, risks, and a short summary. |
| prompts | [Prompt: Write a Status Update](templates/prompts/write-status-update.md) | Turn raw progress notes into an honest, RAG-rated weekly status update for sponsors and stakeholders. |
| requirements | [Business Requirements Document (BRD)](templates/requirements/brd.md) | Capture the business problem, goals, scope, and high-level requirements before solution design. |
| requirements | [Product Requirements Document (PRD)](templates/requirements/prd.md) | Define the product problem, users, scope, functional requirements, and success metrics for a feature or release. |
| requirements | [Requirements Gathering and Stakeholder Interview Question Bank](templates/requirements/stakeholder-interview-question-bank.md) | Ready-to-ask interview questions for payroll, HR, finance, compliance, IT, and employee stakeholders, plus an interview guide. |
| requirements | [User Story and Acceptance Criteria](templates/requirements/user-story-acceptance-criteria.md) | Write testable user stories with Given/When/Then acceptance criteria and a definition of ready. |
| testing | [Defect Report](templates/testing/defect-report.md) | A clear, reproducible bug report with severity, evidence, impact, and lifecycle tracking. |
| testing | [Test Case](templates/testing/test-case.md) | A reusable test case with preconditions, steps, expected results, and traceability to requirements. |
| testing | [Test Execution Report](templates/testing/test-execution-report.md) | Summarise test progress and results, defects, coverage, risks, and a go/no-go recommendation. |
| testing | [Test Plan](templates/testing/test-plan.md) | Define test scope, approach, environments, data, schedule, entry/exit criteria, and risks for a release. |
| testing | [UAT Sign-off](templates/testing/uat-sign-off.md) | Record business acceptance of a release, with scenario results, open items, conditions, and signatures. |

## Repository layout

```
templates/            Markdown source of truth, one folder per category
  <category>/<slug>.md  front matter + How to use + Template/Prompt + Example (fictional)
scripts/check-templates.mjs   validates front matter and required sections
web/                  Next.js (App Router) + Tailwind static site
vercel.json           Vercel build settings (builds from the repo root)
```

## Run the website locally

```bash
cd web
npm install
npm run dev      # http://localhost:3000
npm run build    # validates templates, then exports static site to web/out
```

## Deploy to Vercel

Import the repository in Vercel and keep the **Root Directory as the repository root**. `vercel.json` installs and builds the `web` app and serves `web/out`. No environment variables are needed.

## Adding or editing a template

1. Add `templates/<category>/<slug>.md` with front matter (`title`, `category`, `summary`, `tags`).
2. Include the three sections: `## How to use`, `## Template` (or `## Prompt`), `## Example (fictional)`.
3. Keep examples fictional and free of real people, companies, or clients.
4. Run `npm --prefix web run check`. The site picks the file up automatically.

Copy buttons copy the contents of the `Template`/`Prompt` section (with a single outer code fence removed).
