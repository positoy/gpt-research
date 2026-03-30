# Gwangju Research

## File organization rules

When a new document is discovered on the internet, record it in `report.md` and save related content in each directory.

For each source document, store:

- Where the document was found
- Local original file path
- Extracted PDF text saved as `scripted/{filename}.md` using the same filename as the original file
- Summarized text saved as `summary/{filename}.md` using the same filename as the original file

## Suggested directory layout

- `files/` — original downloaded documents
- `scripted/` — extracted text from PDFs
- `summary/` — human-readable summaries
- `report.md` — master tracking document

## Naming convention

- Keep original filenames when saving derived Markdown files
- Prefer Korean filenames when the source document uses Korean
- Use the exact same base filename, changing only the extension to `.md`

## Workflow

1. Discover document
2. Save original locally
3. Extract PDF text using OpenClaw's `pdf` tool workflow from the official docs
4. Write the extracted text into `scripted/`
5. Write a concise summary into `summary/`
6. Update `report.md`
