import { motion, useScroll, useSpring } from 'motion/react'
import { About, Marquee } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Lightbox } from './components/Lightbox'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { Recognition } from './components/Recognition'

export default function App() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <>
      <motion.div style={{ scaleX: progress }} className="fixed inset-x-0 top-0 z-[60] h-px origin-left bg-gradient-to-r from-violet to-teal" />
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-ink">
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Experience />
        <Recognition />
        <Contact />
      </main>
      <Lightbox />
    </>
  )
}
