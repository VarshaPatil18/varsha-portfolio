import { motion, useScroll } from 'motion/react'
import { BadgeCheck } from 'lucide-react'
import { certSrc, openLightbox } from './lightboxStore'
import { useRef } from 'react'
import { experience } from '../data'
import { Chip, Reveal, SectionHeading } from './ui'

export function Experience() {
  const ref = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] })

  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <SectionHeading index="03" eyebrow="Experience" title="Where I've" accent="worked.">
        Internships and roles where I shipped, led and learned.
      </SectionHeading>

      <ol ref={ref} className="relative">
        <span className="absolute top-2 bottom-2 left-[7px] w-px bg-line md:left-[calc(220px+7px)]" />
        <motion.span
          style={{ scaleY: scrollYProgress }}
          className="absolute top-2 bottom-2 left-[7px] w-px origin-top bg-gradient-to-b from-violet via-teal to-transparent md:left-[calc(220px+7px)]"
        />
        {experience.map((e, i) => (
          <li key={e.role} className="relative grid gap-3 pb-14 pl-10 last:pb-0 md:grid-cols-[220px_1fr] md:gap-0 md:pl-0">
            <Reveal delay={0.05} className="md:pt-1 md:pr-10 md:text-right">
              <p className="font-mono text-xs text-mist">{e.period}</p>
              <p className="mt-1 text-xs text-zinc-500">{e.mode}</p>
            </Reveal>
            <span
              className={`absolute top-1.5 left-0 grid size-[15px] place-items-center rounded-full border md:left-[220px] ${
                e.current ? 'border-emerald-400/50 bg-emerald-400/20' : 'border-white/15 bg-ink'
              }`}
            >
              <span className={`size-[5px] rounded-full ${e.current ? 'animate-pulse-dot bg-emerald-400' : 'bg-white/40'}`} />
            </span>
            <Reveal delay={0.1 + i * 0.02} className="md:pl-12">
              <div className="group rounded-3xl border border-transparent p-0 transition md:-m-6 md:p-6 md:hover:border-line md:hover:bg-panel/70">
                <h3 className="text-2xl font-medium tracking-tight text-white">
                  {e.role} <span className="font-serif font-normal text-mist italic">at</span> {e.company}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {e.points.map((p) => (
                    <li key={p} className="relative pl-5 leading-relaxed text-mist before:absolute before:top-[0.7em] before:left-0 before:h-px before:w-2.5 before:bg-violet/60">
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap items-center gap-1.5">
                  {e.tags.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                  {e.cert && (
                    <button
                      onClick={() => openLightbox({ src: certSrc(e.cert!), title: `${e.role} — ${e.company}`, caption: 'Certificate' })}
                      className="ml-1 inline-flex items-center gap-1.5 rounded-full border border-violet/30 bg-violet/[0.06] px-3 py-1 font-mono text-xs text-violet transition hover:border-violet/60 hover:bg-violet/10"
                    >
                      <BadgeCheck size={12} /> View certificate
                    </button>
                  )}
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  )
}
