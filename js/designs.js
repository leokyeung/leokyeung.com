const designs = [
  { id: 'editorial', name: 'Editorial', number: '01' },
  { id: 'midnight', name: 'Midnight', number: '02' },
  { id: 'swiss', name: 'Swiss', number: '03' },
  { id: 'fieldnotes', name: 'Field Notes', number: '04' },
  { id: 'gallery', name: 'Gallery', number: '05' },
  { id: 'hybrid', name: 'Hybrid', number: '06' }
];
const picker = document.querySelector('.design-picker');
const requestedDesign = picker ? new URLSearchParams(location.search).get('design') : document.body.dataset.design;
const design = designs.find(item => item.id === requestedDesign) || designs[0];
document.body.dataset.design = design.id;
if (picker) document.title = `Leo Yeung | ${design.name}`;

const icon = name => name === 'arrow-top-right'
  ? '<i class="icofont-arrow-up icon-diagonal" aria-hidden="true"></i>'
  : `<i class="icofont-${name}" aria-hidden="true"></i>`;
const external = 'target="_blank" rel="noopener noreferrer"';
const resumeUrl = 'https://leo-resume.s3.us-west-1.amazonaws.com/Leo+Yeung+Resume.pdf';
const resumeLink = (suffix = '') => `<a href="${resumeUrl}" ${external} aria-label="Résumé (PDF, opens in a new tab)">Résumé${suffix}</a>`;
const projects = [
  {
    name: 'LetzHang', id: 'letzhang', url: 'https://letzhang.com/', category: 'Side project / Scheduling', number: '01',
    tagline: 'Scheduling made simple.',
    description: 'A clean and flexible scheduling tool for coordinating hangouts and group availability, with account-free RSVPs and calendar integration.',
    problem: 'Getting a group together should not require another group chat, spreadsheet, or account for every friend.',
    solution: 'I built the complete experience: host dashboards, shareable invitations, availability matching, private response editing, email recovery, and calendar integration.',
    engineering: 'Protected guest submissions, duplicate-request handling, and durable notification jobs with retries keep the experience dependable beyond the browser.',
    stack: ['React', 'TypeScript', 'Supabase', 'Vercel', 'Resend'],
    features: ['Account-free RSVPs', 'Date matching', 'Calendar integration']
  },
  {
    name: 'DinkLeo', id: 'dinkleo', url: 'https://dinkleo.com/', category: 'Side project / Pickleball', number: '02',
    tagline: 'Smarter pickleball round robins.',
    description: 'Organizes fair and fun round robins with automated matchups, player management, score entry, and standings.',
    problem: 'Running a round robin means juggling fair matchups, registrations, last-minute changes, and scores while everyone wants to play.',
    solution: 'I built rotating-partner and fixed-team formats, partner invitations, team waitlists, vacancy replacement, score entry, and event and cross-event rankings.',
    engineering: 'The scheduling engine verifies partner rotation, opponents, and court balance. Server-side permissions separate organizer controls from player actions.',
    stack: ['JavaScript', 'HTML / CSS', 'Supabase', 'PostgreSQL', 'Vercel'],
    features: ['Verified scheduling', 'Player management', 'Performance rankings']
  }
];
const supportProjects = [
  {
    id: 'escalation-automation', name: 'Escalation Automation', category: 'Internal tool',
    tagline: 'One-click escalation automation.',
    description: 'Streamlines escalations with one click. It auto-gathers context, drafts summaries, and routes each case to the right team, cutting processing time by 93%, from over two minutes to about eight seconds, across 6,463 production escalations.',
    problem: 'Repetitive escalation filing took time away from investigation and resolution.',
    solution: 'Built a team-wide JavaScript Chrome extension that turns escalation into one click: it gathers the case context, drafts a summary, and routes the escalation to the right team.',
    engineering: 'The extension reduced processing time by 93% across 6,463 production escalations, bringing a task that took over two minutes down to about eight seconds.',
    stack: ['JavaScript', 'Chrome extension', 'Support automation'], features: []
  },
  {
    id: 'support-workflows', name: 'AI-Assisted Support Workflows', category: 'Internal tool',
    tagline: 'AI-powered support workflows.',
    description: 'An AI assistant for support engineers that summarizes issues, suggests next steps, and drafts responses, built on API troubleshooting workflows and knowledge from resolved cases.',
    problem: 'API investigations require support teams to connect the current issue with relevant troubleshooting knowledge.',
    solution: 'Developed API troubleshooting workflows and AI agent logic within an existing support platform, using resolved cases to summarize issues, suggest next steps, and draft responses.',
    engineering: 'The API workflows were launched on a platform serving 781+ global Tier 1 support representatives. My work focused on troubleshooting workflows and agent logic.',
    stack: ['API troubleshooting', 'AI agent logic', 'Knowledge workflows'], features: []
  }
];
const jobs = [
  {
    company: 'LinkedIn', role: 'Senior Technical Support Engineer', dates: '2020 - Present',
    points: [
      'Own API, authentication, and billing escalations for enterprise advertisers and business customers, partnering with Engineering, Product, Sales, and Customer Success.',
      'Investigate REST API, SSO, and integration failures through HTTP/JSON analysis, logs, request traces, and reproducible tests.',
      'Built a team-wide JavaScript Chrome extension that reduced escalation time by 93%, from over two minutes to about eight seconds, across 6,463 production escalations.',
      'Launched API troubleshooting workflows on a platform serving 781+ global Tier 1 support representatives, and developed AI agent logic that turns resolved cases into useful guidance.'
    ]
  },
  {
    company: 'Directly', role: 'Senior Support Engineer', dates: '2018 - 2019',
    points: [
      'Owned technical relationships and API integration support for 50+ SaaS customers, contributing to a 100% customer renewal rate.',
      'Led partner-facing technical discussions for Microsoft, Samsung, and SAP, using HTTP/JSON request samples to diagnose integration failures.',
      'Investigated application, payment, and transaction errors with SQL, logs, and request traces; coordinated incidents with Engineering and implemented proactive monitoring.'
    ]
  },
  {
    company: 'Visa', role: 'Technical Support Engineer', dates: '2015 - 2017',
    points: [
      'Supported enterprise merchants and developers integrating Visa and CyberSource payment APIs, resolving transaction failures, HTTP errors, and integration issues.',
      'Led technical escalations for the Wells Fargo strategic partnership through root-cause resolution.',
      'Authored REST API integration documentation and delivered technical training for customers and internal support teams.'
    ]
  }
];

