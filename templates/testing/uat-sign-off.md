---
title: UAT Sign-off
category: testing
summary: Record business acceptance of a release, with scenario results, open items, conditions, and signatures.
tags: [uat, sign-off, acceptance, approval]
---

## How to use

Issue at the end of user acceptance testing. List what was tested, results, any open defects or conditions, and the explicit decision. Approvers should be the business owners who accepted accountability, not just the project team. Keep the signed copy with the release record for audit.

## Template

```markdown
# UAT sign-off: {{Project / release}}

| Field | Value |
|---|---|
| Release / build | |
| UAT period | |
| Environment | |
| Test lead | |

## 1. Scope tested
Features, interfaces, reports, roles.

## 2. Results summary
| Scenario group | Total | Passed | Failed | Blocked | Notes |
|---|---|---|---|---|---|

## 3. Open defects at sign-off
| ID | Severity | Description | Workaround | Decision (fix before go-live / accept / defer) | Target date |
|---|---|---|---|---|---|

## 4. Conditions of acceptance
- 

## 5. Business readiness
- [ ] Users trained
- [ ] Procedures updated
- [ ] Support model agreed
- [ ] Data migration validated

## 6. Decision
- [ ] Accepted
- [ ] Accepted with conditions (above)
- [ ] Rejected - reasons:

## 7. Signatures
| Name | Role | Decision | Signature | Date |
|---|---|---|---|---|
```

## Example (fictional)

```markdown
# UAT sign-off: Pay Calendar Manager 2026.4

| Field | Value |
|---|---|
| Release / build | 2026.4-rc4 |
| UAT period | 2026-06-23 to 2026-07-03 |
| Environment | UAT-1 |
| Test lead | Ana Silva |

## 1. Scope tested
Calendar generation (all four frequencies), holiday clash handling, cut-off validation, employee publishing, audit log, roles: administrator, HR manager, employee.

## 2. Results summary
| Scenario group | Total | Passed | Failed | Blocked | Notes |
|---|---|---|---|---|---|
| Calendar generation | 12 | 12 | 0 | 0 | |
| Holiday handling | 10 | 9 | 1 | 0 | DEF-131 |
| Publishing | 8 | 8 | 0 | 0 | |
| Audit and roles | 6 | 6 | 0 | 0 | |

## 3. Open defects at sign-off
| ID | Severity | Description | Workaround | Decision | Target date |
|---|---|---|---|---|---|
| DEF-131 | Medium | Holiday label truncated on small screens | None needed | Defer | 2026.5 |

## 4. Conditions of acceptance
- Payroll Ops confirms holiday data for all live regions before go-live.

## 5. Business readiness
- [x] Users trained
- [x] Procedures updated
- [x] Support model agreed
- [ ] Data migration validated (not applicable: no migration)

## 6. Decision
- [x] Accepted with conditions (section 4)

## 7. Signatures
| Name | Role | Decision | Signature | Date |
|---|---|---|---|---|
| Priya Raman | Head of Payroll Operations | Accepted with conditions | P. Raman | 2026-07-03 |
| Sam Okafor | Product Manager | Accepted | S. Okafor | 2026-07-03 |
```
