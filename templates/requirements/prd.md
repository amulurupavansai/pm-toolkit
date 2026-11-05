---
title: Product Requirements Document (PRD)
category: requirements
summary: Define the product problem, users, scope, functional requirements, and success metrics for a feature or release.
tags: [prd, product, requirements, metrics, scope]
---

## How to use

Use a PRD to align product, design, engineering, and QA on *what* will be built for a release or feature. Start from the problem and users, state non-goals explicitly, and tie every requirement to a metric or user need. Link to the BRD for business justification rather than repeating it.

## Template

```markdown
# PRD: {{Feature / release name}}

| Field | Value |
|---|---|
| Status | Draft / Review / Approved / In build |
| Product manager | |
| Design / Engineering leads | |
| Target release | |
| Related docs | BRD, designs, tech spec |

## 1. Problem statement
{{Who has what problem, how we know, why now.}}

## 2. Goals and non-goals
**Goals:**
**Non-goals:**

## 3. Users and use cases
| Persona | Job to be done | Frequency | Key pain |
|---|---|---|---|

## 4. Success metrics
| Metric | Type (leading/lagging) | Baseline | Target | How measured |
|---|---|---|---|---|

## 5. Solution overview
{{Narrative + diagram/wireframe links.}}

## 6. Functional requirements
| ID | Requirement | Persona | Priority | Acceptance criteria ref |
|---|---|---|---|---|
| FR-001 | | | P0 | |

## 7. Non-functional requirements
Performance, security, privacy, accessibility, localisation, audit, availability.

## 8. Permissions and roles

## 9. Data model and integrations
Inputs, outputs, systems touched, migration needs.

## 10. Edge cases and error handling

## 11. Rollout plan
Phasing, feature flags, pilot group, communications, training, rollback.

## 12. Dependencies, risks, and open questions

## 13. Out-of-scope / future ideas
```

## Example (fictional)

```markdown
# PRD: Pay Calendar Manager

| Field | Value |
|---|---|
| Status | Approved |
| Product manager | Sam Okafor |
| Design / Engineering leads | Mei Tanaka / Luis Ortega |
| Target release | 2026.4 |
| Related docs | BRD: Pay Calendar Automation |

## 1. Problem statement
Payroll admins build pay calendars (period dates, cut-offs, pay dates, bank holidays) in spreadsheets each year. Errors in cut-off dates caused 9 late pay-runs last year across customers. We want admins to generate and validate a full-year calendar in minutes.

## 2. Goals and non-goals
**Goals:** generate a compliant annual calendar; warn about holiday clashes; publish dates to employees.
**Non-goals:** changing payroll calculation logic; supporting ad-hoc one-off pay runs (separate roadmap item).

## 3. Users and use cases
| Persona | Job to be done | Frequency | Key pain |
|---|---|---|---|
| Payroll administrator | Set up next year's calendars | Annually | Manual date maths, holiday clashes |
| HR manager | Check pay dates for new hires | Monthly | Cannot see cut-offs |
| Employee | Know when pay arrives | Monthly | Uncertainty around holidays |

## 4. Success metrics
| Metric | Type | Baseline | Target | How measured |
|---|---|---|---|---|
| Calendar setup time | Leading | 6 hours | 30 min | Admin timing study |
| Late pay runs due to date errors | Lagging | 9 / year | 0 | Incident log |

## 6. Functional requirements
| ID | Requirement | Persona | Priority | AC ref |
|---|---|---|---|---|
| FR-001 | Generate periods from frequency (weekly, bi-weekly, semi-monthly, monthly) and start date | Admin | P0 | US-101 |
| FR-002 | Flag pay dates that fall on weekends or configured holidays and propose the previous working day | Admin | P0 | US-102 |
| FR-003 | Validate cut-off is at least N working days before pay date | Admin | P0 | US-103 |
| FR-004 | Publish calendar and show employees their next pay date | Employee | P1 | US-104 |

## 7. Non-functional requirements
Calendar generation under 5 seconds for 26 periods; changes audit-logged; WCAG 2.1 AA.

## 11. Rollout plan
Beta with 10 customers in Q3; feature flag per tenant; GA with release 2026.4; rollback by disabling flag (existing calendars remain).

## 12. Dependencies, risks, and open questions
- Holiday data source selection (open).
- Risk: customers with legacy custom calendars need import tool (P1).
```
