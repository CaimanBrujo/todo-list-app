import React from 'react'
import ThemeToggle from './ThemeToggle'
import ResetButton from './ResetButton'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export default function SettingsMenu({ isOpen, onClose }: Props) {
  const overlayRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        overlayRef.current &&
        e.target instanceof Node &&
        e.target === overlayRef.current
      ) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 flex justify-end"
    >
      <div
        className={`relative bg-[--color-background] text-[--color-text] w-48 h-full p-6 shadow-xl flex flex-col items-center gap-8 border-l border-[--color-border] transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <h2 className="text-lg font-semibold">Settings</h2>

        <ThemeToggle />

        <ResetButton />
      </div>
    </div>
  )
}
