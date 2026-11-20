import { AnimatePresence, motion } from 'motion/react'
import { ExternalLink, X } from 'lucide-react'
import { useEffect } from 'react'
import { closeLightbox, useLightbox } from './lightboxStore'

export function Lightbox() {
  const item = useLightbox()

  useEffect(() => {
    if (!item) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && closeLightbox()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [item])

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          key="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLightbox}
          className="fixed inset-0 z-[80] grid place-items-center bg-black/80 p-4 backdrop-blur-md sm:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
        >
          <motion.figure
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="card-surface relative flex max-h-full max-w-5xl flex-col overflow-hidden rounded-3xl"
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/[0.06] px-5 py-3.5">
              <figcaption className="min-w-0">
                <p className="truncate text-sm font-medium text-white">{item.title}</p>
                {item.caption && <p className="truncate text-xs text-mist">{item.caption}</p>}
              </figcaption>
              <div className="flex shrink-0 items-center gap-1">
                <a href={item.src} target="_blank" rel="noreferrer" className="grid size-9 place-items-center rounded-full text-mist transition hover:bg-white/10 hover:text-white" aria-label="Open full size">
                  <ExternalLink size={16} />
                </a>
                <button onClick={closeLightbox} className="grid size-9 place-items-center rounded-full text-mist transition hover:bg-white/10 hover:text-white" aria-label="Close" autoFocus>
                  <X size={18} />
                </button>
              </div>
            </div>
            <div className="min-h-0 overflow-auto bg-white/[0.02] p-3 sm:p-5">
              <img src={item.src} alt={item.title} className="mx-auto max-h-[75vh] w-auto rounded-xl object-contain" />
            </div>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
