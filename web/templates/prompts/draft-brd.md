---
title: "Prompt: Draft a BRD"
category: prompts
summary: Turn rough notes, interview output, or a problem statement into a structured first-draft BRD.
tags: [prompt, claude, brd, drafting]
---

## How to use

Paste your raw material (interview notes, emails, a problem statement) into the placeholders. Replace `{{...}}` values, remove anything confidential or personal (use roles, not names), and review the output critically: the model will flag gaps but cannot know your real figures. Ask it to list assumptions so you can validate them with stakeholders. Pair with the BRD template.

## Prompt

```text
You are a senior business analyst in payroll and HR technology.

Draft a Business Requirements Document from the material below. Use this structure: Executive summary; Business problem; Objectives with measurable success criteria; Scope (in/out), assumptions, constraints, dependencies; Stakeholders; Business requirements (numbered BR-001..., each with priority using MoSCoW and a source); Non-functional and compliance requirements; Risks; Open questions.

Rules:
- Keep requirements solution-neutral (what, not how) and testable.
- Do not invent facts, numbers, or regulations. Where information is missing, write "TBC" and add it to Open questions.
- Separate clearly: (a) stated facts from the notes, (b) your assumptions.
- Use plain language; one requirement per row.
- At the end, list the 5 most important questions to ask the sponsor.

Context:
- Initiative: {{initiative name}}
- Organisation type and size (generic): {{e.g., mid-size employer, 3 entities, 2,800 employees}}
- Pay frequencies / jurisdictions: {{...}}
- Business sponsor role: {{...}}

Source material:
"""
{{paste notes, interview summaries, or problem statement}}
"""
```

## Example (fictional)

**Input (filled):**

```text
Context:
- Initiative: Automated off-cycle payment requests
- Organisation type and size: mid-size employer, 2 legal entities, 1,900 employees
- Pay frequencies / jurisdictions: monthly, one country
- Business sponsor role: Head of Payroll Operations

Source material:
"""
Managers email payroll for bonuses and corrections. About 400 a month. Analysts re-key. About 1 in 8 have errors. Finance wants a second approver over 1,000. Audit complained there is no record of who approved.
"""
```

**Expected shape of the output (abridged):**

```markdown
## Executive summary
Off-cycle payment requests (about 400/month) are received by email and re-keyed, with roughly 12% error rate and no auditable approval record. ...

## Business requirements
| ID | Requirement | Priority | Source |
|---|---|---|---|
| BR-001 | Managers can submit structured off-cycle requests | Must | Notes |
| BR-002 | Requests over 1,000 require a second approver (threshold configurable) | Must | Finance |
| BR-003 | Every approval is logged with user and timestamp | Must | Audit |

## Assumptions
- A1: "1 in 8" is approximately 12%. (TBC)

## Open questions
1. Which payment types are in scope (bonus, expenses, corrections)? ...
```
