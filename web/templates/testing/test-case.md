---
title: Test Case
category: testing
summary: A reusable test case with preconditions, steps, expected results, and traceability to requirements.
tags: [test-case, qa, traceability, payroll-testing]
---

## How to use

Write one test case per condition you want to prove. Make steps specific enough that someone who does not know the system can run them, and always include exact test data and expected values (for payroll, expected gross, deductions, and net). Link every case to a requirement ID so coverage can be reported. Include negative and boundary cases.

## Template

```markdown
# TC-{{###}}: {{Title}}

| Field | Value |
|---|---|
| Requirement / story | {{ID}} |
| Module | |
| Type | Functional / Regression / Integration / Security / Performance |
| Priority | High / Medium / Low |
| Test level | System / UAT |
| Automated? | Yes / No |
| Author / date | |

## Objective

## Preconditions
- Environment and build:
- User role:
- Data set up:

## Test data
| Field | Value |
|---|---|

## Steps and expected results
| Step | Action | Expected result |
|---|---|---|
| 1 | | |

## Postconditions / cleanup

## Result (complete at execution)
Status: Pass / Fail / Blocked | Executed by: | Date: | Defect ID:
```

## Example (fictional)

```markdown
# TC-042: Pay date moves to previous working day when it falls on a weekend

| Field | Value |
|---|---|
| Requirement / story | FR-002 / US-102 |
| Module | Pay Calendar Manager |
| Type | Functional |
| Priority | High |
| Test level | System |
| Automated? | No |
| Author / date | A. Silva, 2026-06-01 |

## Objective
Verify a pay date falling on Saturday is flagged and proposed as the preceding Friday.

## Preconditions
- Environment: QA-2, build 2026.4-rc1
- User role: Payroll administrator
- Data: monthly pay schedule with pay date = 28th; region has no holidays in the month

## Test data
| Field | Value |
|---|---|
| Month | November 2026 (28th is a Saturday) |
| Frequency | Monthly |

## Steps and expected results
| Step | Action | Expected result |
|---|---|---|
| 1 | Open Pay Calendar and create a calendar for Nov 2026 | Calendar generated |
| 2 | Review the November period | Warning icon shown: "Pay date falls on a non-working day" |
| 3 | Check the proposed pay date | Friday 27 Nov 2026 |
| 4 | Click Accept | Pay date updates to 27 Nov; audit entry created with user and timestamp |

## Postconditions / cleanup
Delete test calendar.

## Result
Status: Pass | Executed by: A. Silva | Date: 2026-06-03 | Defect ID: -
```