const portrait = '<img class="portrait" src="img/headshot.jpg" alt="Leo Yeung" width="400" height="400">';
const eyebrow = '<p class="eyebrow"><span class="status-dot"></span> Senior Technical Support Engineer at LinkedIn</p>';
const intro = 'I connect the dots between people, APIs, and engineering. Over a decade solving complex partner problems, and building tools that make the next one easier.';
const actions = `<div class="hero-actions"><a class="primary-link" href="#work">Explore my work ${icon('arrow-down')}</a><a class="text-link" href="https://www.linkedin.com/in/leokyeung/" ${external}>LinkedIn ${icon('arrow-top-right')}</a></div>`;

function header() {
  const sections = ['work', 'experience', 'about'];
  const links = sections.map(id => `<a href="#${id}">${id[0].toUpperCase()}${id.slice(1)}</a>`).join('');
  const resumeButton = `<a class="nav-contact" href="${resumeUrl}" ${external} aria-label="My Resume (PDF, opens in a new tab)">My Resume</a>`;
  return `<header class="site-header wrap"><a class="wordmark" href="#main" aria-label="Leo Yeung home">LY<span>.</span></a><span class="header-context">Engineering, with people in mind.</span><nav class="site-nav" aria-label="Main navigation">${links}${resumeButton}</nav><button class="menu-toggle" type="button" aria-label="Open navigation" aria-controls="mobile-menu" aria-expanded="false">${icon('navigation-menu')}</button><nav id="mobile-menu" class="mobile-menu" aria-label="Mobile navigation" hidden>${links}${resumeButton}</nav></header>`;
}

