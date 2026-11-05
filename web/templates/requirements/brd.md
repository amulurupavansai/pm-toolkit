---
title: Business Requirements Document (BRD)
category: requirements
summary: Capture the business problem, goals, scope, and high-level requirements before solution design.
tags: [brd, business-requirements, scope, stakeholders]
---

## How to use

Use a BRD when a business sponsor needs to agree *what* must be achieved and *why*, before anyone decides *how*. Keep requirements solution-neutral, number them so they can be traced to tests, and get sponsor sign-off before the PRD or design starts. Delete sections that do not apply rather than leaving them blank.

## Template

```markdown
# BRD: {{Initiative name}}

| Field | Value |
|---|---|
| Version | 0.1 |
| Status | Draft / In review / Approved |
| Author | {{name, role}} |
| Business sponsor | {{name, role}} |
| Last updated | {{YYYY-MM-DD}} |

## 1. Executive summary
{{3-5 sentences: problem, proposed outcome, expected value.}}

## 2. Business problem and opportunity
- Current situation:
- Pain points (with evidence/metrics):
- Cost of doing nothing:

## 3. Objectives and success measures
| ID | Objective | Measure | Baseline | Target | Date |
|---|---|---|---|---|---|
| O-1 | | | | | |

## 4. Scope
**In scope:**
**Out of scope:**
**Assumptions:**
**Constraints:**
**Dependencies:**

## 5. Stakeholders
| Name / group | Role | Interest | Influence | Needs from this project |
|---|---|---|---|---|

## 6. Current-state summary
{{Link to as-is process map.}}

## 7. Business requirements
| ID | Requirement | Priority (MoSCoW) | Source | Rationale |
|---|---|---|---|---|
| BR-001 | | Must | | |

## 8. Non-functional and compliance requirements
(security, privacy, audit, availability, data retention, regulatory)

## 9. Data and reporting needs

## 10. Impact assessment
(users, processes, systems, training, policy)

## 11. Risks and issues
| ID | Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|---|

## 12. Benefits and cost summary

## 13. Timeline and milestones

## 14. Open questions
| # | Question | Owner | Due |
|---|---|---|---|

## 15. Approval
| Name | Role | Decision | Date |
|---|---|---|---|
```

## Example (fictional)

```markdown
# BRD: Automated Off-Cycle Payment Requests

| Field | Value |
|---|---|
| Version | 0.3 |
| Status | In review |
| Author | Jordan Lee, Business Analyst |
| Business sponsor | Priya Raman, Head of Payroll Operations |
| Last updated | 2026-03-12 |

## 1. Executive summary
Payroll operations processes about 400 off-cycle payment requests a month by email and spreadsheet. Roughly 12% contain errors that cause rework or incorrect payment. This initiative introduces a structured request-and-approval workflow so that off-cycle payments are validated, approved and audit-logged before they reach a pay run.

## 2. Business problem and opportunity
- Current situation: managers email payroll; analysts re-key data into the payroll system.
- Pain points: 12% error rate; average 3.5 days to resolve; no approval audit trail.
- Cost of doing nothing: about 160 analyst hours/month of rework and recurring audit findings.

## 3. Objectives and success measures
| ID | Objective | Measure | Baseline | Target | Date |
|---|---|---|---|---|---|
| O-1 | Reduce request errors | % requests needing rework | 12% | <3% | Q4 2026 |
| O-2 | Faster turnaround | Median days to pay | 3.5 | 1.5 | Q4 2026 |
| O-3 | Full audit trail | % requests with recorded approval | 40% | 100% | Q4 2026 |

## 4. Scope
**In scope:** bonus, expense reimbursement, and correction payments for salaried employees in two legal entities.
**Out of scope:** termination pay, hourly timesheet corrections, contractor payments.
**Assumptions:** employee master data is accurate; managers have single sign-on access.
**Constraints:** no changes to the core payroll calculation engine this year.
**Dependencies:** HR master data feed; finance cost-centre list.

## 7. Business requirements
| ID | Requirement | Priority | Source | Rationale |
|---|---|---|---|---|
| BR-001 | Managers can submit an off-cycle request with reason, amount, and effective pay date | Must | Payroll Ops workshop | Replaces email intake |
| BR-002 | Requests above a configurable threshold require a second approver | Must | Finance controller | Segregation of duties |
| BR-003 | Approved requests are passed to the next eligible pay run without re-keying | Must | Payroll Ops | Removes error source |
| BR-004 | All status changes are logged with user and timestamp | Must | Internal audit | Audit finding closure |
| BR-005 | Requesters can see request status | Should | HR business partners | Reduces status enquiries |

## 8. Non-functional and compliance requirements
Audit logs retained for 7 years; access restricted by role; personal data masked in notifications.

## 11. Risks and issues
| ID | Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|---|
| R-1 | Managers keep emailing requests | Medium | High | Sponsor mandate; mailbox auto-reply with link |

## 14. Open questions
| # | Question | Owner | Due |
|---|---|---|---|
| 1 | Should corrections for prior years be in scope? | Priya Raman | 2026-03-26 |

## 15. Approval
| Name | Role | Decision | Date |
|---|---|---|---|
| Priya Raman | Business sponsor | Pending | |
```
