import { Menu } from 'lucide-react'
import { useLayoutContext } from '../../context/useLayoutContext'
import clsx from 'clsx'

export default function SidebarToggleButton() {
  const { toggleSidebar, isSidebarOpen, isMobile } = useLayoutContext()

  // Mostrar solo en mobile y solo cuando el sidebar está cerrado
  if (!isMobile || isSidebarOpen) return null

  return (
    <button
      onClick={toggleSidebar}
      className={clsx(
        'sticky top-16 z-30 h-[calc(100vh-8rem)] w-10 rounded-r-md shadow-md',
        'bg-[--color-gray-800] border-r border-border text-white',
        'flex items-center justify-center hover:bg-[--color-gray-600] transition-colors'
      )}
      aria-label="Toggle sidebar"
    >
      <Menu className="w-5 h-5" />
    </button>
  )
}
