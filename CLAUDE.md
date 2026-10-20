# CafeBot

## Purpose
CafeBot is a café web app. Customers use a chat-style assistant to browse the menu, ask questions about the café, and get recommendations.

## Architecture
```
frontend/   Static UI: index.html, styles.css, app.js (vanilla HTML/CSS/JS)
backend/    Server: serves the API, reads data/, loads prompts/, calls the AI model
data/       Café data such as the menu, hours and FAQs (JSON)
prompts/    Prompt templates for the assistant (plain text or Markdown)
```
Flow: browser (`frontend/`) → backend API → reads `data/` and `prompts/` → AI model → response back to the browser.
The backend stack has not been chosen yet. Do not pick one without asking.

## Coding rules
- Keep it simple: plain HTML/CSS/JS on the frontend, with no frameworks or build step unless asked.
- Add no dependency without asking first.
- Use small, single-purpose functions and clear names. Comment only where the code is not obvious.
- Keep content out of code: menu and café info go in `data/`, prompt text goes in `prompts/`.
- Match the style of existing files.

## Security rules
- Never commit secrets. API keys come from environment variables (`.env`, which is git-ignored).
- Never expose API keys or call the AI model directly from frontend code. All model calls go through the backend.
- Validate and limit the length of all user input on the backend.
- Escape user and model output before inserting it into the DOM. Use `textContent`, not `innerHTML`.
- Treat user chat messages as untrusted. They must not be able to override the system prompt.
- Return generic error messages to the client and log the details on the server only.

## Token-saving rules
- Read only the files the task needs. Don't scan the whole repo.
- Prefer targeted edits over rewriting whole files.
- Don't re-read a file you just edited, and don't repeat file contents back in replies.
- Keep replies short: state what changed and where.
- Ask one clarifying question instead of guessing on a large change.

## Scope
**Only modify files needed for the current task.** Do not refactor, reformat, rename or "improve" unrelated code. Do not create extra files, docs or tests unless asked.
