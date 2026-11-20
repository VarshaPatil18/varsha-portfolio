import { motion } from 'motion/react'
import { ArrowUpRight, Clock, GraduationCap, Mail, MapPin, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import { education, profile, stack } from '../data'
import { GithubIcon, LinkedinIcon, Reveal, SectionHeading, Spotlight } from './ui'

// Two-letter badges in each tool's brand colour (Dribbble-style skill tiles).
const badges: Record<string, { abbr: string; color: string }> = {
  Java: { abbr: 'Jv', color: '#f89820' },
  C: { abbr: 'C', color: '#659ad2' },
  SQL: { abbr: 'SQL', color: '#e38c00' },
  Bootstrap: { abbr: 'B', color: '#8c5cf5' },
  'REST APIs': { abbr: '{}', color: '#c9cbff' },
  n8n: { abbr: 'n8n', color: '#ea4b71' },
  Gemini: { abbr: 'Ge', color: '#8ab4f8' },
  'CI/CD': { abbr: 'CI', color: '#2ea44f' },
  JavaScript: { abbr: 'JS', color: '#f7df1e' },
  TypeScript: { abbr: 'TS', color: '#4c9eff' },
  React: { abbr: 'Re', color: '#61dafb' },
  'Next.js': { abbr: 'N', color: '#ffffff' },
  Redux: { abbr: 'Rx', color: '#a77bf3' },
  Tailwind: { abbr: 'Tw', color: '#38bdf8' },
  'HTML / CSS': { abbr: '</>', color: '#f97316' },
  'Material UI': { abbr: 'MU', color: '#3b9eff' },
  'Node.js': { abbr: 'No', color: '#6cc24a' },
  Express: { abbr: 'Ex', color: '#d4d4d8' },
  Python: { abbr: 'Py', color: '#ffd43b' },
  Flask: { abbr: 'Fl', color: '#e4e4e7' },
  Django: { abbr: 'Dj', color: '#44b78b' },
  FastAPI: { abbr: 'FA', color: '#05998b' },
  MongoDB: { abbr: 'Mg', color: '#4db33d' },
  PostgreSQL: { abbr: 'Pg', color: '#6b9bd1' },
  MySQL: { abbr: 'My', color: '#00a5c4' },
  Redis: { abbr: 'Rd', color: '#ff4438' },
  Supabase: { abbr: 'Sb', color: '#3ecf8e' },
  'LLM APIs': { abbr: 'AI', color: '#c9cbff' },
  'Prompt Engineering': { abbr: 'Pr', color: '#8b8fff' },
  TensorFlow: { abbr: 'TF', color: '#ff8f00' },
  Keras: { abbr: 'Ke', color: '#ff4d4d' },
  'scikit-learn': { abbr: 'Sk', color: '#f89939' },
  Pandas: { abbr: 'Pd', color: '#a78bfa' },
  NumPy: { abbr: 'Np', color: '#4dabcf' },
  OpenCV: { abbr: 'CV', color: '#7c83ff' },
  AWS: { abbr: 'AWS', color: '#ff9900' },
  Docker: { abbr: 'Dk', color: '#2496ed' },
  Git: { abbr: 'Git', color: '#f05032' },
  Linux: { abbr: 'Lx', color: '#fcc624' },
  Vercel: { abbr: '▲', color: '#ffffff' },
  Postman: { abbr: 'Pm', color: '#ff6c37' },
}

const card ='card-surface rounded-3xl p-6 md:p-7'

const formatTime = (tz: string) =>
  new Intl.DateTimeFormat('en-IN', { timeZone: tz, hour: '2-digit', minute: '2-digit', hour12: true }).format(new Date())

function useLocalTime(tz: string) {
  const [time, setTime] = useState(() => formatTime(tz))
  useEffect(() => {
    const id = setInterval(() => setTime(formatTime(tz)), 15_000)
    return () => clearInterval(id)
  }, [tz])
  return time
}

export function About() {
  const time = useLocalTime(profile.timezone)
  const pct = education.cgpa / 10

  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <SectionHeading index="01" eyebrow="About" title="Engineer with a" accent="product eye.">
        I like the full arc: shaping the idea, designing the interface, wiring the API and shipping it.
      </SectionHeading>

      <div className="grid gap-4 md:grid-cols-6">
        <Reveal className="md:col-span-4 md:row-span-2">
          <Spotlight className={`${card} flex h-full flex-col justify-between gap-10`}>
            <div className="space-y-5 text-lg leading-relaxed text-zinc-300 md:text-xl">
              <p>
                I'm Varsha, a Computer Science undergrad at <span className="text-white">B.V. Raju Institute of Technology</span>, Hyderabad, and an{' '}
                <span className="text-white">AI Developer Intern at Olynk AI</span>, where I build production generative-AI apps and the backend services behind them.
              </p>
              <p className="text-mist">
                My day-to-day spans React, Node.js, Express, FastAPI, MongoDB, Docker and AWS, on strong fundamentals in Java, SQL, DSA and OOP. I enjoy turning messy business problems into end-to-end products, from a
                responsive UI down to an LLM-integrated API. Outside work I compete in hackathons (first place at Promethean 2025) and train in MERN + DSA through
                Apna College Sigma.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { href: profile.github, label: 'GitHub', icon: <GithubIcon className="size-4" /> },
                { href: profile.linkedin, label: 'LinkedIn', icon: <LinkedinIcon className="size-4" /> },
                { href: `mailto:${profile.email}`, label: 'Email', icon: <Mail size={16} /> },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-zinc-300 transition hover:border-white/25 hover:text-white"
                >
                  {l.icon}
                  {l.label}
                  <ArrowUpRight size={13} className="opacity-50 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </Spotlight>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-2">
          <Spotlight className={`${card} relative h-full overflow-hidden`}>
            <div className="absolute -top-16 -right-16 size-48 rounded-full bg-teal/10 blur-3xl" />
            <div className="flex items-center justify-between text-mist">
              <MapPin size={18} />
              <span className="flex items-center gap-1.5 font-mono text-xs">
                <Clock size={12} /> {time} IST
              </span>
            </div>
            <p className="mt-10 text-2xl font-medium tracking-tight text-white">{profile.location}</p>
            <p className="mt-1 text-sm text-mist">Open to remote and on-site roles</p>
          </Spotlight>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-2">
          <Spotlight className={`${card} h-full`}>
            <div className="flex items-start justify-between">
              <GraduationCap size={18} className="text-mist" />
              <div className="relative size-16">
                <svg viewBox="0 0 36 36" className="size-full -rotate-90">
                  <circle cx="18" cy="18" r="15.5" fill="none" stroke="rgb(255 255 255 / 0.08)" strokeWidth="3" />
                  <motion.circle
                    cx="18"
                    cy="18"
                    r="15.5"
                    fill="none"
                    stroke="url(#cg)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: pct }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <defs>
                    <linearGradient id="cg">
                      <stop offset="0" stopColor="#8b8fff" />
                      <stop offset="1" stopColor="#8b8fff" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="absolute inset-0 grid place-items-center text-xs font-medium text-white">{education.cgpa}</span>
              </div>
            </div>
            <p className="mt-6 text-lg font-medium text-white">{education.degree}</p>
            <p className="text-sm text-mist">
              {education.school} · {education.period}
            </p>
            <ul className="mt-4 space-y-1.5 border-t border-white/[0.06] pt-4 text-xs text-mist">
              {education.earlier.map((e) => (
                <li key={e.school} className="flex justify-between gap-3">
                  <span>
                    {e.school} <span className="text-zinc-500">· {e.detail}</span>
                  </span>
                  <span className="font-mono text-violet">{e.score}</span>
                </li>
              ))}
            </ul>
          </Spotlight>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-6">
          <div className={`${card} grid gap-8`} id="stack">
            <div className="flex items-center gap-3 border-b border-white/[0.06] pb-6">
              <Sparkles size={18} className="text-violet" />
              <p className="text-lg font-medium text-white">Toolbox</p>
              <p className="text-sm text-mist">· what I reach for, across the stack</p>
            </div>
            <div className="divide-y divide-white/[0.06]">
              {stack.map((g) => (
                <div key={g.group} className="grid gap-4 py-5 first:pt-0 last:pb-0 md:grid-cols-[170px_1fr] md:items-center">
                  <p className="font-mono text-xs tracking-widest text-violet uppercase">{g.group}</p>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {g.items.map((t) => {
                      const b = badges[t] ?? { abbr: t.slice(0, 2), color: '#8b8fff' }
                      return (
                        <div
                          key={t}
                          className="group/tile flex items-center gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] p-2 pr-3 transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.05]"
                        >
                          <span
                            className="grid size-8 shrink-0 place-items-center rounded-lg font-mono text-xs font-semibold transition group-hover/tile:scale-110"
                            style={{ color: b.color, background: `${b.color}1f`, boxShadow: `inset 0 0 0 1px ${b.color}33` }}
                          >
                            {b.abbr}
                          </span>
                          <span className="text-[13px] leading-tight text-zinc-300 group-hover/tile:text-white">{t}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function Marquee() {
  const items = stack.flatMap((g) => g.items)
  return (
    <div className="relative overflow-hidden border-y border-line py-5 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]" aria-hidden>
      <div className="flex w-max animate-marquee gap-10">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-serif text-2xl whitespace-nowrap text-zinc-500 italic">
            {t}
            <span className="size-1.5 rounded-full bg-violet/50" />
          </span>
        ))}
      </div>
    </div>
  )
}
