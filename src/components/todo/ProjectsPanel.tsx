import { Folder } from 'lucide-react'
import clsx from 'clsx'
import { useTodoContext } from '../../context/useTodoContext'

export default function ProjectsPanel() {
  const { state, selectedProjectId, setSelectedProjectId } = useTodoContext()

  return (
    <div>
      <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
        <Folder className="w-5 h-5" />
        Projects
      </h2>
      <ul className="space-y-2">
        {state.map((project) => (
          <li
            key={project.id}
            onClick={() => setSelectedProjectId(project.id)}
            className={clsx(
              'text-sm hover:text-accent cursor-pointer truncate',
              selectedProjectId === project.id && 'font-semibold text-accent'
            )}
          >
            {project.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
