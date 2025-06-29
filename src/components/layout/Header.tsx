import SettingsMenu from './settings/SettingsMenu'
import { Settings } from 'lucide-react'
import React from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <>
      <header className="w-full bg-[--color-background] text-[--color-text] py-4 px-6 border-b border-[--color-border] flex items-center">
        <div className="flex-1" />

        <h1 className="text-xl font-semibold text-center">
          Todo List App using React + Vite + Tailwind CSS
        </h1>

        <div className="flex-1 flex justify-end">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 rounded-full hover:bg-[--color-border] transition"
            aria-label="Open settings"
          >
            <Settings size={20} />
          </button>
        </div>
      </header>

      <SettingsMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}
