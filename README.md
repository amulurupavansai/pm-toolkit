# Cookbook Studio

A browser app for building **statutory payroll report cookbooks**: a field-by-field guide a payroll processor uses to prepare a government report.

## What it does
1. **Capture headers**: paste them, or import a sample report, a layout spec or an existing cookbook (.xlsx).
2. **Research**: Claude drafts purpose, format, allowed values and logic for each header. Use an Anthropic API key (Settings), or copy & paste the prompt into Claude.
3. **Map data**: pick source tables and field codes. Suggestions come from your other cookbooks.
4. **Check**: finds format vs length mismatches, works out field positions and record lengths, and flags long examples, missing descriptions and missing mapping.
5. **Export**: an Excel cookbook with the 13 standard columns, plus Pay Components, Record Layout, Review Status and Format Legend sheets.

## Data and privacy
- Everything runs in your browser. Cookbooks are saved in browser storage (`localStorage`). No server.
- Use **Back up all** to save a `.json` file. Share it on your team drive; colleagues load it with **Import file**.
- When a cookbook is imported, example values are not kept, so no real employee records are copied.
- An API key, if you add one, is stored only in your browser and sent only to `api.anthropic.com`.

## Hosting
This is a single static `index.html`, served by GitHub Pages. It uses the SheetJS library (cdnjs) and Google Fonts.
