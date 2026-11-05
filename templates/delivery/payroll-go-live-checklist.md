---
title: Payroll Go-Live Checklist
category: delivery
summary: Cut-over and go-live readiness checklist for payroll, covering data, calculations, statutory setup, payments, people, and rollback.
tags: [go-live, cutover, checklist, payroll, rollback, hypercare]
---

## How to use

Review at T-4 weeks, T-1 week, and the day before go-live; the go/no-go meeting should use the "Gate criteria" at the bottom. Every line needs an owner and evidence (link or reference). Tailor statutory and bank items to each country or jurisdiction. Payroll cut-overs are best done at a pay-period boundary so year-to-date balances are clean.

## Template

```markdown
# Go-live checklist: {{Project}} - first live pay date {{YYYY-MM-DD}}

| Field | Value |
|---|---|
| Go/no-go date | |
| Cut-over lead | |
| Rollback decision owner | |

## A. Governance and readiness
- [ ] UAT signed off; open defects accepted by business
- [ ] Parallel runs completed; variances explained and signed off
- [ ] Go/no-go meeting held and decision recorded
- [ ] Support model and hypercare roster published
- [ ] Communications sent to employees and managers

## B. Data and migration
- [ ] Final employee master data loaded and reconciled (headcount, status)
- [ ] Year-to-date balances loaded and reconciled (gross, tax, deductions, net)
- [ ] Bank details validated (including test payments/pre-notes where applicable)
- [ ] Leave and accrual balances loaded
- [ ] Recurring deductions, garnishments, loans, and benefits loaded
- [ ] Data freeze in legacy system and change log in place

## C. Configuration and calculations
- [ ] Pay calendar, cut-offs, and pay dates configured
- [ ] Pay elements, rates, and rules approved
- [ ] Statutory tables, rates, thresholds, and filings set up for the tax year
- [ ] Overtime, shift, and allowance rules verified
- [ ] Retro pay and off-cycle processes tested
- [ ] Payslip layout and content approved

## D. Integrations and finance
- [ ] Time and attendance, HR, and benefits interfaces tested end to end
- [ ] GL journal mapped and test posting reconciled
- [ ] Bank payment file format accepted by the bank
- [ ] Statutory/third-party remittance files validated

## E. Security and compliance
- [ ] User roles and segregation of duties reviewed
- [ ] Production access approved; test accounts removed
- [ ] Data privacy impact assessment complete
- [ ] Audit trail and record retention enabled

## F. People and process
- [ ] Payroll team trained and procedures documented
- [ ] Managers/employees given guidance on new self-service
- [ ] Payroll calendar for the first 3 cycles published

## G. Cut-over plan
- [ ] Cut-over runbook with times, owners, and dependencies
- [ ] Rehearsal completed with timings
- [ ] Rollback plan (point-of-no-return, triggers, steps, fallback manual payment process)

## H. First live cycle controls
- [ ] Pre-run checks: headcount, new starters/leavers, variance report
- [ ] Gross-to-net sample check (min. {{n}} employees, incl. edge cases)
- [ ] Payment total reconciled to bank file and GL
- [ ] Post-pay reconciliation and issue log reviewed
- [ ] Statutory filings submitted on time

## Gate criteria (go / no-go)
| Criterion | Evidence | Met? |
|---|---|---|
```

## Example (fictional)

```markdown
# Go-live checklist: Payroll platform replacement - first live pay date 2027-01-29

| Field | Value |
|---|---|
| Go/no-go date | 2027-01-15 |
| Cut-over lead | Taylor Brooks |
| Rollback decision owner | Priya Raman |

## A. Governance and readiness
- [x] UAT signed off (2026-12-18); 2 Low defects accepted
- [x] Parallel run 2: 2,791 of 2,800 employees matched to the cent; 9 variances explained and approved
- [x] Go/no-go held 2027-01-15; decision: Go
- [x] Hypercare roster published (daily 09:00 stand-up for 6 weeks)

## B. Data and migration
- [x] Final load: headcount reconciled 2,800 = 2,800
- [x] YTD balances reconciled; difference 0.00 on gross, tax, net
- [ ] Bank details: 14 records pending employee confirmation (owner: HR ops, due 2027-01-22)

## D. Integrations and finance
- [x] GL journal test posted; control totals matched
- [x] Bank accepted test file 2027-01-12

## G. Cut-over plan
- [x] Rehearsal 2027-01-09 completed in 7h40 (window 10h)
- [x] Rollback trigger: if reconciliation to bank file fails after final run, revert to legacy run and pay via manual bank batch by 12:00 on pay date minus 1

## H. First live cycle controls
- [ ] Gross-to-net check: 60 sampled employees including leavers, multi-job, and retro cases
- [ ] Payment total reconciled to bank file and GL

## Gate criteria
| Criterion | Evidence | Met? |
|---|---|---|
| Zero unexplained variances | Parallel run 2 report | Yes |
| Bank file accepted | Bank confirmation 2027-01-12 | Yes |
| Bank details complete | HR ops report | Pending (due 2027-01-22) |
```