function hero() {
  if (design.id === 'hybrid') {
    return `<section class="hero hero-hybrid">
      <img class="city-image" src="img/hk.jpg" alt="Hong Kong skyline overlooking the harbor" fetchpriority="high">
      <div class="hybrid-hero-content wrap">
        <div class="hybrid-intro">${portrait}<div><span class="eyebrow">Support Engineer / Automation Builder</span></div></div>
        <h1 class="visually-hidden">Leo Yeung</h1>
        <h2>I build tools that make<br><em>complex work</em> simpler.</h2>
        <p class="hybrid-hero-description">Hey, I'm Leo. I bridge support engineering, AI, and product thinking<br> to build better experiences at scale.</p>
        <div class="hero-actions"><a class="primary-link" href="#work">Explore my work ${icon('arrow-down')}</a><a class="text-link" href="#contact">Get in touch ${icon('arrow-down')}</a></div>
        <div class="hybrid-hero-footer"><div class="hybrid-companies"><span>Experience across</span><strong>LinkedIn</strong><strong>Directly</strong><strong>Visa</strong></div><span class="hybrid-specialties">API integrations / AI automation / Partnerships</span></div>
      </div>
    </section>`;
  }
  const templates = {
    editorial: `<section class="hero hero-editorial wrap">${eyebrow}<div class="editorial-name"><h1>Leo Yeung<span>.</span></h1>${portrait}</div><div class="hero-bottom"><h2>A technical mind.<br>A human approach.</h2><div class="hero-copy"><p>${intro}</p>${actions}</div></div><div class="hero-footnote"><span>Partner engineering / API integrations / AI automation</span><a href="#impact">A little context ${icon('arrow-down')}</a></div></section>`,
    midnight: `<section class="hero hero-midnight"><img class="city-image" src="img/hk.jpg" alt="Hong Kong skyline across the harbor" fetchpriority="high"><div class="hero-midnight-inner wrap">${eyebrow}<h1>Leo Yeung<span>.</span></h1><h2>Complex problems.<br><em>Clear solutions.</em></h2><div class="midnight-intro">${portrait}<p>${intro}</p></div>${actions}<div class="hero-footnote"><span>APIs & integrations</span><span>People & partnerships</span><span>Ideas & automation</span></div></div></section>`,
    swiss: `<section class="hero hero-swiss wrap"><div class="swiss-top"><p class="eyebrow">Partner & technical support engineering</p><span class="index-label">Selected work / 2026</span></div><div class="swiss-name"><h1>LEO<br>YEUNG<span>.</span></h1><div class="swiss-profile">${portrait}<p>Senior Technical<br>Support Engineer<br><strong>LinkedIn</strong></p></div></div><div class="swiss-lower"><h2>Clarity in complexity.</h2><div class="hero-copy"><p>${intro}</p>${actions}</div></div></section>`,
    fieldnotes: `<section class="hero hero-fieldnotes wrap"><div class="fieldnote-label"><span class="index-label">A working collection</span><span>People. Systems. Possibilities.</span></div><div class="fieldnote-intro">${portrait}<div>${eyebrow}<h1>I'm Leo Yeung<span>.</span></h1></div></div><h2>I untangle the technical.<br>Then build <em>something better.</em></h2><div class="hero-bottom"><p class="hero-description">${intro}</p>${actions}</div><div class="personal-note">Curiosity is part of the job.</div></section>`,
    gallery: `<section class="hero hero-gallery wrap"><div class="gallery-intro">${eyebrow}<span class="index-label">Partner engineer / Independent builder</span></div><h1>Leo Yeung<span class="gallery-star" aria-hidden="true">*</span></h1><div class="gallery-caption"><h2>Good with systems.<br><em>Better with people.</em></h2><div class="gallery-person">${portrait}<p>${intro}</p></div></div>${actions}<div class="gallery-baseline"><span>10+ years of technical experience</span><span>LinkedIn / Directly / Visa</span></div></section>`
  };
  return templates[design.id];
}

function impact() {
  if (design.id === 'hybrid') {
    const counter = value => {
      const label = value.toLocaleString('en-US');
      return `<span class="count" data-target="${value}"><span class="count-sizer" aria-hidden="true">${label}</span><span class="count-value" aria-hidden="true">${label}</span><span class="visually-hidden">${label}</span></span>`;
    };
    return `<section id="impact" class="hybrid-impact" aria-label="Career impact"><div class="wrap"><p class="section-kicker">The difference is in the details. The impact is in the numbers.</p><div class="hybrid-metrics">
      <div class="metric"><strong>${counter(10)}<span>+</span></strong><p>Years in Support Engineering</p><small>Advertising, SaaS, and payments</small></div>
      <div class="metric"><strong>${counter(93)}<span>%</span></strong><p>less time per escalation</p><small>From 2+ minutes to ~8 seconds</small></div>
      <div class="metric"><strong>${counter(6463)}<span>+</span></strong><p>production escalations streamlined</p><small>With a team-wide extension I built</small></div>
      <div class="metric"><strong>${counter(781)}<span>+</span></strong><p>global reps on the support platform</p><small>Where I launched new API workflows</small></div>
    </div></div></section>`;
  }
  return `<section id="impact" class="impact wrap" aria-label="Career impact"><div class="impact-intro"><span class="section-kicker">The work, in numbers</span><h2>Small tools.<br>Meaningful impact.</h2></div><div class="metric"><strong>93<span>%</span></strong><p>less time per escalation</p><small>2+ minutes to ~8 seconds</small></div><div class="metric"><strong>6,463</strong><p>production escalations streamlined</p><small>With a team-wide tool I built</small></div><div class="metric"><strong>781<span>+</span></strong><p>global reps on the support platform</p><small>Where I launched new workflows</small></div></section>`;
}

