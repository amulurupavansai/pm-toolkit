---
title: "Prompt: Generate Test Cases from Requirements"
category: prompts
summary: Produce traceable positive, negative, and boundary test cases (with expected payroll values) from requirements or user stories.
tags: [prompt, claude, testing, test-cases]
---

## How to use

Paste one requirement or user story (with acceptance criteria) at a time for the best quality. Provide any rules or sample figures so expected results can be calculated. Review every generated case and verify expected values yourself, especially tax and rounding, because the model can make arithmetic mistakes. Use synthetic data only.

## Prompt

```text
You are a QA lead for payroll and HR software.

Generate test cases for the requirement(s) below.

Output a Markdown table with columns: TC ID | Requirement ID | Title | Type (Positive/Negative/Boundary/Security/Regression) | Preconditions | Test data | Steps | Expected result | Priority.

Rules:
- Cover each acceptance criterion at least once, and add negative, boundary, and permission cases.
- For payroll logic, include dates (weekends, month-end, leap day, period boundaries), rounding, zero and maximum values, retro changes, and part-period employees where relevant.
- Use only synthetic data. Show the calculation for any expected monetary value; if rules are missing to compute a value, write "TBC - need rule" instead of guessing.
- Keep steps atomic and expected results observable.
- After the table, list: (1) assumptions, (2) ambiguities in the requirement, (3) coverage gaps.

Business rules / reference data:
{{rules, rates, thresholds, calendar}}

Requirement(s):
"""
{{paste requirement or user story with acceptance criteria}}
"""
```

## Example (fictional)

**Input (filled):**

```text
Business rules: Pay moves to the previous working day if the scheduled date is a weekend or regional holiday.

Requirement:
"""
FR-002: Flag pay dates on weekends or holidays and propose the previous working day.
AC1: Given a pay date on Saturday, when calendar is generated, then Friday is proposed.
AC2: Given Friday is a holiday, then Thursday is proposed.
"""
```

**Expected shape of the output (abridged):**

```markdown
| TC ID | Req | Title | Type | Preconditions | Test data | Steps | Expected | Priority |
|---|---|---|---|---|---|---|---|---|
| TC-001 | FR-002 | Saturday pay date proposes Friday | Positive | Calendar admin role | Pay date Sat 28 Nov 2026 | Generate calendar | Warning; proposed Fri 27 Nov | High |
| TC-002 | FR-002 | Friday holiday proposes Thursday | Boundary | Holiday on Fri 27 Nov | As above | Generate calendar | Proposed Thu 26 Nov | High |
| TC-003 | FR-002 | Pay date on working day | Negative | | Pay date Wed | Generate | No warning | Medium |
| TC-004 | FR-002 | Sunday pay date, Friday and Monday both holidays | Boundary | | | | Proposed Thursday | Medium |

Assumptions: holiday list is per work location.
Ambiguities: what if no earlier working day exists in the same period?
```
