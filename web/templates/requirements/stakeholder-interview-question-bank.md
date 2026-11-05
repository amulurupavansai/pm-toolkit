---
title: Requirements Gathering and Stakeholder Interview Question Bank
category: requirements
summary: Ready-to-ask interview questions for payroll, HR, finance, compliance, IT, and employee stakeholders, plus an interview guide.
tags: [elicitation, interview, stakeholders, discovery]
---

## How to use

Pick 8-12 questions for a 45-60 minute interview; do not read the whole bank. Start with open questions, move to specifics, and always close with "what haven't I asked?". Capture answers in the notes grid and tag each with a candidate requirement ID. Tailor the wording to the person's role.

## Template

```markdown
# Interview guide: {{Stakeholder name / role}}

**Date:** | **Interviewer:** | **Note-taker:** | **Duration:**
**Goal of interview:**

## Opening (5 min)
- Purpose, confidentiality, recording consent
- "Tell me about your role and how you interact with {{process/system}}."

## Core questions (30-40 min)
{{Pick from the bank below}}

## Closing (5 min)
- "What haven't I asked that I should have?"
- "Who else should I speak to?"
- "What would success look like for you?"
- Agree follow-up and playback of notes

## Notes grid
| # | Question | Answer / quote | Pain point? | Candidate requirement | Follow-up |
|---|---|---|---|---|---|
```

### Question bank

**General / any stakeholder**
1. Walk me through a typical week/pay cycle from your perspective.
2. What is the most frustrating part of the current process?
3. What do you do when something goes wrong? Give a recent example.
4. Which reports, spreadsheets, or workarounds do you rely on?
5. What decisions do you make, and what information do you need to make them?
6. What would you stop doing if you could?

**Payroll operations**
1. What are your pay cycles, cut-off dates, and processing windows?
2. How do inputs reach you (timesheets, new starters, leavers, changes)? How late can they arrive?
3. Which checks do you run before and after a payroll run? Which are manual?
4. How do you handle retro pay, off-cycle payments, and corrections?
5. How often do you reissue or reverse payments, and why?
6. What are the busiest days and the biggest risks?
7. How are third-party providers (banks, benefits, pensions) paid or reported to?

**HR / people operations**
1. Where is employee master data created and who owns it?
2. What lifecycle events affect pay (hire, transfer, promotion, leave, termination)?
3. How quickly do changes reach payroll? What causes delays?
4. How are policies (leave, overtime, allowances) encoded and who maintains them?
5. What do employees ask HR about their pay?

**Finance / accounting**
1. How does payroll data reach the general ledger? How often?
2. Which cost-centre or allocation rules apply?
3. What reconciliations are performed and who signs off?
4. What approval limits and segregation-of-duties controls exist?
5. What do auditors typically ask for?

**Compliance / legal / internal audit**
1. Which regulations, filings, and deadlines apply (by country/state)?
2. How is personal and salary data protected, retained, and deleted?
3. What evidence is needed to prove a control operated?
4. What recent findings or incidents should we design against?

**IT / integration**
1. Which systems exchange data with payroll and how (file, API, manual)?
2. What are the security, access, and environment constraints?
3. How are changes tested and released? What are blackout windows?
4. What data quality problems recur?

**Employees / managers (end users)**
1. How do you find out when and how much you will be paid?
2. What do you do when something looks wrong on your payslip?
3. How do you submit time, expenses, or changes today?
4. What would make you trust the process more?

**Prioritisation and success**
1. If we could only fix one thing, what should it be?
2. How would you measure improvement?
3. What would make you resist this change?

## Example (fictional)

```markdown
# Interview guide: Payroll Operations Lead

**Date:** 2026-02-10 | **Interviewer:** Jordan Lee | **Note-taker:** Ana Silva | **Duration:** 50 min
**Goal of interview:** Understand how off-cycle payment requests are received, validated, and paid.

## Notes grid
| # | Question | Answer / quote | Pain point? | Candidate requirement | Follow-up |
|---|---|---|---|---|---|
| 1 | How do inputs reach you? | "Mostly email, some Slack; I copy them into a tracker." | Yes | BR-001 Single intake channel | Ask for 1 week of sample requests |
| 2 | What checks do you run before a run? | "Compare gross to last period; flag changes over 10%." | No | BR-006 Variance report | Confirm threshold with finance |
| 3 | How do you handle corrections? | "Off-cycle run, needs two approvals but we only record one in email." | Yes | BR-002 Dual approval | Get approval matrix |
| 4 | Busiest days? | "Two days before pay date; no new requests accepted after noon." | Yes | BR-007 Cut-off enforcement | Validate cut-off times |

**Closing notes:** Suggested speaking with the finance controller about approval limits. Agreed to review playback notes by Friday.
```
