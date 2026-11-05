---
title: RACI Matrix
category: governance
summary: Assign Responsible, Accountable, Consulted, and Informed roles across deliverables or activities.
tags: [raci, roles, accountability, governance]
---

## How to use

List activities or deliverables down the side and roles across the top (use roles, not names). Each row must have exactly one A (Accountable) and at least one R (Responsible). Keep C and I to those who truly need them, or the matrix becomes noise. Agree the matrix with all named roles and review it at each phase gate.

**Key:** R = does the work; A = owns the outcome and signs off (one per row); C = consulted before decisions (two-way); I = informed afterwards (one-way).

## Template

```markdown
# RACI: {{Project}}

| Activity / deliverable | Sponsor | Project manager | Business analyst | Payroll ops lead | HR lead | Finance | IT / integration | QA lead |
|---|---|---|---|---|---|---|---|---|
| {{Activity 1}} | | | | | | | | |
| {{Activity 2}} | | | | | | | | |

**Checks:** one A per row; at least one R per row; no role overloaded with A/R; gaps and overlaps resolved.
**Role definitions:** {{who fills each role}}
**Approved by / date:**
```

## Example (fictional)

```markdown
# RACI: Payroll Platform Replacement

| Activity / deliverable | Sponsor | Project manager | Business analyst | Payroll ops lead | HR lead | Finance | IT / integration | QA lead |
|---|---|---|---|---|---|---|---|---|
| Project charter | A | R | C | C | C | C | I | I |
| Requirements and fit-gap | I | A | R | R | C | C | C | I |
| Pay rules design | I | C | R | A | C | C | I | I |
| GL mapping | I | C | C | C | I | A | R | I |
| Data migration | I | A | C | C | R | C | R | C |
| Test plan and execution | I | C | C | C | I | I | C | A/R |
| UAT sign-off | A | R | R | R | C | C | I | C |
| Go/no-go decision | A | R | C | C | C | C | C | C |
| Training | I | A | C | R | R | I | I | I |
| Hypercare | I | A | R | R | C | C | R | C |

**Checks:** one A per row (QA lead is both A and R for test execution); no gaps.
**Role definitions:** Sponsor = Head of Payroll Operations; PM = Taylor Brooks.
**Approved by / date:** Steering committee, 2026-07-14.
```