function projectVisual(project) {
  const artwork = `<a class="project-preview" href="${project.url}" ${external} aria-label="Visit ${project.name} (opens in a new tab)"><img id="${project.id}-visual" src="img/${project.id}-cover.jpg" alt="${project.name} product artwork" width="1462" height="768" loading="lazy"></a>`;
  if (design.id !== 'hybrid') return artwork;
  return `<div class="project-visual"><div class="project-visual-toolbar"><a class="project-domain" href="${project.url}" ${external} aria-label="Visit ${project.name} at ${new URL(project.url).hostname} (opens in a new tab)">${new URL(project.url).hostname} ${icon('arrow-top-right')}</a><div class="project-view-switcher" role="group" aria-label="${project.name} preview"><button type="button" data-project="${project.id}" data-view="cover" aria-controls="${project.id}-visual" aria-pressed="true">Artwork</button><button type="button" data-project="${project.id}" data-view="screen" aria-controls="${project.id}-visual" aria-pressed="false">Website</button></div></div>${artwork}</div>`;
}

function supportVisual(project) {
  if (project.id === 'escalation-automation') {
    return `<figure class="project-visual build-visual"><figcaption>Escalation processing time</figcaption><p class="build-outcome"><strong>93<span>%</span></strong><span>less time per escalation</span></p><dl class="time-comparison"><div class="comparison-row"><dt>Manual processing</dt><dd>2+ min</dd></div><div class="comparison-row"><dt>With the extension</dt><dd>~8 sec</dd></div></dl><p class="build-context">6,463 production escalations streamlined</p></figure>`;
  }
  return `<figure class="project-visual build-visual"><figcaption>AI-assisted investigation</figcaption><p class="workflow-title">Support knowledge,<br>put to work.</p><ol class="workflow-steps"><li>${icon('search-document')}<div><strong>Summarize the issue</strong><span>Key details from the case, at a glance</span></div></li><li>${icon('listine-dots')}<div><strong>Suggest next steps</strong><span>Guidance informed by resolved cases</span></div></li><li>${icon('edit')}<div><strong>Draft a response</strong><span>A starting point for the reply</span></div></li></ol><p class="build-context">Conceptual workflow / Platform contribution</p></figure>`;
}

function projectCard(project, index, total) {
  const isPublic = Boolean(project.url);
  const number = String(index + 1).padStart(2, '0');
  const totalLabel = String(total).padStart(2, '0');
  const outcomeHeading = isPublic ? 'The engineering' : project.id === 'escalation-automation' ? 'The impact' : 'Platform context';
  return `<article id="${project.id}" class="project project-${project.id}${isPublic ? '' : ' support-project'}" aria-labelledby="${project.id}-title">
    ${isPublic ? projectVisual(project) : supportVisual(project)}
    <div class="project-details">
      <div class="project-meta"><span>${project.category}</span><span>${number} / ${totalLabel}</span></div>
      <div class="project-title"><h3 id="${project.id}-title">${isPublic ? `<a href="${project.url}" ${external}>${project.name}</a>` : project.name}</h3>${isPublic ? `<a class="project-arrow" href="${project.url}" ${external} aria-label="Visit ${project.name}">${icon('arrow-top-right')}</a>` : ''}</div>
      <h4>${project.tagline}</h4><p>${project.description}</p>
      ${design.id === 'hybrid' && project.features.length ? `<ul class="project-features">${project.features.map(feature => `<li>${icon('check-alt')} ${feature}</li>`).join('')}</ul>` : ''}
      <ul class="project-tags" aria-label="${isPublic ? 'Technology stack' : 'Focus areas'}">${project.stack.map(item => `<li>${item}</li>`).join('')}</ul>
      <details class="case-study"><summary>${isPublic ? 'Behind the build' : 'Read the case study'} ${icon('plus')}</summary><div class="case-content"><h5>The problem</h5><p>${project.problem}</p><h5>${isPublic ? 'What I built' : 'My contribution'}</h5><p>${project.solution}</p><h5>${outcomeHeading}</h5><p>${project.engineering}</p>${isPublic ? `<figure><img src="img/${project.id}-screen.jpg" alt="Screenshot of the live ${project.name} homepage" width="1440" height="1000" loading="lazy"><figcaption>${project.name} / Live homepage</figcaption></figure><a class="text-link" href="${project.url}" ${external}>Visit ${project.name} ${icon('arrow-top-right')}</a>` : ''}</div></details>
    </div>
  </article>`;
}

