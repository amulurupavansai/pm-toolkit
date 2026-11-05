---
title: Risk Register
category: governance
summary: Log, score, and track project risks with owners, mitigations, contingency, and review dates.
tags: [risk, raid, mitigation, scoring]
---

## How to use

Review the register weekly. Phrase each risk as "If [cause], then [event], resulting in [impact]". Score likelihood and impact from 1 to 5; score = L x I. Anything 15+ is escalated to the sponsor. Each risk has one owner and a specific mitigation action with a date, not just "monitor". Issues (risks that have happened) move to the issue log.

**Scoring:** Likelihood 1 rare - 5 almost certain. Impact 1 minor - 5 severe (late pay, compliance breach, major cost). 1-6 low, 7-14 medium, 15-25 high.

## Template

```markdown
# Risk register: {{Project}} - updated {{YYYY-MM-DD}}

| ID | Category | Risk (If / then / impact) | L | I | Score | Owner | Mitigation (action, date) | Contingency | Status | Trend | Next review |
|---|---|---|---|---|---|---|---|---|---|---|---|
| R-01 | | | | | | | | | Open | | |

**Categories:** Scope, Schedule, Budget, Data, Compliance, Technical, People, Vendor, Change adoption.
```

## Example (fictional)

```markdown
# Risk register: Payroll Platform Replacement - updated 2026-09-04

| ID | Category | Risk | L | I | Score | Owner | Mitigation | Contingency | Status | Trend | Next review |
|---|---|---|---|---|---|---|---|---|---|---|---|
| R-01 | Data | If legacy employee records contain duplicates or invalid bank details, then payments may fail or be misdirected, causing late or incorrect pay | 4 | 5 | 20 | Data lead | Run cleanse report and fix at source by 2026-10-02; two mock loads | Manual payment run for failures | Open | Up | 2026-09-11 |
| R-02 | Compliance | If tax tables for the new year are published late, then statutory set-up may be incomplete at go-live | 3 | 4 | 12 | Payroll lead | Subscribe to regulator updates; reserve two config weeks in December | Apply interim rates and true-up | Open | Flat | 2026-09-18 |
| R-03 | People | If key payroll analysts are unavailable during UAT, then testing slips | 3 | 3 | 9 | PM | Book UAT diary now; assign backups | Use contractor testers | Open | Flat | 2026-09-18 |
| R-04 | Schedule | If finance inputs for GL mapping stay late, then design sign-off slips | 4 | 3 | 12 | Finance controller | Workshop 2026-09-08 | Sign off with open items | Open | Up | 2026-09-08 |
| R-05 | Change | If managers do not adopt self-service, then support volumes rise | 3 | 3 | 9 | HR lead | Champions network; short training videos | Extended hypercare | Open | Flat | 2026-10-02 |
```
