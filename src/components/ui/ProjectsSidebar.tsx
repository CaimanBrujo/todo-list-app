import { useEffect, useRef } from 'react'
import { useTodoContext } from '../../context/useTodoContext'
import { useLayoutContext } from '../../context/useLayoutContext'
import SidebarToggleButton from './SidebarToggleButton'
import { Folder } from 'lucide-react'
import clsx from 'clsx'

export default function ProjectsSidebar() {
  const { state } = useTodoContext()
  const { isSidebarOpen, toggleSidebar, isMobile } = useLayoutContext()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isMobile || !isSidebarOpen) return

    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        toggleSidebar()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isSidebarOpen, isMobile, toggleSidebar])

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

  return (
    <aside
      ref={ref}
      className={clsx(
        'flex h-full z-30 transition-all duration-700 ease-in-out',
        isSidebarOpen ? 'w-56' : 'w-10'
      )}
    >
      <div
        className={clsx(
          'h-full bg-[--color-gray-800] text-text',
          'transition-all duration-700 ease-in-out',
          'md:border-r border-border',
          isSidebarOpen ? 'w-35 px-4 pt-4' : 'w-0 px-0 pt-4 overflow-hidden'
        )}
      >
        <div
          className={clsx(
            'transition-opacity duration-700 ease-in-out',
            isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          )}
        >
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
        </div>
      </div>

      <SidebarToggleButton />
    </aside>
  )
}
