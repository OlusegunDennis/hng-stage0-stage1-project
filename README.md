# hng-stage0-stage1-project

Project built for HNG internship Stage 0 & Stage 1 tasks:
- Stage 0: Profile card (semantic HTML, accessibility, time in ms, social links, hobbies/dislikes).
- Stage 1: About page and Contact page (form validation & accessible form).

## Structure


## How to run locally
1. Clone the repo.
2. Open `index.html` (double-click or use a local static server).
   - Recommended: use a simple static server for consistent behavior:
     - `npx serve` (if Node installed)
     - OR `python -m http.server 8000` (Python)
3. Navigate pages:
   - `index.html` → profile card
   - `about.html` → about page
   - `contact.html` → contact form

## Notes
- All required `data-testid` attributes are included for automated tests.
- Form validation is client-side only (no backend). On valid submission the success message is shown.
- Images: place avatar(s) inside `assets/images/` and update `index.html` image `src` as needed.

## Deployment
- Deploy to GitHub Pages or Netlify by pointing to the repository root.
- Ensure only the project files are published (no extra reports). Delete any non-required files.

## License
MIT (see LICENSE)
