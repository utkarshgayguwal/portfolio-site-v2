// ── Site Data ─────────────────────────────────────────────────────────────

export const ROLES = [
  'Python Developer',
  'React Developer',
  'Laravel Developer',
  'AI Engineer',
]

export const STATS = [
  { num: '1.5+', label: 'Years Exp' },
  { num: '20+',  label: 'Projects'  },
  { num: '2',    label: 'OSS Packages' },
]

export const TICKER_ITEMS = [
  'Laravel', 'PHP', 'RESTful APIs', 'MySQL', 'RBAC', 'React',
  'Packagist', 'FinTech', 'GovTech', 'Open Source', 'Queues & Jobs', 'Sanctum Auth',
]

export const PROJECTS = [
  {
    num: '01',
    title: 'Smile — Enterprise Audit System',
    meta: 'US-based Enterprise Platform · 2025–Present',
    // url: 'https://...',   ← add url here to make it clickable
    tags: [
      { label: 'Laravel',      accent: true },
      { label: 'Audit Logs',   accent: false },
      { label: '170+ Triggers',accent: false },
    ],
  },
  {
    num: '02',
    title: 'SBI Payments — Banking Platform',
    meta: 'FinTech / Banking · 2025',
    url: 'https://www.sbipayments.com/',
    tags: [
      { label: 'Laravel 12', accent: true  },
      { label: 'RBAC',       accent: false },
      { label: 'Migration',  accent: false },
    ],
  },
  {
    num: '03',
    title: 'DNS Bank — Web Platform',
    meta: 'Banking · 2024',
    tags: [
      { label: 'Laravel', accent: true  },
      { label: 'PHP',     accent: false },
      { label: 'MySQL',   accent: false },
    ],
  },
  {
    num: '04',
    title: 'BMC — FaceBio, CSMVS Museum & Zoo',
    meta: 'Government / Public Sector · 2025',
    tags: [
      { label: 'Laravel',    accent: true  },
      { label: 'GovTech',    accent: false },
      { label: 'Compliance', accent: false },
    ],
  },
  {
    num: '05',
    title: 'Access Health — Healthcare Platform',
    meta: 'US Healthcare · 2024',
    tags: [
      { label: 'Laravel',    accent: true  },
      { label: 'REST API',   accent: false },
      { label: 'PostgreSQL', accent: false },
    ],
  },
  {
    num: '06',
    title: 'Made Easy Meals — Food Platform',
    meta: 'US-based Platform · 2024',
    tags: [
      { label: 'Laravel',   accent: true  },
      { label: 'Easebuzz',  accent: false },
      { label: 'Webhooks',  accent: false },
    ],
  },
]

export const SKILL_GROUPS = [
  {
    title: 'Backend & PHP',
    skills: [
      { name: 'Laravel',             pct: 95 },
      { name: 'PHP',                 pct: 90 },
      { name: 'RESTful APIs',        pct: 92 },
      { name: 'Package Development', pct: 85 },
    ],
  },
  {
    title: 'Database & DevOps',
    skills: [
      { name: 'MySQL',               pct: 88 },
      { name: 'PostgreSQL',          pct: 80 },
      { name: 'MSSQL',               pct: 75 },
      { name: 'Git / GitHub / GitLab', pct: 90 },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'JavaScript / jQuery', pct: 78 },
      { name: 'HTML5 / CSS3',        pct: 82 },
      { name: 'React (Learning)',     pct: 55 },
    ],
  },
  {
    title: 'Integrations & Tools',
    skills: [
      { name: 'Easebuzz Payment Gateway', pct: 88 },
      { name: 'Webhooks & Queues',        pct: 85 },
      { name: 'Postman / API Testing',    pct: 88 },
    ],
  },
]

export const SKILL_PILLS = [
  'Laravel Sanctum', 'MVC Architecture', 'RBAC', 'Eloquent ORM',
  'Jobs & Queues', 'Middleware', 'Packagist', 'Service Providers',
  'Dependency Injection', 'CodeIgniter', 'Bitbucket', 'PhpMyAdmin',
  'MySQL Workbench', 'Laravel Migrations', 'Clean Architecture',
]

export const TIMELINE = [
  {
    period: 'DEC 2024 — PRESENT',
    title: 'Laravel Backend Developer',
    company: '12grids',
    desc: 'Full-time backend development on enterprise and government platforms. Key projects: Smile (US audit system), SBI Payments migration, BMC GovTech portals.',
  },
  {
    period: 'SEP — NOV 2024',
    title: 'Laravel Backend Developer Intern',
    company: '12grids',
    desc: 'Started career at 12grids working on real production projects across banking, healthcare, and government domains from day one.',
  },
  {
    period: 'ONGOING',
    title: 'Open Source Contributor',
    company: 'Packagist — 2 Public Packages',
    desc: 'Designed and published reusable Laravel packages with proper service providers, config publishing, and real-world production usage.',
  },
]

export const CONTACT_DETAILS = [
  { label: 'Email',    value: 'utkarshgayguwal@gmail.com', href: 'mailto:utkarshgayguwal@gmail.com' },
  { label: 'Location', value: 'Mumbai, Maharashtra',       href: null },
  { label: 'GitHub',   value: '/utkarshgayguwal',          href: 'https://github.com/utkarshgayguwal' },
  { label: 'LinkedIn', value: '/in/utkarsh-gayguwal',      href: 'https://linkedin.com/in/utkarsh-gayguwal' },
]