function work() {
  const isHybrid = design.id === 'hybrid';
  const builds = isHybrid ? [...supportProjects, ...projects] : projects;
  return `<section id="work" class="work-section section-space"><div class="wrap"><div class="section-heading"><div><span class="section-kicker">${isHybrid ? '01 / Selected builds' : '01 / Independently built'}</span><h2>${isHybrid ? 'Ideas brought to life,<br>from internal tools to independent products' : 'Outside the day job'}<span>.</span></h2></div><p>${isHybrid ? 'I build practical tools that solve real problems, whether it\'s improving support workflows, exploring AI, or creating products I personally use.' : 'Two ideas I turned into live products.<br>Designed, developed, and shipped end to end.'}</p></div><div class="projects">${builds.map((project, index) => projectCard(project, index, builds.length)).join('')}</div></div></section>`;
}

function experience() {
  const isHybrid = design.id === 'hybrid';
  const listTag = isHybrid ? 'ol' : 'div';
  const entryTag = isHybrid ? 'li' : 'article';
  return `<section id="experience" class="experience-section section-space wrap"><div class="section-heading"><div><span class="section-kicker">${isHybrid ? '02 / Career & impact' : '02 / The experience'}</span><h2>${isHybrid ? 'Support experience.<br>Engineering impact.' : 'Deep in the details.<br>Focused on the outcome.'}</h2></div><p>A decade at the intersection of enterprise<br>technology and the people who use it.</p></div><${listTag} class="experience-list${isHybrid ? ' career-timeline' : ''}"${isHybrid ? ' role="list" aria-label="Career history, most recent first"' : ''}>${jobs.map((job, index) => `<${entryTag} class="job${isHybrid && index === 0 ? ' is-current' : ''}"><div class="job-heading"><span class="job-number"${isHybrid ? ' aria-hidden="true"' : ''}>0${index + 1}</span><div><h3>${job.company}</h3><span class="job-dates">${job.dates}</span>${isHybrid && index === 0 ? '<span class="current-role">Current role</span>' : ''}</div></div><div class="job-body"><p class="job-role">${job.role}</p><ul>${job.points.map(point => `<li>${point}</li>`).join('')}</ul></div></${entryTag}>`).join('')}</${listTag}></section>`;
}

function about() {
  const isHybrid = design.id === 'hybrid';
  const skills = [
    { title: 'Connect & investigate', icon: 'connection', items: ['REST / SOAP', 'SSO', 'HTTP / JSON', 'cURL / Postman', 'Request tracing', 'Log analysis'] },
    { title: 'Build & automate', icon: 'code-alt', items: ['HTML / CSS', 'JavaScript', 'Python', 'SQL', 'React / Node.js', 'Express', 'MySQL / MongoDB', 'Git'] },
    { title: 'Support & operate', icon: 'settings-alt', items: ['Salesforce / Jira', 'AWS', 'Zendesk', 'Kibana', 'Glean', 'Monitoring', 'Incident response'] }
  ];
  return `<section id="about" class="about-section section-space"><div class="wrap">${isHybrid ? '<h2 class="section-kicker">03 / Technical skills</h2>' : `<div class="about-grid"><div><span class="section-kicker">03 / Behind the work</span><h2>Technical depth.<br>Human connection.</h2></div><div class="about-copy"><p class="large-copy">I'm a partner-facing engineer who likes getting to the root of a problem, then doing something useful with what I find.</p><p>My work spans advertising, SaaS, and payments. I combine hands-on investigation with clear communication, whether I'm debugging an API, coordinating an incident, or writing integration code reviewed by Engineering.</p><p>Outside that work, I build products around a simple idea: making it easier for people to spend time together.</p></div></div>`}<div class="skill-groups">${skills.map(group => `<div class="skill-group">${icon(group.icon)}<h3>${group.title}</h3><ul>${group.items.map(item => `<li>${item}</li>`).join('')}</ul></div>`).join('')}</div></div></section>`;
}

