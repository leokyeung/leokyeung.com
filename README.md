My personal portfolio website

www.leokyeung.com

The site is static HTML, CSS, and JavaScript served by GitHub Pages from
`master`; pushing to `master` deploys production. No build step is required.

- [index.html](index.html) is the page shell; `js/designs.js` renders the
  content and `css/designs.css` styles it.
- Career impact figures live in the `stats` object in `js/designs.js` and are
  reused by the metrics, project case studies, and experience entries.
- The project section uses the approved refined-gallery design: LetzHang,
  Escalation Automation, then DinkLeo, each in its own full-width card. The
  middle card places its description on the left on desktop; mobile keeps
  artwork first. Problem and contribution summaries stay visible, and public
  projects have engineering details expanded by default with keyboard-accessible
  disclosure controls. Preview toggles, feature lists, and duplicate links have
  been replaced by a single project action and a compact technology list.
- The page also includes career history, impact metrics, skills, and contact
  links. Project artwork comes from the respective repositories; homepage
  screenshots were captured on October 28, 2026.
  Private repository links, internal tool names, and phone numbers are not exposed.
- [robots.txt](robots.txt) and [sitemap.xml](sitemap.xml)
  are served by GitHub Pages as-is.

Google Fonts requires an internet connection; system serif and sans-serif
fallbacks are provided.
