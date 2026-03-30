# x-scraper MVP Plan

## Objective

Capture posts from selected X accounts via browser-based automation and produce hourly summaries.

## MVP Scope

- Target accounts:
  - @Alisvolatprop12
  - @otaku__yuta
- Browser-based collection only
- Hourly summary per account
- Store raw post metadata and summary output

## Assumptions

- User has a logged-in browser profile available.
- X pages can be read via normal browser automation.
- No API key is required for the first version.

## Proposed Stack

- Node.js
- Playwright for browser automation
- JSON or SQLite for storage
- Markdown for human-readable summaries

## Data to Capture

For each post:
- account handle
- post id / URL
- text
- posted_at
- collected_at
- metrics if visible
- source URL

## Hourly Summary

Group posts by:
- account
- hour bucket based on posted_at or collected_at

Summary output should include:
- headline themes
- notable claims
- repeated topics
- source links

## Next Steps

1. Decide runtime and browser profile strategy
2. Create scraper scaffold
3. Implement post extraction
4. Implement hourly summarizer
5. Save outputs to a local data directory