function contact() {
  return `<section id="contact" class="contact-section section-space wrap"><div class="contact-row"><h2>Have something in mind?<br><em>I'd love to hear it.</em></h2><a class="contact-arrow" href="mailto:leoyeung99@gmail.com" aria-label="Email Leo Yeung">${icon('arrow-top-right')}</a></div><div class="contact-links"><a href="mailto:leoyeung99@gmail.com">leoyeung99@gmail.com ${icon('arrow-top-right')}</a>${resumeLink(` ${icon('arrow-top-right')}`)}<a href="https://www.linkedin.com/in/leokyeung/" ${external}>LinkedIn ${icon('arrow-top-right')}</a><a href="https://github.com/leokyeung" ${external}>GitHub ${icon('arrow-top-right')}</a></div></section>`;
}

if (picker) picker.innerHTML = `<a class="picker-brand" href="designs.html">LY / Design collection</a><div class="picker-options">${designs.map(item => `<a href="?design=${item.id}" ${item.id === design.id ? 'aria-current="page"' : ''}><span>${item.number}</span> ${item.name}</a>`).join('')}</div><span class="picker-count">${design.number} / ${String(designs.length).padStart(2, '0')}</span>`;
document.querySelector('#portfolio').innerHTML = `${header()}<main id="main">${hero()}${impact()}${work()}${experience()}${about()}${contact()}</main><footer class="site-footer wrap"><a class="wordmark" href="#main">LY<span>.</span></a><span>&copy; ${new Date().getFullYear()} Leo Yeung</span><a href="#main">Back to top ${icon('arrow-up')}</a></footer>`;

document.querySelectorAll('.project-view-switcher').forEach(switcher => {
  switcher.addEventListener('click', event => {
    const button = event.target.closest('button');
    if (!button) return;
    const project = projects.find(item => item.id === button.dataset.project);
    const image = document.getElementById(`${project.id}-visual`);
    image.src = `img/${project.id}-${button.dataset.view}.jpg`;
    image.alt = button.dataset.view === 'screen' ? `Screenshot of the live ${project.name} homepage` : `${project.name} product artwork`;
    switcher.querySelectorAll('button').forEach(option => option.setAttribute('aria-pressed', String(option === button)));
  });
});

const impactSection = document.querySelector('.hybrid-impact');
if (impactSection && 'IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const counters = [...impactSection.querySelectorAll('.count')];
  const countUp = (counter, delay) => {
    const target = Number(counter.dataset.target);
    const output = counter.querySelector('.count-value');
    const duration = 1600;
    let start;
    const step = now => {
      start ??= now + delay;
      const progress = Math.min(Math.max((now - start) / duration, 0), 1);
      output.textContent = Math.round(target * (1 - (1 - progress) ** 3)).toLocaleString('en-US');
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  counters.forEach(counter => { counter.querySelector('.count-value').textContent = '0'; });
  impactSection.classList.add('is-pending');
  const observer = new IntersectionObserver(entries => {
    if (!entries.some(entry => entry.isIntersecting)) return;
    observer.disconnect();
    impactSection.classList.replace('is-pending', 'is-visible');
    counters.forEach((counter, index) => countUp(counter, index * 150));
  }, { threshold: 0.35 });
  observer.observe(impactSection);
}

const careerTimeline = document.querySelector('.career-timeline');
if (careerTimeline && 'IntersectionObserver' in window) {
  const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
  if (!motionPreference.matches) {
    const entries = [...careerTimeline.querySelectorAll('.job')];
    const revealEntry = entry => {
      entry.classList.remove('timeline-pending');
      entry.classList.add('timeline-revealed');
    };
    const timelineObserver = new IntersectionObserver(observations => {
      observations.forEach(observation => {
        if (!observation.isIntersecting) return;
        revealEntry(observation.target.closest('.job'));
        timelineObserver.unobserve(observation.target);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -24px 0px' });
    entries.forEach(entry => {
      entry.classList.add('timeline-pending');
      timelineObserver.observe(entry.querySelector('.job-heading'));
    });
    motionPreference.addEventListener('change', event => {
      if (!event.matches) return;
      timelineObserver.disconnect();
      entries.forEach(revealEntry);
    });
  }
}

const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');
function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
  mobileMenu.hidden = true;
}
menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  mobileMenu.hidden = isOpen;
});
mobileMenu.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !mobileMenu.hidden) {
    closeMenu();
    menuToggle.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu();
});
matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);