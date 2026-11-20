import { useSyncExternalStore } from 'react'

export type LightboxItem = { src: string; title: string; caption?: string }

// Tiny global store so any section can open the certificate viewer.
let current: LightboxItem | null = null
const listeners = new Set<() => void>()

export function openLightbox(item: LightboxItem) {
  current = item
  listeners.forEach((l) => l())
}

export function closeLightbox() {
  current = null
  listeners.forEach((l) => l())
}

export function useLightbox() {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l)
      return () => listeners.delete(l)
    },
    () => current,
  )
}

export const certSrc = (name: string) => `/certificates/${name}.jpg`
export const certThumb = (name: string) => `/certificates/${name}-thumb.jpg`
