import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'motion/react'
import { ArrowDownRight, ArrowUpRight, Briefcase, FileText, FolderGit2, GraduationCap, MapPin, Trophy } from 'lucide-react'
import { useState, type PointerEvent } from 'react'
import { profile, stats } from '../data'

const ease = [0.22, 1, 0.36, 1] as const
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 30, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 1, delay, ease },
})

const statColors = ['from-[#c9cbff] to-[#8b8fff]', 'from-indigo-100 to-indigo-200', 'from-[#c9cbff] to-[#8b8fff]', 'from-indigo-100 to-indigo-200']

const statIcons = [GraduationCap, Briefcase, FolderGit2, Trophy]

export function Hero() {
  const mx = useMotionValue(-400)
  const my = useMotionValue(-400)
  const glow = useMotionTemplate`radial-gradient(500px circle at ${mx}px ${my}px, rgb(201 203 255 / 0.10), transparent 60%)`

  function onMove(e: PointerEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set(e.clientX - r.left)
    my.set(e.clientY - r.top)
  }

  return (
    <section id="top" onPointerMove={onMove} className="grain relative isolate flex min-h-svh items-center overflow-hidden pt-28 pb-16">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] h-[42rem] w-[42rem] animate-aurora-1 rounded-full bg-indigo-500/25 blur-[130px]" />
        <div className="absolute top-[-10%] right-[-15%] h-[38rem] w-[38rem] animate-aurora-2 rounded-full bg-violet-500/15 blur-[130px]" />
        <div className="absolute bottom-[-25%] left-[30%] h-[34rem] w-[34rem] animate-aurora-3 rounded-full bg-indigo-400/10 blur-[130px]" />
        <div className="absolute right-[10%] bottom-[-10%] h-[24rem] w-[24rem] animate-aurora-1 rounded-full bg-indigo-300/10 blur-[110px]" />
      </div>
      <div className="grid-bg absolute inset-0 -z-10" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-b from-transparent to-ink" />
      <motion.div className="pointer-events-none absolute inset-0 -z-10" style={{ background: glow }} />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <motion.a
            {...rise(0)}
            href="#experience"
            className="group mb-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-white/[0.03] py-1.5 pr-3.5 pl-2 text-xs text-zinc-300 backdrop-blur transition hover:border-white/20"
          >
            <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-400/10 px-2 py-0.5 font-medium whitespace-nowrap text-emerald-300">
              <span className="size-1.5 animate-pulse-dot rounded-full bg-emerald-400" />
              Open to work
            </span>
            AI Developer Intern at Olynk AI
            <ArrowUpRight size={13} className="text-mist transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
          </motion.a>

          <h1 className="text-[clamp(3.4rem,10vw,7.5rem)] leading-[0.92] font-medium tracking-[-0.045em] text-white">
            <motion.span {...rise(0.1)} className="block">
              {profile.first}
            </motion.span>
            <motion.span {...rise(0.2)} className="block font-serif font-normal tracking-[-0.02em] italic text-gradient pr-3 pb-[0.12em]">
              {profile.last}.
            </motion.span>
          </h1>

          <motion.p {...rise(0.35)} className="mt-8 max-w-xl text-lg leading-relaxed text-mist">
            <span className="text-white">{profile.role}.</span> {profile.intro}
          </motion.p>

          <motion.div {...rise(0.45)} className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#work" className="btn-aurora group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold">
              See my work
              <ArrowDownRight size={16} className="transition group-hover:rotate-[-45deg]" />
            </a>
            <a href={profile.resume} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-6 py-3 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/[0.06]">
              <FileText size={15} /> Résumé
            </a>
          </motion.div>

          <motion.dl {...rise(0.55)} className="card-surface mt-14 grid max-w-xl grid-cols-2 overflow-hidden rounded-2xl sm:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.label} className={`px-5 py-4 ${i > 0 ? 'sm:border-l sm:border-white/[0.06]' : ''} ${i % 2 ? 'border-l border-white/[0.06] sm:border-l' : ''} ${i > 1 ? 'border-t border-white/[0.06] sm:border-t-0' : ''}`}>
                <dt className="flex items-center gap-1.5 font-mono text-xs tracking-widest text-mist uppercase">
                  {(() => {
                    const Icon = statIcons[i % statIcons.length]
                    return <Icon size={12} className="shrink-0 text-violet" />
                  })()}
                  {s.label}
                </dt>
                <dd className={`mt-1 bg-gradient-to-r bg-clip-text text-2xl font-semibold tracking-tight text-transparent ${statColors[i % statColors.length]}`}>{s.value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <Portrait />
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-xs tracking-[0.3em] text-mist uppercase md:flex"
      >
        Scroll
        <span className="relative h-10 w-px overflow-hidden bg-line">
          <motion.span className="absolute inset-x-0 top-0 h-4 bg-white" animate={{ y: [-16, 40] }} transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }} />
        </span>
      </motion.a>
    </section>
  )
}

/* Syntax colours for the code card. */
const k = 'text-[#c9cbff]' // keyword
const p = 'text-[#8a8f98]' // punctuation
const key = 'text-[#e4e5ff]'
const str = 'text-[#a7e3b9]'
const bool = 'text-[#ffcb8b]'

