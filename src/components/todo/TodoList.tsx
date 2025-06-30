import { useState } from 'react'
import { useTodoContext } from '../../context/useTodoContext'
import TodoItem from './TodoItem'
import AddTodoButton from './AddTodoButton'
import NewTodoForm from './NewTodoForm'
import EditProjectModal from './EditProjectModel'
import { FilePenLine } from 'lucide-react'

type Props = {
  projectId: string
}

export default function TodoList({ projectId }: Props) {
  const { state } = useTodoContext()
  const project = state.find((p) => p.id === projectId)
  const [isAddingTodo, setIsAddingTodo] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)

  if (!project) {
    return <p className="text-muted text-sm">Project not found.</p>
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">{project.name}</h1>
        <button
          onClick={() => setShowEditModal(true)}
          className="text-muted hover:text-accent"
          aria-label="Edit project"
        >
          <FilePenLine className="w-7 h-7" />
        </button>
      </div>

      <ul className="space-y-4">
        {project.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>

      {isAddingTodo ? (
        <NewTodoForm
          projectId={project.id}
          onConfirm={() => setIsAddingTodo(false)}
          onCancel={() => setIsAddingTodo(false)}
        />
      ) : (
        <AddTodoButton onClick={() => setIsAddingTodo(true)} />
      )}

      {showEditModal && (
        <EditProjectModal
          project={project}
          onClose={() => setShowEditModal(false)}
        />
      )}
    </div>
  )
}
