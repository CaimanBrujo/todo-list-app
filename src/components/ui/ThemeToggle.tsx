import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    const html = document.documentElement
    setIsLight(html.classList.contains('light'))
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    html.classList.toggle('light')
    setIsLight(!isLight)
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="w-12 h-12 p-2 relative border border-[--color-border] rounded-full bg-[--color-background] hover:bg-[--color-accent-soft] transition-colors overflow-hidden"
    >
      <div
        className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${
          isLight ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Moon className="w-5 h-5 text-[--color-text]" />
      </div>
      <div
        className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${
          isLight ? 'translate-x-full' : 'translate-x-0'
        }`}
      >
        <Sun className="w-5 h-5 text-[--color-text]" />
      </div>
    </button>
  )
}
