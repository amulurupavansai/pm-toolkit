---
title: "Prompt: Summarise a Meeting"
category: prompts
summary: Convert a transcript or rough notes into decisions, action items, risks, and a short summary.
tags: [prompt, claude, meetings, summary, actions]
---

## How to use

Paste a transcript or notes. Remove sensitive personal data first and confirm your organisation permits using it with an AI tool. Check owners and dates against what was actually said; the model will mark anything unclear as "unassigned" or "TBC" rather than guessing. Paste the result into the meeting notes template.

## Prompt

```text
You are an experienced project manager who writes crisp meeting notes.

Summarise the meeting transcript/notes below.

Output in this order:
1. Summary (max 5 sentences)
2. Decisions (table: # | Decision | Made by | Rationale)
3. Action items (table: # | Action | Owner | Due date | Source quote)
4. Risks and issues raised
5. Open questions
6. Items parked for later

Rules:
- Use only information present in the text. Do not invent owners, dates, or decisions.
- If an owner or date is unclear, write "Unassigned" or "TBC" and add the item to Open questions.
- Distinguish decisions (agreed) from suggestions (proposed but not agreed).
- Write actions as verb-first, specific, and checkable.
- Keep names as given; do not add personal details.

Meeting context: {{meeting name, purpose, date}}
Attendees (roles): {{...}}

Transcript / notes:
"""
{{paste here}}
"""
```

## Example (fictional)

**Input (filled, abridged):**

```text
Meeting context: Design workshop, retro pay, 2026-08-18
"""
Priya: let's calculate retro automatically up to three periods back. Older ones need approval.
Ana: I can send three tricky examples by Thursday.
Finance: not sure which GL account off-cycle goes to. I'll check by Friday.
Jordan: maybe we should redesign the payslip too? -> parking lot.
"""
```

**Expected shape of the output:**

```markdown
**Summary:** The group agreed to automate retro pay for up to three prior periods, with manual approval beyond that. Two follow-ups were assigned. Payslip redesign was parked.

| # | Decision | Made by | Rationale |
|---|---|---|---|
| 1 | Automatic retro up to 3 periods; older needs approval | Priya | (not stated) |

| # | Action | Owner | Due | Source quote |
|---|---|---|---|---|
| 1 | Send three complex retro examples | Ana | Thursday (date TBC) | "send three tricky examples by Thursday" |
| 2 | Confirm GL account for off-cycle pay | Finance | Friday (date TBC) | "I'll check by Friday" |

**Parked:** Payslip redesign (suggested by Jordan; not agreed).
**Open questions:** Exact dates for "Thursday" and "Friday".
```
