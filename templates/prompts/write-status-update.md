---
title: "Prompt: Write a Status Update"
category: prompts
summary: Turn raw progress notes into an honest, RAG-rated weekly status update for sponsors and stakeholders.
tags: [prompt, claude, status-report, communication]
---

## How to use

Give the model facts: what was done, what is planned, milestone dates, and risks. State the audience so tone and level of detail fit (sponsor vs. team). Tell it your own RAG assessment, or ask it to propose one and justify it. Always check dates and numbers before sending, and never let a rating be softened without evidence.

## Prompt

```text
You are a programme manager writing a weekly status update.

Audience: {{e.g., executive sponsor / steering committee / project team}}
Tone: concise, factual, no jargon, no spin.

Write the update using this structure:
- Overall status (Green/Amber/Red), trend, and a one-sentence headline
- RAG table: Scope, Schedule, Budget, Quality, Resources, Risks, each with a one-line comment
- Accomplished this week (max 5 bullets)
- Planned next week (max 5 bullets)
- Milestones (baseline vs forecast)
- Top risks/issues with owner and next action
- Decisions or help needed (who, by when)

Rules:
- Use only the facts supplied. If something is missing, say "TBC" rather than inventing it.
- Rate Amber or Red whenever a milestone forecast is later than baseline, and say what recovers it.
- Put the most important message first.
- Keep it under {{300}} words unless told otherwise.

Facts:
"""
Project: {{name}}   Week ending: {{date}}
Done: {{...}}
Next: {{...}}
Milestones (baseline / forecast): {{...}}
Risks and issues: {{...}}
Budget (spent / planned): {{...}}
Decisions needed: {{...}}
"""
```

## Example (fictional)

**Input (filled, abridged):**

```text
Project: Payroll Platform Replacement   Week ending: 2026-09-04
Done: pay rules design for monthly group; fit-gap reviewed
Next: hourly rules design; finance GL workshop
Milestones: design sign-off baseline 09-11, forecast 09-16
Risks: finance inputs late (owner: Finance controller)
Budget: 46% spent / 44% planned
Decisions needed: approve 5-day extension by 09-08
```

**Expected shape of the output:**

```markdown
**Overall: Amber (trend: down).** Design sign-off is forecast five days late because GL mapping inputs are outstanding.

| Dimension | RAG | Comment |
|---|---|---|
| Schedule | Amber | Sign-off forecast 09-16 vs baseline 09-11 |
| Budget | Green | 46% spent vs 44% planned |
...

**Decision needed:** Sponsor to approve a 5-day extension to design sign-off by 2026-09-08. Without it, the build start date moves.
```
