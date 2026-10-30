const icon = name => name === 'arrow-top-right'
  ? '<i class="icofont-arrow-up icon-diagonal" aria-hidden="true"></i>'
  : `<i class="icofont-${name}" aria-hidden="true"></i>`;
const external = 'target="_blank" rel="noopener noreferrer"';
const resumeUrl = 'https://leo-resume.s3.us-west-1.amazonaws.com/Leo+Yeung+Resume.pdf';
const resumeLink = (suffix = '') => `<a href="${resumeUrl}" ${external} aria-label="Résumé (PDF, opens in a new tab)">Résumé${suffix}</a>`;
const stats = { years: 10, timeSaved: 93, escalations: 6463, reps: 781 };
const fmt = value => value.toLocaleString('en-US');
const projects = [
  {
    name: 'LetzHang', id: 'letzhang', url: 'https://letzhang.com/', category: 'Independent product',
    description: 'Find a day that works for everyone. No sign-up needed to RSVP.',
    problem: "Group plans get buried in chats. Finding a date shouldn't mean another spreadsheet or an account for every guest.",
    solution: 'An end-to-end scheduling app with host dashboards, shareable invitations, availability matching, and account-free RSVPs.',
    engineering: 'Protected guest submissions, duplicate-request handling, and durable notification jobs with retries.',
    stack: ['React', 'TypeScript', 'Supabase', 'Vercel', 'Resend'], imageWidth: 1731, imageHeight: 909
  },
  {
    id: 'escalation-automation', name: 'Escalation Automation', category: 'Internal tool',
    description: 'One click to gather context, draft the summary, and route a case.',
    problem: 'Repetitive escalation filing took time away from investigation and resolution.',
    solution: 'A team-wide JavaScript Chrome extension that gathers case context, drafts summaries, and routes escalations.',
    engineering: `Processing time fell from over two minutes to about eight seconds across ${fmt(stats.escalations)} production escalations.`,
    stack: ['JavaScript', 'Chrome extension', 'Support automation']
  },
  {
    name: 'DinkLeo', id: 'dinkleo', url: 'https://dinkleo.com/', category: 'Independent product',
    description: 'Fair matchups. Live standings. More time on the pickleball court.',
    problem: 'Running a round robin means juggling fair matchups, registrations, last-minute changes, and scores.',
    solution: 'An event app for rotating-partner and fixed-team games, with invitations, waitlists, score entry, and rankings.',
    engineering: 'Verified partner rotation, opponents, and court balance. Server-side permissions separate organizer and player actions.',
    stack: ['JavaScript', 'HTML &amp; CSS', 'Supabase', 'PostgreSQL', 'Vercel'], imageWidth: 1672, imageHeight: 941
  }
];
const jobs = [
  {
    company: 'LinkedIn', role: 'Senior Technical Support Engineer', dates: '2020 - Present',
    points: [
      'Own API, authentication, and billing escalations for enterprise advertisers and business customers, partnering with Engineering, Product, Sales, and Customer Success.',
      'Investigate REST API, SSO, and integration failures through HTTP/JSON analysis, logs, request traces, and reproducible tests.',
      `Built a team-wide JavaScript Chrome extension that reduced escalation time by ${stats.timeSaved}%, from over two minutes to about eight seconds, across ${fmt(stats.escalations)} production escalations.`,
      `Launched API troubleshooting workflows on a platform serving ${fmt(stats.reps)}+ global Tier 1 support representatives, and developed AI agent logic that turns resolved cases into useful guidance.`
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

function header() {
  const sections = ['work', 'experience', 'about'];
  const links = sections.map(id => `<a href="#${id}">${id[0].toUpperCase()}${id.slice(1)}</a>`).join('');
  const resumeButton = `<a class="nav-contact" href="${resumeUrl}" ${external} aria-label="My Resume (PDF, opens in a new tab)">My Resume</a>`;
  return `<header class="site-header wrap"><a class="wordmark" href="#main" aria-label="Leo Yeung home">LY<span>.</span></a><span class="header-context">Engineering, with people in mind.</span><nav class="site-nav" aria-label="Main navigation">${links}${resumeButton}</nav><button class="menu-toggle" type="button" aria-label="Open navigation" aria-controls="mobile-menu" aria-expanded="false">${icon('navigation-menu')}</button><nav id="mobile-menu" class="mobile-menu" aria-label="Mobile navigation" hidden>${links}${resumeButton}</nav></header>`;
}

function hero() {
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

function impact() {
  const counter = value => {
    const label = fmt(value);
    return `<span class="count" data-target="${value}"><span class="count-sizer" aria-hidden="true">${label}</span><span class="count-value" aria-hidden="true">${label}</span><span class="visually-hidden">${label}</span></span>`;
  };
  return `<section id="impact" class="hybrid-impact" aria-label="Career impact"><div class="wrap"><p class="section-kicker">The difference is in the details. The impact is in the numbers.</p><div class="hybrid-metrics">
    <div class="metric"><strong>${counter(stats.years)}<span>+</span></strong><p>Years in Support Engineering</p><small>Advertising, SaaS, and payments</small></div>
    <div class="metric"><strong>${counter(stats.timeSaved)}<span>%</span></strong><p>less time per escalation</p><small>From 2+ minutes to ~8 seconds</small></div>
    <div class="metric"><strong>${counter(stats.escalations)}<span>+</span></strong><p>production escalations streamlined</p><small>With a team-wide extension I built</small></div>
    <div class="metric"><strong>${counter(stats.reps)}<span>+</span></strong><p>global reps on the support platform</p><small>Where I launched new API workflows</small></div>
  </div></div></section>`;
}

function projectIcon(name) {
  const paths = {
    problem: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4.5 4.5"/>',
    build: '<path d="m12 3 9 5v8l-9 5-9-5V8Z"/><path d="m3 8 9 5 9-5m-9 5v8"/>',
    engineering: '<path d="m7 7-5 5 5 5m10-10 5 5-5 5M14 4l-4 16"/>',
    impact: '<path d="M4 4v16h16M8 16v-4m5 4V8m5 8V4"/>'
  };
  return `<span class="story-icon ${name}-icon"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${paths[name]}</svg></span>`;
}

function projectCard(project) {
  const isPublic = Boolean(project.url);
  const impactId = `${project.id}-impact`;
  const engineering = `<p>${project.engineering}</p><p class="built-with">${project.stack.join(' / ')}</p>`;
  return `<article id="${project.id}" class="project${isPublic ? '' : ' project-reversed'}" aria-labelledby="${project.id}-title">
    <div class="project-media">${isPublic
      ? `<img class="project-art" src="img/${project.id}-cover.jpg" alt="${project.name} product artwork" width="${project.imageWidth}" height="${project.imageHeight}" loading="lazy">`
      : `<div class="automation-art"><strong>${stats.timeSaved}<span>%</span></strong><p>less time per escalation</p><small>2+ minutes to ~8 seconds</small></div>`}</div>
    <div class="project-copy">
      <p class="project-kind">${project.category}</p>
      <h3 id="${project.id}-title">${project.name}</h3>
      <p class="description">${project.description}</p>
      ${isPublic
        ? `<a class="project-visit" href="${project.url}" ${external} aria-label="Explore ${project.name} (opens in a new tab)">Explore project <span aria-hidden="true">&#8599;</span></a>`
        : `<a class="project-visit" href="#${impactId}">See the impact <span aria-hidden="true">&#8595;</span></a>`}
    </div>
    <div class="project-story">
      <div class="story-column"><h4>${projectIcon('problem')}The problem</h4><p>${project.problem}</p></div>
      <div class="story-column"><h4>${projectIcon('build')}What I built</h4><p>${project.solution}</p></div>
      ${isPublic
        ? `<details class="story-column" open><summary>${projectIcon('engineering')}Engineering details</summary>${engineering}</details>`
        : `<div id="${impactId}" class="story-column project-impact" tabindex="-1"><h4>${projectIcon('impact')}The impact</h4>${engineering}</div>`}
    </div>
  </article>`;
}

function work() {
  return `<section id="work" class="work-section" aria-labelledby="work-title"><div class="wrap"><div class="section-heading"><div><span class="section-kicker">01 / Selected builds</span><h2 id="work-title">From ideas to products<span>.</span></h2></div><p>Building tools and experiences that solve real problems.</p></div><div class="projects">${projects.map(projectCard).join('')}</div></div></section>`;
}

function experience() {
  return `<section id="experience" class="experience-section section-space wrap"><div class="section-heading"><div><span class="section-kicker">02 / Career & impact</span><h2>Support experience.<br>Engineering impact.</h2></div><p>A decade at the intersection of enterprise<br>technology and the people who use it.</p></div><ol class="experience-list career-timeline" role="list" aria-label="Career history, most recent first">${jobs.map((job, index) => `<li class="job${index === 0 ? ' is-current' : ''}"><div class="job-heading"><span class="job-number" aria-hidden="true">0${index + 1}</span><div><h3>${job.company}</h3><span class="job-dates">${job.dates}</span>${index === 0 ? '<span class="current-role">Current role</span>' : ''}</div></div><div class="job-body"><p class="job-role">${job.role}</p><ul>${job.points.map(point => `<li>${point}</li>`).join('')}</ul></div></li>`).join('')}</ol></section>`;
}

function about() {
  const skills = [
    { title: 'Connect & investigate', icon: 'connection', items: ['REST / SOAP', 'SSO', 'HTTP / JSON', 'cURL / Postman', 'Request tracing', 'Log analysis'] },
    { title: 'Build & automate', icon: 'code-alt', items: ['HTML / CSS', 'JavaScript', 'Python', 'SQL', 'React / Node.js', 'Express', 'MySQL / MongoDB', 'Git'] },
    { title: 'Support & operate', icon: 'settings-alt', items: ['Salesforce / Jira', 'AWS', 'Zendesk', 'Kibana', 'Glean', 'Monitoring', 'Incident response'] }
  ];
  return `<section id="about" class="about-section section-space"><div class="wrap"><h2 class="section-kicker">03 / Technical skills</h2><div class="skill-groups">${skills.map(group => `<div class="skill-group">${icon(group.icon)}<h3>${group.title}</h3><ul>${group.items.map(item => `<li>${item}</li>`).join('')}</ul></div>`).join('')}</div></div></section>`;
}

function contact() {
  return `<section id="contact" class="contact-section section-space wrap"><div class="contact-row"><h2>Have something in mind?<br><em>I'd love to hear it.</em></h2><a class="contact-arrow" href="mailto:leoyeung99@gmail.com" aria-label="Email Leo Yeung">${icon('arrow-top-right')}</a></div><div class="contact-links"><a href="mailto:leoyeung99@gmail.com">leoyeung99@gmail.com ${icon('arrow-top-right')}</a>${resumeLink(` ${icon('arrow-top-right')}`)}<a href="https://www.linkedin.com/in/leokyeung/" ${external}>LinkedIn ${icon('arrow-top-right')}</a><a href="https://github.com/leokyeung" ${external}>GitHub ${icon('arrow-top-right')}</a></div></section>`;
}

document.querySelector('#portfolio').innerHTML = `${header()}<main id="main">${hero()}${impact()}${work()}${experience()}${about()}${contact()}</main><footer class="site-footer wrap"><a class="wordmark" href="#main">LY<span>.</span></a><span>&copy; ${new Date().getFullYear()} Leo Yeung</span><a href="#main">Back to top ${icon('arrow-up')}</a></footer>`;

const heroSection = document.querySelector('.hero-hybrid');
const heroImage = heroSection?.querySelector('.city-image');
if (heroImage) {
  const parallaxMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let ticking = false;
  const updateParallax = () => {
    ticking = false;
    const offset = Math.min(window.scrollY, heroSection.offsetHeight);
    heroImage.style.transform = parallaxMotion.matches ? '' : `translate3d(0, ${offset * 0.4}px, 0)`;
  };
  const requestParallax = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateParallax);
  };
  window.addEventListener('scroll', requestParallax, { passive: true });
  window.addEventListener('resize', requestParallax);
  parallaxMotion.addEventListener('change', requestParallax);
  updateParallax();
}

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