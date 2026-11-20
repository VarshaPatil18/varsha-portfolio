// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  first: 'Varsha',
  last: 'Pyata',
  initials: 'VP',
  role: 'Full Stack & AI Developer',
  location: 'Hyderabad, India',
  timezone: 'Asia/Kolkata',
  email: 'varshapyata18@gmail.com',
  phone: '+91 76720 31854',
  github: 'https://github.com/VarshaPatil18',
  linkedin: 'https://www.linkedin.com/in/varshapyata123',
  // Drop your files into /public with these names.
  photo: '/profile-cutout.webp',
  resume: '/resume.pdf',
  intro:
    'B.Tech CSE student who builds, breaks and rebuilds real software, from React front ends to LLM-powered APIs and multi-agent workflows.',
}

export const stats = [
  { value: '8.34', label: 'CGPA' },
  { value: '2', label: 'Internships' },
  { value: '7', label: 'Projects shipped' },
  { value: '1st', label: 'Promethean 2025' },
]

export const stack: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['Java', 'JavaScript', 'TypeScript', 'Python', 'C', 'SQL'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'Redux', 'Tailwind', 'HTML / CSS', 'Bootstrap', 'Material UI'] },
  { group: 'Backend', items: ['Node.js', 'Express', 'FastAPI', 'Flask', 'Django', 'REST APIs'] },
  { group: 'Data', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Supabase'] },
  { group: 'AI / ML', items: ['LLM APIs', 'Prompt Engineering', 'n8n', 'Gemini', 'TensorFlow', 'scikit-learn', 'Pandas', 'NumPy', 'OpenCV'] },
  { group: 'Cloud & Tools', items: ['AWS', 'Docker', 'CI/CD', 'Git', 'Linux', 'Vercel', 'Postman'] },
]

export type Project = {
  title: string
  kicker: string
  description: string
  tags: string[]
  github?: string
  live?: string
  paper?: boolean
  accent: 'violet' | 'teal' | 'amber' | 'rose'
  featured?: boolean
  /** Screenshot in public/projects (without extension). Projects without one show an illustration. */
  image?: string
  /** Which illustration to draw when there is no screenshot. */
  visual?: 'trading' | 'chat' | 'player'
}

export const projects: Project[] = [
  {
    title: 'Evently',
    kicker: 'AI · Optimisation · Research paper',
    description:
      'Event-planning platform for Hyderabad. A multi-objective optimiser picks the best vendor mix for a budget, with food-waste-aware catering maths, RSVP boards and an admin enquiry desk. Co-authored a published paper on the approach.',
    tags: ['React 19', 'TypeScript', 'Supabase', 'Branch & Bound', 'Multi-agent'],
    github: 'https://github.com/VarshaPatil18/Evently',
    live: 'https://evently-tan-omega.vercel.app',
    paper: true,
    accent: 'amber',
    featured: true,
    image: 'evently',
  },
  {
    title: 'PriceSense AI',
    kicker: 'Microsoft Imagine Cup 2026',
    description:
      'Smart purchasing assistant that compares the all-in cost and delivery time of an item or a whole basket across Blinkit, Zepto and Swiggy Instamart, with a plain-language reason for every recommendation.',
    tags: ['Python', 'AI', 'Price intelligence', 'Vercel'],
    github: 'https://github.com/VarshaPatil18/pricesense-ai',
    live: 'https://pricesense-ai.vercel.app',
    accent: 'violet',
    image: 'pricesense',
  },
  {
    title: 'Confiqo',
    kicker: 'Fintech · AI risk',
    description:
      'B2B cross-border escrow and settlement platform with AI-driven risk analysis and confidence scoring, four verification layers, an immutable audit trail and human sign-off.',
    tags: ['React', 'FastAPI', 'Supabase', 'AI risk scoring'],
    github: 'https://github.com/VarshaPatil18/confiqosystem',
    live: 'https://confiqosystem.vercel.app',
    accent: 'teal',
    image: 'confiqo',
  },
  {
    title: 'Full-Stack Trading Platform',
    kicker: 'MERN · Fintech',
    description:
      'Zerodha-inspired trading and portfolio dashboard with watchlists, holdings and buy/sell orders. REST APIs in Node and Express for orders and transaction history, MongoDB schemas, JWT auth and Git-based CI/CD on AWS Amplify.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'AWS Amplify'],
    github: 'https://github.com/VarshaPatil18/zerodha-clone',
    accent: 'violet',
    visual: 'trading',
  },
  {
    title: 'Nexus AI — Co-Working Spaces',
    kicker: 'AI sales agent',
    description:
      'Co-working space site with Nexus, an AI assistant that matches visitors to spaces, plans and availability in seconds, plus an image gallery and live chat.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'AI agent'],
    github: 'https://github.com/VarshaPatil18/co-working-spaces',
    live: 'https://f2icydkd6kwb2.ok.kimi.link/',
    accent: 'teal',
    image: 'coworking',
  },
  {
    title: 'IndiAgent',
    kicker: 'Hackathon · AI workforce for MSMEs',
    description:
      'WhatsApp-first "AI employees" for Indian small businesses. I owned the backend, LLM orchestration and infrastructure: FastAPI middleware and n8n workflows that route requests to Gemini-powered multi-agent branches.',
    tags: ['Python', 'FastAPI', 'n8n', 'Gemini', 'React'],
    accent: 'amber',
    visual: 'chat',
  },
  {
    title: 'Spotify Clone',
    kicker: 'Frontend craft',
    description:
      'Responsive music player in vanilla JavaScript: play/pause, next/previous and a live progress bar via DOM events, with playback preferences saved across sessions in LocalStorage.',
    tags: ['HTML5', 'CSS3', 'JavaScript ES6', 'DOM'],
    github: 'https://github.com/VarshaPatil18/spotify_clone',
    accent: 'rose',
    visual: 'player',
  },
]

