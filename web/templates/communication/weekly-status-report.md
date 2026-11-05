---
title: Weekly Status Report
category: communication
summary: A one-page RAG-rated project status with progress, next steps, risks, decisions needed, and milestones.
tags: [status-report, rag, reporting, project-management]
---

## How to use

Send on the same day each week. Lead with overall status and the one thing the reader must know or do. Rate honestly (Green on track, Amber at risk but recoverable, Red off track and needs help) and explain every Amber/Red with the recovery action. Keep it to one page; link to detail.

## Template

```markdown
# Weekly status: {{Project}} - week ending {{YYYY-MM-DD}}

**Overall:** Green / Amber / Red | **Trend:** up / flat / down
**Headline:** {{One sentence}}

| Dimension | RAG | Comment |
|---|---|---|
| Scope | | |
| Schedule | | |
| Budget | | |
| Quality | | |
| Resources | | |
| Risks | | |

## Accomplished this week
- 

## Planned next week
- 

## Milestones
| Milestone | Baseline | Forecast | Status |
|---|---|---|---|

## Risks and issues (top items)
| ID | Description | RAG | Owner | Action / due |
|---|---|---|---|---|

## Decisions / help needed
| Decision | From | Needed by |
|---|---|---|

## Changes (scope/schedule/budget)

## Key metrics
(e.g., defects open, tests passed, tasks complete %)
```

## Example (fictional)

```markdown
# Weekly status: Payroll Platform Replacement - week ending 2026-09-04

**Overall:** Amber | **Trend:** down
**Headline:** Design is on track, but late delivery of GL mapping inputs puts the 2026-09-11 design sign-off at risk.

| Dimension | RAG | Comment |
|---|---|---|
| Scope | Green | 214 requirements baselined; 2 change requests pending |
| Schedule | Amber | GL mapping 4 days late |
| Budget | Green | 46% spent vs. 44% planned |
| Quality | Green | Design reviews passed |
| Resources | Amber | Finance analyst on leave until 09-08 |
| Risks | Amber | See below |

## Accomplished this week
- Pay element and rules design completed for monthly group
- Fit-gap reviewed with Payroll Ops (12 gaps closed)
- Migration strategy draft issued for review

## Planned next week
- Complete hourly pay rules design
- Finance workshop on GL mapping
- Design sign-off pack ready 09-10

## Milestones
| Milestone | Baseline | Forecast | Status |
|---|---|---|---|
| Design sign-off | 2026-09-11 | 2026-09-16 | Amber |
| Build complete | 2026-11-06 | 2026-11-06 | Green |

## Risks and issues (top items)
| ID | Description | RAG | Owner | Action / due |
|---|---|---|---|---|
| R-04 | Finance inputs late | Amber | Finance controller | Workshop 09-08 |
| R-07 | Legacy data quality | Amber | Data lead | Cleanse report 09-18 |

## Decisions / help needed
| Decision | From | Needed by |
|---|---|---|
| Approve 5-day design sign-off extension | Sponsor | 2026-09-08 |

## Key metrics
Requirements designed: 168 / 214 (78%). Open design questions: 11.
```
