My personal portfolio website

www.leokyeung.com

The site is static HTML, CSS, and JavaScript served by GitHub Pages from
`master`; pushing to `master` deploys production. No build step is required.

- [index.html](index.html) is the page shell; `js/designs.js` renders the
  content and `css/designs.css` styles it.
- Career impact figures live in the `stats` object in `js/designs.js` and are
  reused by the metrics, project case studies, and experience entries.
- The page includes career history, impact metrics, skills, contact links, and
  expandable LetzHang and DinkLeo case studies. Project artwork comes from the
  respective repositories; homepage screenshots were captured on October 28, 2026.
  Private repository links, internal tool names, and phone numbers are not exposed.
- [404.html](404.html), [robots.txt](robots.txt), and [sitemap.xml](sitemap.xml)
  are served by GitHub Pages as-is.

Google Fonts requires an internet connection; system serif and sans-serif
fallbacks are provided.
