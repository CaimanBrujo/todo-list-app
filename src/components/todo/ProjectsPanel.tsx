import { Folder } from 'lucide-react'
import clsx from 'clsx'
import { useState } from 'react'
import { useTodoContext } from '../../context/useTodoContext'
import AddProjectButton from './AddProjectButton'
import AddProjectModal from './AddProjectModal'

export default function ProjectsPanel() {
  const { state, selectedProjectId, setSelectedProjectId } = useTodoContext()
  const [isModalOpen, setIsModalOpen] = useState(false)

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
              'text-lg hover:text-accent cursor-pointer truncate',
              selectedProjectId === project.id && 'font-semibold text-accent'
            )}
          >
            {project.name}
          </li>
        ))}
      </ul>

      <AddProjectButton onClick={() => setIsModalOpen(true)} />
      <AddProjectModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}
