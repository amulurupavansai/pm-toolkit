---
title: User Story and Acceptance Criteria
category: requirements
summary: Write testable user stories with Given/When/Then acceptance criteria and a definition of ready.
tags: [user-story, acceptance-criteria, gherkin, agile]
---

## How to use

One story should deliver one slice of user value and fit in a sprint. Write the story in the "As a / I want / so that" form, then add acceptance criteria that a tester could pass or fail without asking you questions. Include negative and boundary cases, especially for money and dates. Check the Definition of Ready before the story enters a sprint.

## Template

```markdown
# {{ID}}: {{Short title}}

**As a** {{persona}}
**I want** {{capability}}
**so that** {{benefit}}.

**Priority:** {{Must/Should/Could}}  **Estimate:** {{points}}  **Epic:** {{epic}}
**Linked requirement(s):** {{BR-/FR- IDs}}

## Acceptance criteria
1. **Given** {{context}}, **when** {{action}}, **then** {{observable outcome}}.
2. **Given** ..., **when** ..., **then** ...
3. (Negative) **Given** ..., **when** ..., **then** an error is shown ...
4. (Boundary) ...

## Business rules
- 

## Out of scope
- 

## UX / notes
- Mockup link, copy, accessibility notes

## Definition of Ready
- [ ] Persona and value are clear
- [ ] Acceptance criteria agreed with product owner
- [ ] Dependencies identified
- [ ] Test data available
- [ ] Estimated

## Definition of Done
- [ ] Criteria verified by QA
- [ ] Permissions and audit logging checked
- [ ] Documentation updated
- [ ] Product owner accepted
```

## Example (fictional)

```markdown
# US-102: Warn when a pay date falls on a non-working day

**As a** payroll administrator
**I want** the calendar to flag pay dates that fall on weekends or holidays
**so that** employees are paid on time without me checking manually.

**Priority:** Must  **Estimate:** 5  **Epic:** Pay Calendar Manager
**Linked requirement(s):** FR-002

## Acceptance criteria
1. **Given** a monthly calendar with pay date on the 28th, **when** the 28th is a Saturday, **then** the period is flagged and the proposed pay date is the preceding Friday.
2. **Given** a flagged period, **when** I accept the proposal, **then** the pay date updates and the change is audit-logged with my user ID.
3. **Given** the holiday list for the employee's region includes Friday, **when** the 28th is a Saturday, **then** the proposed date is Thursday.
4. (Negative) **Given** I reject the proposal, **when** I save, **then** the original date is kept and a "manually overridden" label is shown.
5. (Boundary) **Given** a pay date on 31 December that is a working day, **when** the calendar is generated, **then** no warning appears.

## Business rules
- Pay moves earlier, never later, when the date is non-working.
- Holidays are determined by the employee's work location.

## Out of scope
- Pay date changes to already-processed periods.
```
