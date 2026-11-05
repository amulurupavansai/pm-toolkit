---
title: Test Execution Report
category: testing
summary: Summarise test progress and results, defects, coverage, risks, and a go/no-go recommendation.
tags: [test-report, qa, metrics, go-no-go]
---

## How to use

Issue at agreed intervals (daily during execution, final at exit). Lead with the recommendation, then the numbers. Report facts: executed, passed, failed, blocked, and open defects by severity. Call out anything that threatens the exit criteria rather than burying it in tables.

## Template

```markdown
# Test execution report: {{Release}} - {{period / final}}

| Field | Value |
|---|---|
| Report date | |
| Prepared by | |
| Build / environment | |

## 1. Summary and recommendation
**Recommendation:** Go / Conditional go / No-go
{{2-4 sentences.}}

## 2. Execution status
| Area | Planned | Executed | Passed | Failed | Blocked | Not run | Pass % |
|---|---|---|---|---|---|---|---|
| Total | | | | | | | |

## 3. Defects
| Severity | Opened | Closed | Open | Of which deferred |
|---|---|---|---|---|
| Critical | | | | |
| High | | | | |
| Medium | | | | |
| Low | | | | |

**Key open defects:** {{IDs and one-line impact}}

## 4. Requirements coverage
% requirements with at least one passing test; uncovered requirements.

## 5. Exit criteria check
| Criterion | Target | Actual | Met? |
|---|---|---|---|

## 6. Risks, blockers, and issues

## 7. Deviations from plan

## 8. Next steps
```

## Example (fictional)

```markdown
# Test execution report: Pay Calendar Manager 2026.4 - final

| Field | Value |
|---|---|
| Report date | 2026-06-19 |
| Prepared by | Ana Silva |
| Build / environment | 2026.4-rc3 / QA-2 |

## 1. Summary and recommendation
**Recommendation:** Conditional go.
All Must requirements are verified. One High defect (DEF-118, holiday data for one region missing) is open with a fix scheduled for rc4; release proceeds to UAT if rc4 passes the retest.

## 2. Execution status
| Area | Planned | Executed | Passed | Failed | Blocked | Not run | Pass % |
|---|---|---|---|---|---|---|---|
| Functional | 96 | 96 | 91 | 4 | 1 | 0 | 95% |
| Regression | 40 | 40 | 40 | 0 | 0 | 0 | 100% |
| Security | 12 | 12 | 12 | 0 | 0 | 0 | 100% |
| **Total** | 148 | 148 | 143 | 4 | 1 | 0 | 97% |

## 3. Defects
| Severity | Opened | Closed | Open | Deferred |
|---|---|---|---|---|
| Critical | 1 | 1 | 0 | 0 |
| High | 6 | 5 | 1 | 0 |
| Medium | 9 | 7 | 2 | 2 |
| Low | 5 | 2 | 3 | 3 |

**Key open defects:** DEF-118 (High): no holiday data for one region, warnings suppressed.

## 5. Exit criteria check
| Criterion | Target | Actual | Met? |
|---|---|---|---|
| Critical/High open | 0 | 1 High | No |
| Must tests executed | 100% | 100% | Yes |
| Pass rate | >=95% | 97% | Yes |

## 6. Risks, blockers, and issues
Holiday data vendor delivery slipped one week; stub data in use.

## 8. Next steps
Retest DEF-118 on rc4 (2026-06-22); start UAT on 2026-06-23 if passed.
```
