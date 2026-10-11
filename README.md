# Liza Mallick — Portfolio Website

A responsive React + Vite portfolio starter, styled with a warm beige/brown palette and reusable components. Resume details are stored separately from the UI so the content is easy to update.

## Run locally

1. Install Node.js (18+ recommended).
2. In this folder run:
   ```bash
   npm install
   npm run dev
   ```
3. Open the local URL printed by Vite.

To make a production build:

```bash
npm run build
npm run preview
```

## Where to edit content

- `src/data/portfolio.js` — name, role, intro, contact, education, skills, languages, projects, activities.
- `public/liza-profile.jpg` — profile photo extracted from the supplied resume. Replace it with a preferred portrait if needed.
- `src/components/` — reusable navigation, section heading, info card, and project card components.
- `src/styles.css` — colors, spacing, typography, and responsive breakpoints.

## Notes

- Project and extracurricular details were not filled in on the supplied resume, so the site uses a clear editable empty state instead of inventing experience.
- Email is left blank because no email address was supplied. Add it to `src/data/portfolio.js` and the contact card appears automatically.
- The reference portfolio URL was reachable as a page title, but its full page contents could not be inspected in this environment. This implementation follows a polished modern portfolio layout and uses the supplied resume as the source of personal details.
