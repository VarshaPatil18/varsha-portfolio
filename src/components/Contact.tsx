import { ArrowUp, ArrowUpRight, Check, Copy, Phone } from 'lucide-react'
import { useState } from 'react'
import { profile } from '../data'
import { GithubIcon, LinkedinIcon, Reveal } from './ui'

const year = new Date().getFullYear()

export function Contact() {
  const [copied, setCopied] = useState(false)

  async function copy() {
    await navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  const links = [
    { label: 'GitHub', value: 'VarshaPatil18', href: profile.github, icon: <GithubIcon className="size-4" /> },
    { label: 'LinkedIn', value: 'varshapyata123', href: profile.linkedin, icon: <LinkedinIcon className="size-4" /> },
    { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`, icon: <Phone size={16} /> },
  ]

  return (
    <section id="contact" className="grain relative isolate overflow-hidden border-t border-line">
      <div className="absolute bottom-[-20rem] left-1/2 -z-10 h-[40rem] w-[70rem] -translate-x-1/2 rounded-full bg-[conic-gradient(from_90deg,#5e6ad255,#6c72e044,#5e6ad255)] opacity-60 blur-[120px]" />
      <div className="grid-bg absolute inset-0 -z-10 opacity-60" />

      <div className="mx-auto max-w-6xl px-6 pt-28 pb-12 md:pt-40">
        <Reveal>
          <p className="mb-6 flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-mist uppercase">
            <span className="text-violet">05</span>
            <span className="h-px w-8 bg-line" />
            Contact
          </p>
          <h2 className="max-w-4xl text-[clamp(2.8rem,8vw,6.5rem)] leading-[0.95] font-medium tracking-[-0.04em] text-white">
            Let's build something <span className="font-serif font-normal italic text-gradient">great</span> together.
          </h2>
          <p className="mt-8 max-w-lg text-lg text-mist">Open to internships, full-time roles, freelance projects and collaborations.</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="btn-aurora group inline-flex items-center gap-3 rounded-full py-2 pr-2 pl-6 text-base font-semibold sm:text-lg"
          >
            {profile.email}
            <span className="grid size-10 place-items-center rounded-full bg-ink text-white transition group-hover:rotate-45">
              <ArrowUpRight size={18} />
            </span>
          </a>
          <button
            onClick={copy}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-5 py-3.5 text-sm text-zinc-200 backdrop-blur transition hover:border-white/25"
            aria-live="polite"
          >
            {copied ? <Check size={15} className="text-emerald-300" /> : <Copy size={15} />}
            {copied ? 'Copied' : 'Copy email'}
          </button>
        </Reveal>

        <Reveal delay={0.15} className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-3">
          {links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="group flex items-center justify-between bg-ink/80 p-6 backdrop-blur transition hover:bg-panel">
              <span className="flex items-center gap-4">
                <span className="grid size-10 place-items-center rounded-full border border-line text-zinc-300 transition group-hover:border-violet/40 group-hover:text-white">{l.icon}</span>
                <span>
                  <span className="block font-mono text-xs tracking-widest text-mist uppercase">{l.label}</span>
                  <span className="text-sm text-white">{l.value}</span>
                </span>
              </span>
              <ArrowUpRight size={16} className="text-mist transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
            </a>
          ))}
        </Reveal>

        <footer className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-line pt-8 text-sm text-mist sm:flex-row">
          <p>
            © {year} {profile.first} {profile.last}. Designed & built in Hyderabad.
          </p>
          <a href="#top" className="group inline-flex items-center gap-2 transition hover:text-white">
            Back to top <ArrowUp size={14} className="transition group-hover:-translate-y-0.5" />
          </a>
        </footer>
      </div>
    </section>
  )
}
