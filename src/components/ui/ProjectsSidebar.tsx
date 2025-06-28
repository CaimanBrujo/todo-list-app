import { useEffect, useRef } from 'react'
import { useTodoContext } from '../../context/useTodoContext'
import { useLayoutContext } from '../../context/useLayoutContext'
import { Folder } from 'lucide-react'
import clsx from 'clsx'

export default function ProjectsSidebar() {
  const { state } = useTodoContext()
  const { isSidebarOpen, isMobile, closeSidebar } = useLayoutContext()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isMobile || !isSidebarOpen) return

    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        closeSidebar()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isSidebarOpen, isMobile, closeSidebar])

  // Desktop layout
  if (!isMobile) {
    return (
      <aside className="w-56 p-4 bg-[--color-gray-800] border-r border-border shadow-md text-text">
        <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
          <Folder className="w-5 h-5" />
          Projects
        </h2>
        <ul className="space-y-2">
          {state.map((project) => (
            <li
              key={project.id}
              className="text-sm hover:text-accent cursor-pointer truncate"
            >
              {project.name}
            </li>
          ))}
        </ul>
      </aside>
    )
  }

  // Mobile layout (collapsible)
  return (
    <div
      ref={ref}
      className={clsx(
        'transition-all duration-300 overflow-hidden',
        isSidebarOpen ? 'w-56' : 'w-0'
      )}
    >
      <aside className="w-56 h-full p-4 bg-[--color-gray-800] border-r border-border shadow-md text-text">
        <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
          <Folder className="w-5 h-5" />
          Projects
        </h2>
        <ul className="space-y-2">
          {state.map((project) => (
            <li
              key={project.id}
              className="text-sm hover:text-accent cursor-pointer truncate"
            >
              {project.name}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  )
}
