---
title: Meeting Notes and Action Items
category: communication
summary: Capture decisions, discussion, and owned, dated actions so meetings produce follow-through.
tags: [meeting, minutes, actions, decisions]
---

## How to use

Circulate within 24 hours. Record decisions and actions first and prominently; discussion detail is secondary. Every action needs one owner and a due date. Review open actions at the start of the next meeting. Avoid recording personal data beyond what is needed.

## Template

```markdown
# {{Meeting name}} - {{YYYY-MM-DD}}

**Time / location:** | **Facilitator:** | **Note-taker:**
**Attendees:** | **Apologies:**

## Purpose

## Agenda
1. 
2. 

## Decisions
| # | Decision | Made by | Rationale |
|---|---|---|---|

## Action items
| # | Action | Owner | Due | Status |
|---|---|---|---|---|

## Discussion summary
### {{Topic 1}}
- Key points:
- Options considered:

## Risks / issues raised

## Parking lot

## Next meeting
Date / time / key topics
```

## Example (fictional)

```markdown
# Payroll Platform Design Workshop - 2026-08-18

**Time / location:** 10:00-11:30, video call | **Facilitator:** Taylor Brooks | **Note-taker:** Jordan Lee
**Attendees:** Priya Raman, Ana Silva, Luis Ortega, Finance controller, HR data lead | **Apologies:** Sam Okafor

## Purpose
Agree how retro pay and off-cycle payments are configured.

## Decisions
| # | Decision | Made by | Rationale |
|---|---|---|---|
| D1 | Retro pay calculated automatically for up to 3 prior periods; older periods need manual approval | Priya Raman | Matches current policy and limits audit exposure |
| D2 | Off-cycle payments use a dedicated pay group | Group | Keeps reconciliation clean |

## Action items
| # | Action | Owner | Due | Status |
|---|---|---|---|---|
| A1 | Document retro pay rules for hourly staff | Jordan Lee | 2026-08-25 | Open |
| A2 | Confirm GL account for off-cycle pay with finance | Finance controller | 2026-08-21 | Open |
| A3 | Provide 3 examples of complex retro cases | Ana Silva | 2026-08-20 | Open |

## Discussion summary
### Retro pay
- Current practice: analysts manually recalculate; error-prone.
- Options: full automation vs. threshold-based. Threshold chosen.

## Risks / issues raised
- Rule for retro across tax-year boundary not yet defined (owner: Priya Raman).

## Parking lot
- Self-service payslip redesign.

## Next meeting
2026-08-25, 10:00: review retro rules and GL mapping.
```
