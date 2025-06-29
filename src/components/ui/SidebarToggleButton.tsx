import { Menu } from 'lucide-react'
import { useLayoutContext } from '../../context/useLayoutContext'
import clsx from 'clsx'

export default function SidebarToggleButton() {
  const { toggleSidebar, isMobile } = useLayoutContext()

  if (!isMobile) return null

  return (
    <button
      onClick={toggleSidebar}
      className={clsx(
        'w-10 h-full flex items-center justify-center text-text',
        'bg-[--color-gray-800] border-r border-border',
        'hover:bg-[--color-gray-600] transition-colors',
        'border-l-0'
      )}
      aria-label="Toggle sidebar"
    >
      <Menu className="w-5 h-5" />
    </button>
  )
}
