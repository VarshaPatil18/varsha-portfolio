import { AnimatePresence, motion } from 'motion/react'
import { Award, BadgeCheck, ChevronDown, Maximize2, Trophy } from 'lucide-react'
import { useState } from 'react'
import { achievements, certifications, type Cert } from '../data'
import { certSrc, certThumb, openLightbox } from './lightboxStore'
import { Reveal, SectionHeading, Spotlight } from './ui'

// The first award fills a tall column; four cards sit beside it, the rest flow in rows of three.
function spanFor(i: number, n: number) {
  const rest = n - 4
  if (i !== n - 1 || rest <= 0) return ''
  return rest % 3 === 1 ? 'md:col-span-3' : rest % 3 === 2 ? 'md:col-span-2' : ''
}

export function Recognition() {
  const [top, ...rest] = achievements
  const [allAwards, setAllAwards] = useState(false)
  const others = allAwards ? rest : rest.slice(0, 4)
  return (
    <section id="recognition" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <SectionHeading index="04" eyebrow="Recognition" title="Awards &" accent="learning.">
        Competitions, programmes and the certifications behind the work.
      </SectionHeading>

      <div className="grid gap-4 md:grid-cols-3">
        <Reveal className="md:row-span-2">
          <Spotlight className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-amber/20 bg-gradient-to-b from-amber/[0.08] to-panel p-8">
            <div className="absolute -top-20 -right-20 size-60 rounded-full bg-amber/20 blur-3xl" />
            <Trophy className="text-amber" size={28} />
            <div className="mt-16">
              <p className="font-serif text-8xl leading-none text-white italic">1st</p>
              <p className="mt-4 text-xl font-medium text-white">{top.title}</p>
              <p className="mt-1 font-mono text-xs tracking-wider text-amber uppercase">{top.meta}</p>
              <p className="mt-4 leading-relaxed text-mist">{top.detail}</p>
            </div>
          </Spotlight>
        </Reveal>

        {others.map((a, i) => (
          <Reveal key={a.title} delay={0.05 * (i + 1)} className={spanFor(i, others.length)}>
            <Spotlight className="h-full card-surface rounded-3xl p-6">
              <Award size={18} className="text-violet" />
              <p className="mt-5 text-lg font-medium text-white">{a.title}</p>
              <p className="mt-0.5 font-mono text-xs tracking-wider text-teal uppercase">{a.meta}</p>
              <p className="mt-3 text-sm leading-relaxed text-mist">{a.detail}</p>
            </Spotlight>
          </Reveal>
        ))}
      </div>

      {rest.length > 4 && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setAllAwards((v) => !v)}
            className="card-surface inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-zinc-200 transition hover:text-white"
          >
            {allAwards ? 'Show fewer awards' : `Show all ${achievements.length} awards`}
            <ChevronDown size={15} className={`transition ${allAwards ? 'rotate-180' : ''}`} />
          </button>
        </div>
      )}

      <Certificates />
    </section>
  )
}

const tabs = ['All', 'AI & Cloud', 'Courses', 'Events'] as const
const INITIAL = 6

function Certificates() {
  const [tab, setTab] = useState<(typeof tabs)[number]>('All')
  const [expanded, setExpanded] = useState(false)
  const filtered = tab === 'All' ? certifications : certifications.filter((c) => c.kind === tab)
  const shown = expanded ? filtered : filtered.slice(0, INITIAL)

  return (
    <div className="mt-24">
      <Reveal className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-mist uppercase">
            <BadgeCheck size={14} className="text-violet" /> Certificates & badges
          </h3>
          <p className="mt-3 text-2xl font-medium tracking-tight text-white">
            {certifications.length} credentials <span className="font-serif font-normal text-mist italic">· click any to view</span>
          </p>
        </div>
        <div className="card-surface flex w-fit flex-wrap gap-1 rounded-full p-1" role="group" aria-label="Filter certificates">
          {tabs.map((t) => {
            const count = t === 'All' ? certifications.length : certifications.filter((c) => c.kind === t).length
            return (
              <button
                key={t}
                aria-pressed={tab === t}
                onClick={() => {
                  setTab(t)
                  setExpanded(false)
                }}
                className={`relative rounded-full px-3.5 py-1.5 text-sm transition-colors ${tab === t ? 'text-ink' : 'text-mist hover:text-white'}`}
              >
                {tab === t && <motion.span layoutId="cert-tab" className="bg-aurora absolute inset-0 -z-10 rounded-full" transition={{ type: 'spring', bounce: 0.2, duration: 0.45 }} />}
                <span className="relative">
                  {t} <span className={tab === t ? 'opacity-60' : 'opacity-50'}>{count}</span>
                </span>
              </button>
            )
          })}
        </div>
      </Reveal>

      <motion.ul layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {shown.map((c) => (
            <motion.li
              key={c.title}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
            >
              <CertCard cert={c} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      {filtered.length > INITIAL && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setExpanded((e) => !e)}
            className="card-surface inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-zinc-200 transition hover:text-white"
          >
            {expanded ? 'Show less' : `Show all ${filtered.length}`}
            <ChevronDown size={15} className={`transition ${expanded ? 'rotate-180' : ''}`} />
          </button>
        </div>
      )}
    </div>
  )
}

function CertCard({ cert: c }: { cert: Cert }) {
  const caption = [c.issuer, c.date].filter(Boolean).join(' · ')
  const body = (
    <>
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/[0.06] bg-white/[0.025]">
        {c.image ? (
          <>
            <img
              src={certThumb(c.image)}
              alt=""
              loading="lazy"
              className="absolute inset-0 size-full object-contain p-4 transition duration-500 ease-out group-hover:scale-[1.05]"
            />
            <span className="absolute inset-0 grid place-items-center bg-ink/60 opacity-0 backdrop-blur-[2px] transition duration-300 group-hover:opacity-100">
              <span className="btn-aurora inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold">
                <Maximize2 size={14} /> View
              </span>
            </span>
          </>
        ) : (
          <div className="grid size-full place-items-center">
            <BadgeCheck size={40} className="text-violet/60" />
          </div>
        )}
      </div>
      <div className="p-5">
        <p className="font-mono text-xs tracking-widest text-violet uppercase">{c.kind}</p>
        <p className="mt-2 leading-snug font-medium text-white">{c.title}</p>
        <p className="mt-1 text-sm text-mist">{caption}</p>
        {c.note && <p className="mt-3 inline-flex rounded-full bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-zinc-400">{c.note}</p>}
      </div>
    </>
  )

  const cls = 'group card-surface block h-full w-full overflow-hidden rounded-2xl text-left transition duration-300 hover:-translate-y-1'
  if (!c.image) return <div className={cls}>{body}</div>
  const image = c.image
  return (
    <button className={`${cls} cursor-zoom-in`} onClick={() => openLightbox({ src: certSrc(image), title: c.title, caption })} aria-label={`View certificate: ${c.title}`}>
      {body}
    </button>
  )
}
