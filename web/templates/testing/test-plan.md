---
title: Test Plan
category: testing
summary: Define test scope, approach, environments, data, schedule, entry/exit criteria, and risks for a release.
tags: [test-plan, qa, strategy, parallel-run]
---

## How to use

Create one test plan per release or project. Agree the entry and exit criteria with the sponsor up front so "done" is not debated at the end. For payroll, plan for realistic test data (anonymised), multiple pay cycles, a parallel run, and regression of statutory calculations. Link to individual test cases rather than copying them.

## Template

```markdown
# Test plan: {{Project / release}}

| Field | Value |
|---|---|
| Version / status | |
| Test manager | |
| Approvers | |

## 1. Purpose and scope
**In scope (features, integrations, reports):**
**Out of scope:**

## 2. Test approach
| Level | Objective | Owner | Method (manual/auto) |
|---|---|---|---|
| Unit / component | | Dev | |
| System | | QA | |
| Integration | | QA | |
| Regression | | QA | |
| Parallel run | | Payroll Ops | |
| Performance | | | |
| Security / access | | | |
| UAT | | Business | |

## 3. Requirements coverage
Traceability matrix location: {{link}}

## 4. Test environments
| Env | Purpose | Data | Refresh | Owner |
|---|---|---|---|---|

## 5. Test data
Source, anonymisation, scenarios (new hire, leaver, retro, multi-job, garnishment, etc.).

## 6. Roles and responsibilities

## 7. Schedule
| Phase | Start | End | Dependencies |
|---|---|---|---|

## 8. Entry criteria
- [ ] 
## 9. Exit criteria
- [ ] 0 open Critical/High defects
- [ ] x% planned tests executed, y% passed
## 10. Defect management
Severity definitions, triage cadence, tool, SLAs.

## 11. Risks and mitigations
| Risk | Impact | Mitigation |
|---|---|---|

## 12. Deliverables
Test cases, execution reports, defect log, sign-off.
```

## Example (fictional)

```markdown
# Test plan: Pay Calendar Manager, release 2026.4

| Field | Value |
|---|---|
| Version / status | 1.0 / Approved |
| Test manager | Ana Silva |
| Approvers | Sam Okafor (PM), Priya Raman (Payroll Ops) |

## 1. Purpose and scope
**In scope:** calendar generation, holiday clash handling, cut-off validation, publishing to employees, audit log.
**Out of scope:** payroll calculation engine, bank file generation.

## 2. Test approach
| Level | Objective | Owner | Method |
|---|---|---|---|
| System | Verify FR-001 to FR-004 | QA | Manual + 40 automated checks |
| Regression | Existing calendar import unaffected | QA | Automated |
| Performance | Generate 26 periods < 5s with 1,000 concurrent admins | QA | Load tool |
| Security | Role-based access, audit integrity | Security | Manual |
| UAT | Real-world scenarios | Payroll Ops | Manual |

## 4. Test environments
| Env | Purpose | Data | Refresh | Owner |
|---|---|---|---|---|
| QA-2 | System test | Synthetic, 5 regions | Weekly | DevOps |
| UAT-1 | UAT | Anonymised copy | Before UAT | DevOps |

## 7. Schedule
| Phase | Start | End | Dependencies |
|---|---|---|---|
| System test | 2026-06-01 | 2026-06-19 | Build rc1 |
| UAT | 2026-06-22 | 2026-07-03 | System exit |

## 8. Entry criteria
- [x] Code complete, build deployed to QA-2
- [x] Test cases reviewed

## 9. Exit criteria
- [ ] 0 open Critical/High defects
- [ ] 100% Must tests executed; at least 95% pass
- [ ] UAT sign-off obtained

## 10. Defect management
Severity 1-4; triage daily at 10:00; Sev 1 fix within 1 day.

## 11. Risks and mitigations
| Risk | Impact | Mitigation |
|---|---|---|
| Holiday data late | Blocks FR-002 tests | Use stub data; confirm source by 2026-05-25 |
```
