# Gwangju Research Workflow

## Purpose

Maintain a chronological, document-based record of the Gwangju development project.

## Operating Loop

### 1. Check current status

- List existing documents.
- Identify missing stages or versions.
- Note recently added notices, amendments, or completion notices.

### 2. Select the next investigation target

Prioritize:

- Development plan notices
- Implementation plan notices
- Completion notices
- District unit plan guidelines
- Related ordinances, closures, or boundary changes

### 3. Discover documents

Use:

- Official municipal notice pages
- Public land-use / planning portals
- Official PDFs and HWP/HWPX files
- Related press references only when helpful

### 4. Save originals

- Save source files in `files/`.
- Prefer `YYYYMMDD_한글명` filenames.
- Keep one original per document.

### 5. Extract Markdown

- Use `kordoc` for HWP, HWPX, and PDF whenever possible.
- Save extracted text to `scripted/{same basename}.md`.
- Preserve structure such as headings, tables, and numbering.

### 6. Summarize

- Save concise Korean summaries to `summary/{same basename}.md`.
- Focus on what changed, why it matters, and how it fits the chronology.

### 7. Integrate

Update:

- `report.md` for file inventory and paths
- `timeline.md` for chronological ordering
- `master.md` for the integrated research narrative

### 8. Decide the next target

- Find missing versions.
- Check for new notices.
- Record the next investigation priority.

## Output Conventions

- Keep raw documents, extracted text, and summaries separate.
- Preserve original filenames in derived Markdown.
- Use exact dates and version numbers whenever available.
- Keep the master narrative aligned with the timeline.
