---
title: Defect Report
category: testing
summary: A clear, reproducible bug report with severity, evidence, impact, and lifecycle tracking.
tags: [defect, bug, triage, severity]
---

## How to use

A good defect report lets a developer reproduce the issue without asking questions. Give exact steps, data, expected vs actual results, and evidence. Set severity by business impact (money, compliance, data) and priority by urgency. Never include real employee personal data in evidence; use anonymised or synthetic records.

## Template

```markdown
# DEF-{{###}}: {{Concise title: what is wrong, where}}

| Field | Value |
|---|---|
| Reported by / date | |
| Environment / build | |
| Module | |
| Related test case / requirement | |
| Severity | Critical / High / Medium / Low |
| Priority | P1 / P2 / P3 / P4 |
| Status | New / Triaged / In progress / Fixed / Retest / Closed / Rejected / Deferred |
| Assigned to | |

## Description

## Steps to reproduce
1. 
2. 

## Test data used

## Expected result

## Actual result

## Impact
(who is affected, money/compliance/data risk, workaround)

## Evidence
Screenshots, logs, file names (anonymised).

## Frequency
Always / Intermittent (x of y)

## Triage notes / root cause

## Fix and retest
Fixed in build: | Retested by: | Result: | Closed date:
```

### Severity guide
- **Critical:** incorrect pay or statutory calculation, data loss, security breach, payroll run cannot complete; no workaround.
- **High:** major function broken or workaround is costly; wrong output in non-payment area.
- **Medium:** function impaired, reasonable workaround exists.
- **Low:** cosmetic or minor usability.

## Example (fictional)

```markdown
# DEF-118: No weekend warning for pay dates in region "North-2"

| Field | Value |
|---|---|
| Reported by / date | A. Silva / 2026-06-15 |
| Environment / build | QA-2 / 2026.4-rc2 |
| Module | Pay Calendar Manager |
| Related test case / requirement | TC-044 / FR-002 |
| Severity | High |
| Priority | P2 |
| Status | In progress |
| Assigned to | L. Ortega |

## Description
When the employee region is "North-2", holiday clashes are not detected, so pay dates on holidays are not flagged.

## Steps to reproduce
1. Log in as Payroll administrator.
2. Create a monthly calendar for region North-2, December 2026.
3. Open the period containing 25 Dec (a configured holiday).

## Expected result
Warning shown and previous working day proposed.

## Actual result
No warning; pay date remains 25 Dec.

## Impact
Admins relying on the warning could schedule pay on a non-working day, leading to late payment. Workaround: manually check the holiday list.

## Frequency
Always (3 of 3).

## Triage notes
Region North-2 missing from holiday mapping table.

## Fix and retest
Fixed in build: pending rc4 | Retested by: | Result: | Closed date:
```
