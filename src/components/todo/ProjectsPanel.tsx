import { useTodoContext } from '../../context/useTodoContext'
import { Folder } from 'lucide-react'

export default function ProjectsPanel() {
  const { state } = useTodoContext()

  return (
    <>
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
    </>
  )
}