const codeLines = [
  <><span className="text-[#5d6270] italic">{'// varsha.ts'}</span></>,
  <><span className={k}>const</span> <span className="text-[#8b8fff]">engineer</span> <span className={p}>=</span> <span className={p}>{'{'}</span></>,
  <>{'  '}<span className={key}>name</span><span className={p}>:</span> <span className={str}>'Varsha Pyata'</span><span className={p}>,</span></>,
  <>{'  '}<span className={key}>role</span><span className={p}>:</span> <span className={str}>'Full Stack + AI'</span><span className={p}>,</span></>,
  <>{'  '}<span className={key}>stack</span><span className={p}>: [</span><span className={str}>'React'</span><span className={p}>, </span><span className={str}>'Node'</span><span className={p}>, </span><span className={str}>'LLMs'</span><span className={p}>],</span></>,
  <>{'  '}<span className={key}>focus</span><span className={p}>:</span> <span className={str}>'AI agents'</span><span className={p}>,</span></>,
  <>{'  '}<span className={key}>openToWork</span><span className={p}>:</span> <span className={bool}>true</span><span className={p}>,</span></>,
  <><span className={p}>{'}'}</span><span className="ml-0.5 inline-block h-3.5 w-[7px] translate-y-0.5 animate-pulse bg-[#c9cbff]" /></>,
]

function CodeCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, x: -20 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 1, delay: 0.9, ease }}
      className="card-surface absolute -bottom-24 -left-28 hidden w-[19rem] rounded-2xl shadow-[0_30px_80px_-20px_rgb(0_0_0/0.9)] lg:block"
    >
      <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]/80" />
        <span className="size-2.5 rounded-full bg-[#febc2e]/80" />
        <span className="size-2.5 rounded-full bg-[#28c840]/80" />
        <span className="ml-auto font-mono text-xs text-mist">varsha.ts</span>
      </div>
      <pre className="overflow-hidden px-4 py-3.5 font-mono text-xs leading-[1.7]">
        {codeLines.map((line, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.1 + i * 0.09 }} className="flex">
            <span className="mr-3 w-3 shrink-0 text-right text-[#3f434d] select-none">{i + 1}</span>
            <span className="whitespace-pre">{line}</span>
          </motion.div>
        ))}
      </pre>
    </motion.div>
  )
}

function Portrait() {
  const [failed, setFailed] = useState(false)
  const rx = useSpring(0, { stiffness: 120, damping: 14 })
  const ry = useSpring(0, { stiffness: 120, damping: 14 })
  const shineX = useTransform(ry, [-10, 10], ['0%', '100%'])
  const shine = useMotionTemplate`linear-gradient(115deg, transparent 30%, rgb(255 255 255 / 0.12) ${shineX}, transparent 70%)`

  function onMove(e: PointerEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect()
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 16)
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 16)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1.2, delay: 0.3, ease }}
      className="relative order-first mx-auto w-full max-w-[15rem] [perspective:1000px] sm:max-w-xs lg:order-none lg:max-w-sm"
    >
      <div className="absolute -inset-12 -z-10 rounded-full bg-[radial-gradient(circle,#8b8fff40,transparent_65%)] blur-2xl" />
      <motion.div
        onPointerMove={onMove}
        onPointerLeave={() => {
          rx.set(0)
          ry.set(0)
        }}
        style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
        className="relative aspect-[4/5] rounded-[2.1rem] p-[1.5px] shadow-[0_40px_120px_-30px_rgb(201_203_255/0.5)]"
      >
        {/* Rotating gradient ring */}
        <div className="absolute inset-0 overflow-hidden rounded-[2.1rem]">
          <div className="absolute top-1/2 left-1/2 aspect-square w-[160%] -translate-x-1/2 -translate-y-1/2 animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_0deg,#8b8fff,#c9cbff,#e4e5ff,#8b8fff,#8b8fff)]" />
        </div>
        <div className="relative size-full overflow-hidden rounded-[2rem] bg-[#0d0e16]">
        {/* Studio backdrop in the site's palette, so the cut-out sits in the theme */}
        <div className="absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_42%,#5e6ad2aa,transparent_70%),radial-gradient(60%_40%_at_20%_10%,#8b8fff40,transparent_70%),radial-gradient(50%_40%_at_90%_25%,#c9cbff26,transparent_70%)]" />
        <div className="grid-bg absolute inset-0 opacity-50" />
        <div className="absolute top-[14%] left-1/2 size-[70%] -translate-x-1/2 rounded-full border border-white/[0.07]" />
        <div className="absolute top-[6%] left-1/2 size-[90%] -translate-x-1/2 rounded-full border border-white/[0.04]" />
        {!failed ? (
          <img
            src={profile.photo}
            alt={`Portrait of ${profile.first} ${profile.last}`}
            onError={() => setFailed(true)}
            className="absolute inset-x-0 bottom-0 h-full w-full object-cover object-top drop-shadow-[0_20px_40px_rgb(0_0_0/0.55)]"
          />
        ) : (
          <div className="grid size-full place-items-center bg-[radial-gradient(circle_at_25%_15%,#6c72e099,transparent_50%),radial-gradient(circle_at_85%_35%,#3b3f8f77,transparent_45%),radial-gradient(circle_at_50%_100%,#4c4f9e66,transparent_55%)]">
            <span className="font-serif text-[9rem] leading-none text-white italic drop-shadow-[0_10px_40px_rgb(0_0_0/0.4)]">{profile.initials.toLowerCase()}</span>
          </div>
        )}
        <motion.div className="pointer-events-none absolute inset-0" style={{ background: shine }} />
        <p className="absolute top-4 left-4 flex items-center gap-1 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-xs text-zinc-200 backdrop-blur-md">
          <MapPin size={11} /> Hyderabad, IN
        </p>
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#0d0e16] via-[#0d0e16]/60 to-transparent" />
        </div>
      </motion.div>

      <CodeCard />
    </motion.div>
  )
}
