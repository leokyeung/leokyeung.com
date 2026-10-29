My personal portfolio website

www.leokyeung.com

The site is static HTML, CSS, and JavaScript served by GitHub Pages from
`master`; pushing to `master` deploys production. [index.html](index.html)
renders the **Hybrid** design through the shared `js/designs.js` and
`css/designs.css`, without the design picker.

## Portfolio design previews

Open [designs.html](designs.html) directly in a browser. No build or server is
required. The links at the top switch between complete, responsive designs:

- Editorial: light, serif-led, with restrained green and terracotta accents.
- Midnight: a full-bleed city photograph with charcoal and lime.
- Swiss: bold typography, strict alignment, and red impact highlights.
- Field Notes: a pale green notebook treatment with personal, editorial details.
- Gallery: dark charcoal, rose accents, and staggered project showcases.
- Hybrid: Midnight's full-bleed city hero with Editorial's light content, a
	career-first layout, four impact metrics, and larger project showcases.

Select **06 Hybrid**, or open `designs.html?design=hybrid`, for the refined
combination of directions 1 and 2. Its project image controls switch between
artwork and actual website screenshots without changing the layout. The original
five directions remain available for comparison.

Each design includes career history, impact metrics, skills, contact links, and
expandable LetzHang and DinkLeo case studies. Project artwork comes from the
respective repositories; homepage screenshots were captured on October 28, 2026.
Private repository links, internal tool names, and phone numbers are not exposed.

Direct links use the `design` query parameter, for example
`designs.html?design=midnight`. The preview is marked `noindex`. Google Fonts
requires an internet connection; system serif and sans-serif fallbacks are
provided.
