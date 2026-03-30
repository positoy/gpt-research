# Gwangju Research Workflow

## Goal

Keep a chronological, document-based record of the Gwangju development project and related planning documents.

## Loop

1. Check current status
   - list existing documents
   - identify missing stages / versions
   - note recently added notices or amendments

2. Choose the next target
   - development plan notices
   - implementation plan notices
   - completion notices
   - district unit plan guidelines
   - related ordinance / boundary / closure notices

3. Discover documents
   - municipal notice pages
   - public land-use / planning portals
   - official PDFs / HWP files
   - related press references when needed

4. Save originals
   - store source files in `files/`
   - use `YYYYMMDD_한글명` filenames when possible

5. Extract Markdown
   - use `kordoc` for HWP / HWPX / PDF
   - save as `scripted/{same basename}.md`

6. Summarize
   - save concise Korean summary in `summary/{same basename}.md`
   - focus on what changed and why it matters

7. Integrate
   - update `report.md` with document metadata and file paths
   - maintain `timeline.md` for chronological order
   - maintain `master.md` for the combined project narrative

8. Select the next target
   - find missing versions
   - check for new notices
   - record the next investigation priority

## Output conventions

- Keep one original file per discovered document.
- Keep extracted text and summary as separate Markdown files.
- Preserve the original filename when generating derived files.
- Prefer exact dates and version numbers in filenames and summaries.

## Project structure

- `files/` — original documents
- `scripted/` — extracted Markdown
- `summary/` — document summaries
- `report.md` — document index
- `timeline.md` — chronological log
- `master.md` — integrated research narrative