export const experience: {
  role: string
  company: string
  mode: string
  period: string
  current?: boolean
  points: string[]
  tags: string[]
  /** Certificate image name in public/certificates. */
  cert?: string
}[] = [
  {
    role: 'AI Developer Intern',
    company: 'Olynk AI',
    mode: 'Remote',
    period: 'Mar 2026 — Present',
    current: true,
    points: [
      'Build production-grade generative AI applications with LLM APIs and prompt engineering to automate complex business workflows.',
      'Develop REST APIs and backend microservices in Node.js and Express that orchestrate async data flow between AI agents and external platforms.',
      'Containerised environments with Docker for stable testing and production stages; Postman and Git branching for faster releases.',
    ],
    tags: ['LLMs', 'Node.js', 'Express', 'Docker'],
  },
  {
    role: 'Co-Founder',
    company: 'Student Startup',
    mode: 'With a teammate',
    period: '2026',
    points: ['Researched an AI WhatsApp receptionist for local salons: interviewed salon owners, mapped competitors and scoped the backend.'],
    tags: ['Product', 'Research', 'AI'],
  },
  {
    role: 'Community Lead & Content Creator',
    company: 'Guide Bazzar',
    mode: 'Remote',
    period: 'Jun 2025 — Present',
    points: [
      'Lead a tech community of 300+ students; curate and share internships, hackathons and career opportunities.',
      'Plan the posting schedule and answer member questions on applications and opportunities.',
    ],
    tags: ['Community', 'Leadership'],
  },
  {
    role: 'Web Developer Intern',
    company: 'Nirvaha',
    mode: 'Remote',
    period: 'Mar 2025 — May 2025',
    points: [
      'Built responsive frontend interfaces with React and Tailwind CSS.',
      'Integrated custom API endpoints and fixed UI layout bugs across staging environments.',
    ],
    tags: ['React', 'Tailwind'],
    cert: 'nirvaha',
  },
  {
    role: 'Event Coordinator',
    company: 'National Mathematics Day · BVRIT',
    mode: 'On site',
    period: 'Dec 2024',
    points: ['Managed scheduling, logistics and volunteer coordination for an intra-college event with 150+ participants.'],
    tags: ['Leadership'],
    cert: 'maths-day',
  },
]

export const achievements = [
  { title: 'Crime.Exe — 1st Place', meta: 'Promethean 2025 · National', detail: 'Ranked first of 50+ national teams solving applied programming challenges.', highlight: true },
  { title: 'Microsoft Imagine Cup 2026', meta: 'PriceSense AI · Global', detail: 'Built an AI-powered price intelligence tool for the global competition.' },
  { title: 'Hackathons 2026', meta: 'SBI · LTTS TECHgium · IndiAgent · SummerSaaS', detail: 'Built an AI financial decision companion for the SBI Hackathon and an AI workforce for MSMEs (IndiAgent).' },
  { title: 'Published research paper', meta: 'Evently · 2025', detail: 'Co-authored the paper behind the Evently planning platform.' },
  { title: 'GrindEXC Winner', meta: 'Coding competition · 2025', detail: 'Won a competitive coding challenge among college-level participants.' },
  { title: 'Microsoft SheNovates', meta: 'Microsoft office visit · 2025', detail: 'Selected to attend Microsoft for a networking and innovation programme.' },
  { title: 'MSME Tech Connect', meta: 'IIT Hyderabad · 2025', detail: 'Industry networking and innovation event at IIT Hyderabad.' },
]

