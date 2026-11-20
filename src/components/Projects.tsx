import { ArrowUpRight, BookOpen } from 'lucide-react'
import type { ReactNode } from 'react'
import { projects, profile, type Project } from '../data'
import { Chip, GithubIcon, Reveal, SectionHeading, Spotlight } from './ui'

const accents: Record<Project['accent'], { glow: string; text: string; bar: string }> = {
  violet: { glow: 'from-blue-500/20', text: 'text-violet', bar: 'bg-violet' },
  teal: { glow: 'from-indigo-500/25', text: 'text-teal', bar: 'bg-teal' },
  amber: { glow: 'from-violet-500/20', text: 'text-sky', bar: 'bg-sky' },
  rose: { glow: 'from-indigo-400/20', text: 'text-indigo-200', bar: 'bg-indigo-200' },
}

const visuals: Record<NonNullable<Project['visual']>, () => ReactNode> = {
  trading: TradingVisual,
  chat: ChatVisual,
  player: PlayerVisual,
}

function Screenshot({ project: p }: { project: Project }) {
  const host = p.live ? new URL(p.live).host : p.title.toLowerCase()
  return (
    <div className="absolute inset-x-6 top-8 transition duration-700 ease-out group-hover:-translate-y-3 sm:inset-x-10 sm:top-10">
      <div className="overflow-hidden rounded-xl border border-white/10 bg-ink shadow-[0_30px_80px_-20px_rgb(0_0_0/0.9)]">
        <div className="flex items-center gap-1.5 border-b border-white/[0.06] bg-white/[0.03] px-3.5 py-2.5">
          <span className="size-2 rounded-full bg-white/15" />
          <span className="size-2 rounded-full bg-white/15" />
          <span className="size-2 rounded-full bg-white/15" />
          <span className="mx-auto truncate rounded-md bg-white/[0.05] px-3 py-0.5 font-mono text-xs text-mist">{host}</span>
        </div>
        <img src={`/projects/${p.image}.jpg`} alt={`Screenshot of ${p.title}`} loading="lazy" className="block w-full" />
      </div>
    </div>
  )
}

export function Projects() {
  const [featured, ...rest] = projects
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <SectionHeading index="02" eyebrow="Selected work" title="Things I've" accent="built.">
        A few projects across AI, fintech and frontend craft.{' '}
        <a href={profile.github} target="_blank" rel="noreferrer" className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">
          More on GitHub
        </a>
        .
      </SectionHeading>

      <div className="grid gap-5 md:grid-cols-2">
        <Reveal className="md:col-span-2">
          <ProjectCard project={featured} wide />
        </Reveal>
        {rest.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.1} className={i === rest.length - 1 && rest.length % 2 === 1 ? 'md:col-span-2' : ''}>
            <ProjectCard project={p} wide={i === rest.length - 1 && rest.length % 2 === 1} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project: p, wide }: { project: Project; wide?: boolean }) {
  const a = accents[p.accent]
  const Visual = p.visual ? visuals[p.visual] : null
  return (
    <Spotlight className={`group h-full overflow-hidden card-surface rounded-[1.75rem] ${wide ? 'grid lg:grid-cols-[1fr_1.1fr]' : 'flex flex-col'}`}>
      <div className={`relative shrink-0 overflow-hidden bg-gradient-to-br ${a.glow} via-transparent to-transparent ${wide ? 'order-last min-h-80 lg:min-h-[26rem]' : 'h-80'}`}>
        <div className="grid-bg absolute inset-0 opacity-60" />
        {p.image ? (
          <Screenshot project={p} />
        ) : (
          <div className="absolute inset-0 grid place-items-center p-8 transition duration-700 ease-out group-hover:scale-[1.03]">{Visual && <Visual />}</div>
        )}
      </div>

      <div className={`flex flex-1 flex-col p-7 md:p-9 ${wide ? 'justify-center' : ''}`}>
        <p className={`font-mono text-xs tracking-widest uppercase ${a.text}`}>{p.kicker}</p>
        <h3 className={`mt-3 font-medium tracking-tight text-white ${wide ? 'text-4xl md:text-5xl' : 'text-3xl'}`}>{p.title}</h3>
        <p className="mt-4 leading-relaxed text-mist">{p.description}</p>
        <div className="mt-6 flex flex-wrap gap-1.5">
          {p.tags.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-2 pt-1">
          {p.live && (
            <a href={p.live} target="_blank" rel="noreferrer" className="btn-aurora group/btn inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold">
              Live site <ArrowUpRight size={14} className="transition group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>
          )}
          {p.github && (
            <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm text-zinc-200 transition hover:border-white/25 hover:text-white">
              <GithubIcon className="size-3.5" /> Code
            </a>
          )}
          {p.paper && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-sky/25 bg-sky/5 px-4 py-2 text-sm text-sky">
              <BookOpen size={14} /> Published paper
            </span>
          )}
        </div>
      </div>
    </Spotlight>
  )
}

