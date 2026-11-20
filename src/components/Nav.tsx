import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { nav, profile } from '../data'

export function Nav() {
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    document.querySelectorAll('section[id]').forEach((s) => io.observe(s))
    return () => {
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
    }
  }, [])

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        className={`flex w-full max-w-3xl items-center justify-between rounded-full border px-2 py-2 transition-all duration-500 ${
          scrolled ? 'border-line bg-ink/70 shadow-[0_8px_40px_-12px_rgb(0_0_0/0.8)] backdrop-blur-xl' : 'border-transparent'
        }`}
      >
        <a href="#top" className="group flex items-center gap-2.5 pl-2" aria-label="Back to top">
          <span className="grid size-8 place-items-center rounded-full bg-aurora font-serif text-base text-ink italic">
            {profile.initials.toLowerCase()}
          </span>
          <span className="hidden text-sm font-medium text-white sm:block">
            {profile.first} <span className="text-mist">{profile.last}</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} className={`relative rounded-full px-3.5 py-1.5 text-sm transition-colors ${active === n.id ? 'text-white' : 'text-mist hover:text-white'}`}>
                {active === n.id && (
                  <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-white/[0.08]" transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }} />
                )}
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <a href={`mailto:${profile.email}`} className="btn-aurora hidden rounded-full px-4 py-1.5 text-sm font-semibold md:block">
          Let's talk
        </a>
        <button className="grid size-9 place-items-center rounded-full text-white md:hidden" onClick={() => setOpen((o) => !o)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            className="absolute inset-x-4 top-16 card-surface rounded-3xl p-3 backdrop-blur-xl md:hidden"
          >
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 text-lg text-zinc-200 hover:bg-white/5">
                {n.label}
              </a>
            ))}
            <a href={`mailto:${profile.email}`} className="btn-aurora mt-2 block rounded-2xl px-4 py-3 text-center font-semibold">
              Let's talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