export type Cert = {
  title: string
  issuer: string
  date?: string
  /** Image name in public/certificates (without extension); full image and `-thumb` preview. */
  image?: string
  kind: 'AI & Cloud' | 'Courses' | 'Events'
  note?: string
}

export const certifications: Cert[] = [
  { title: 'Develop AI Agents on Azure', issuer: 'Microsoft Learn', date: 'Jun 2026', image: 'ms-azure-agents', kind: 'AI & Cloud', note: 'All module assessments passed' },
  { title: 'Create an AI Agent with Microsoft Foundry', issuer: 'Microsoft Applied Skill', date: 'Jun 2026', image: 'ms-foundry-agent', kind: 'AI & Cloud', note: 'All module assessments passed' },
  { title: 'Introduction to Large Language Models', issuer: 'Google Cloud', date: 'Oct 2025', image: 'gc-llms', kind: 'AI & Cloud', note: 'Completion badge' },
  { title: 'Introduction to Generative AI', issuer: 'Google Cloud', date: 'Oct 2025', image: 'gc-generative-ai', kind: 'AI & Cloud', note: 'Completion badge' },
  { title: 'Introduction to Responsible AI', issuer: 'Google Cloud', date: 'Oct 2025', image: 'gc-responsible-ai', kind: 'AI & Cloud', note: 'Completion badge' },
  { title: 'Prompt Design in Vertex AI', issuer: 'Google Cloud', date: 'Oct 2025', image: 'gc-prompt-design-vertex', kind: 'AI & Cloud', note: 'Skill badge · Introductory' },
  { title: 'Applying AI Principles with Google Cloud', issuer: 'Google Cloud', image: 'gc-ai-principles', kind: 'AI & Cloud', note: 'Completion badge' },
  { title: 'AI Tools & ChatGPT Workshop', issuer: 'be10x', date: 'May 2026', image: 'be10x-ai-tools', kind: 'Courses' },
  { title: 'Generative AI Mastermind', issuer: 'Outskill', date: '2025', image: 'outskill-genai-mastermind', kind: 'Courses' },
  { title: 'Artificial Intelligence', issuer: 'Infosys Springboard', date: '2025', kind: 'Courses' },
  { title: 'Ethical Hacking Workshop', issuer: 'Remarkskill × FCC, IIT Hyderabad', date: 'Nov 2024', image: 'ethical-hacking-iith', kind: 'Courses' },
  { title: 'C Programming', issuer: 'Society for Computer Education', date: 'Jul 2024', image: 'c-programming', kind: 'Courses', note: 'Grade A+' },
  { title: 'MS Office', issuer: 'Society for Computer Education', date: 'Aug 2024', image: 'ms-office', kind: 'Courses', note: 'Grade A+' },
  { title: 'SummerSaaS AI Hackathon 2026', issuer: 'BITS Pilani, Hyderabad Campus', date: '2026', image: 'summersaas-hackathon', kind: 'Events', note: 'Participant' },
  { title: 'BVRIT Model United Nations', issuer: 'B.V. Raju Institute of Technology', date: 'Feb 2026', image: 'bvrit-mun', kind: 'Events', note: 'Delegate · AIPPM committee' },
  { title: 'Promethean 2025 — Crime.Exe', issuer: 'National technical symposium · BVRIT', date: '2025', image: 'promethean', kind: 'Events' },
  { title: 'Reignite · E-Summit 2025', issuer: 'E-Cell BVRIT', date: 'Apr 2025', image: 'reignite', kind: 'Events', note: 'Participant' },
  { title: 'Viksit Bharat Youth Parliament', issuer: 'Ministry of Youth Affairs & Sports', date: 'Mar 2025', image: 'viksit-bharat', kind: 'Events', note: 'District level · Medak' },
  { title: 'Certificate of Achievement', issuer: 'Nirvaha × Startup India', image: 'nirvaha', kind: 'Events', note: 'For contributions to the Nirvaha platform' },
  { title: 'National Mathematics Day', issuer: 'B.V. Raju Institute of Technology', date: 'Dec 2024', image: 'maths-day', kind: 'Events', note: 'Certificate of appreciation · Volunteer' },
]

export const education = {
  degree: 'B.Tech, Computer Science',
  school: 'B.V. Raju Institute of Technology',
  period: 'Aug 2024 — May 2028',
  cgpa: 8.34,
  extra: 'Apna College Sigma — MERN + DSA (2025–26)',
  earlier: [
    { school: 'Resonance Junior College', detail: 'Intermediate (MPC)', score: '9.5' },
    { school: "St. Peter's High School", detail: 'CBSE', score: '10.0' },
  ],
}

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'recognition', label: 'Recognition' },
  { id: 'contact', label: 'Contact' },
]