/* ---------- Illustrations (pure CSS/SVG, no images to maintain) ---------- */

const windowCls = 'w-full max-w-md rounded-2xl border border-white/10 bg-ink/80 shadow-2xl shadow-black/60 backdrop-blur'

function WindowBar({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-3">
      <span className="size-2.5 rounded-full bg-white/10" />
      <span className="size-2.5 rounded-full bg-white/10" />
      <span className="size-2.5 rounded-full bg-white/10" />
      <span className="ml-3 font-mono text-xs text-mist">{title}</span>
    </div>
  )
}

function TradingVisual() {
  return (
    <div className={windowCls}>
      <WindowBar title="kite / dashboard" />
      <div className="p-5">
        <div className="flex gap-1.5 font-mono text-xs">
          {['Watchlist', 'Holdings', 'Orders', 'Funds'].map((t, i) => (
            <span key={t} className={`rounded-md px-2 py-1 ${i === 1 ? 'bg-violet/15 text-violet' : 'text-mist'}`}>
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 space-y-2">
          {[70, 52, 84].map((w, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="h-2 w-14 rounded bg-white/10" />
              <span className="h-2 rounded bg-white/[0.06]" style={{ width: `${w}%` }} />
            </div>
          ))}
        </div>
        <svg viewBox="0 0 300 90" className="mt-4 w-full" aria-hidden>
          <defs>
            <linearGradient id="tg" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#8b8fff" stopOpacity=".45" />
              <stop offset="1" stopColor="#8b8fff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 70 L25 62 L50 66 L75 48 L100 54 L125 40 L150 44 L175 28 L200 34 L225 20 L250 26 L275 12 L300 16 L300 90 L0 90Z" fill="url(#tg)" />
          <path d="M0 70 L25 62 L50 66 L75 48 L100 54 L125 40 L150 44 L175 28 L200 34 L225 20 L250 26 L275 12 L300 16" fill="none" stroke="#8b8fff" strokeWidth="2" />
        </svg>
      </div>
    </div>
  )
}

function ChatVisual() {
  return (
    <div className={`${windowCls} space-y-3 p-5`}>
      <p className="flex items-center gap-2 border-b border-white/[0.06] pb-3 text-xs text-zinc-300"><span className="size-2 rounded-full bg-emerald-400" /> WhatsApp · Store assistant</p>
      <div className="ml-auto w-fit max-w-[75%] rounded-2xl rounded-br-md bg-white/10 px-3.5 py-2 text-xs text-zinc-200">Do you have 2 kg basmati rice in stock?</div>
      <div className="flex gap-2">
        <span className="grid size-6 shrink-0 place-items-center rounded-full bg-teal/20 font-mono text-[9px] text-teal">AI</span>
        <div className="max-w-[80%] rounded-2xl rounded-tl-md border border-teal/20 bg-teal/5 px-3.5 py-2 text-xs text-zinc-200">
          Yes, it's in stock. Shall I add it to today's order and share the payment link?
        </div>
      </div>
      <div className="flex items-center gap-1 pl-8">
        {[0, 1, 2].map((i) => (
          <span key={i} className="size-1.5 animate-bounce rounded-full bg-teal/60" style={{ animationDelay: `${i * 0.15}s` }} />
        ))}
      </div>
    </div>
  )
}

function PlayerVisual() {
  const bars = [40, 70, 55, 90, 65, 80, 45, 75, 60, 85, 50, 70, 40, 60, 80, 55]
  return (
    <div className={`${windowCls} flex items-center gap-4 p-5`}>
      <div className="size-16 shrink-0 rounded-xl bg-gradient-to-br from-indigo-400 to-violet-600" />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-white">Late Night Drive</p>
        <p className="text-xs text-mist">Recently played</p>
        <div className="mt-3 flex h-8 items-end gap-[3px]">
          {bars.map((h, i) => (
            <span
              key={i}
              className="w-full origin-bottom animate-pulse rounded-sm bg-indigo-200/70"
              style={{ height: `${h}%`, animationDelay: `${i * 0.08}s`, animationDuration: `${0.8 + (i % 4) * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
