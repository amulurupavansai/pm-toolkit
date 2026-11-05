---
title: Change Request Form
category: governance
summary: Request, assess, and decide on a change to agreed scope, schedule, budget, or configuration.
tags: [change-control, change-request, scope, impact-assessment]
---

## How to use

Raise a change request when something agreed in a baselined document (scope, requirement, design, plan, budget) needs to change. The requester fills in sections 1-2; the project team completes the impact assessment; the change board records the decision. Do not start work on an unapproved change unless an emergency path exists. Keep a running change log.

## Template

```markdown
# Change request CR-{{###}}: {{Title}}

## 1. Request
| Field | Value |
|---|---|
| Requested by / date | |
| Type | Scope / Requirement / Schedule / Budget / Configuration / Emergency |
| Priority | Critical / High / Medium / Low |
| Related items | Requirement IDs, designs |

**Description of change:**
**Reason / business justification:**
**Consequence of not making the change:**

## 2. Impact assessment (completed by project team)
| Area | Impact | Effort / cost | Notes |
|---|---|---|---|
| Scope and requirements | | | |
| Schedule / milestones | | | |
| Budget | | | |
| Design / configuration | | | |
| Testing | | | |
| Data / integrations | | | |
| Compliance / controls | | | |
| Training / communications | | | |
| Risks introduced or changed | | | |

**Options considered:**
**Recommendation:**

## 3. Decision
- [ ] Approved
- [ ] Approved with conditions
- [ ] Rejected
- [ ] Deferred to release:

Conditions / rationale:

| Name | Role | Date |
|---|---|---|

## 4. Implementation
Owner | Target date | Baselines to update | Verified by | Closed date
```

## Example (fictional)

```markdown
# Change request CR-014: Add contractor payments to off-cycle workflow

## 1. Request
| Field | Value |
|---|---|
| Requested by / date | Procurement lead / 2026-05-02 |
| Type | Scope |
| Priority | Medium |
| Related items | BR-001, BR-003 |

**Description of change:** Extend the off-cycle request workflow to cover contractor invoices up to a configurable amount.
**Reason / business justification:** Contractor one-off payments are also handled by email and show the same error pattern.
**Consequence of not making the change:** Two parallel processes remain; audit finding persists for contractors.

## 2. Impact assessment
| Area | Impact | Effort / cost | Notes |
|---|---|---|---|
| Scope and requirements | 3 new requirements | 4 days BA | |
| Schedule | +2 weeks to build | | Go-live moves from Oct to early Nov |
| Budget | +18,000 | | |
| Testing | 12 new test cases | 3 days | |
| Compliance / controls | New approval rule for contractors | | Needs finance review |
| Risks | New: contractor master data quality | | Added R-09 |

**Options considered:** (A) include now; (B) deliver as phase 2; (C) decline.
**Recommendation:** Option B, as phase 2 to protect the October date.

## 3. Decision
- [x] Deferred to release: 2027.1 (phase 2)

Rationale: protects the committed go-live date.

| Name | Role | Date |
|---|---|---|
| Priya Raman | Sponsor | 2026-05-12 |

## 4. Implementation
Owner: Product manager | Target: phase 2 backlog | Baselines to update: roadmap | Closed: 2026-05-12
```
