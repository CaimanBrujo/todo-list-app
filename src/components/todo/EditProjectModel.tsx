import { useState } from 'react'
import { Trash2 } from 'lucide-react'
import type { Todo, Project } from '../../types/Todo'
import { useTodoContext } from '../../context/useTodoContext'
import TodoFormFields from './TodoFormFields'

interface Props {
  project: Project
  onClose: () => void
}

export default function EditProjectModal({ project, onClose }: Props) {
  const { dispatch } = useTodoContext()

  const [name, setName] = useState(project.name)
  const [todos, setTodos] = useState<Todo[]>(project.todos)
  const [editingTodoId, setEditingTodoId] = useState<string | null>(null)

  const handleTodoChange = (id: string, field: string, value: string) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, [field]: value } : todo))
    )
  }

  const handleDeleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const handleAccept = () => {
    dispatch({ type: 'EDIT_PROJECT', payload: { projectId: project.id, name } })
    dispatch({ type: 'SET_TODOS', payload: { projectId: project.id, todos } })
    onClose()
  }

  const handleDeleteProject = () => {
    dispatch({ type: 'DELETE_PROJECT', payload: { projectId: project.id } })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
      <div className="bg-background text-text p-6 rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto border border-border space-y-4">
        <h2 className="text-xl font-semibold">Edit Project</h2>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-transparent border border-border px-3 py-2 rounded text-sm text-text"
        />

        <div className="space-y-3">
          {todos.map((todo) =>
            editingTodoId === todo.id ? (
              <div
                key={todo.id}
                className="space-y-2 bg-muted/20 p-2 rounded text-text"
              >
                <TodoFormFields
                  title={todo.title}
                  description={todo.description}
                  dueDate={todo.dueDate}
                  priority={todo.priority}
                  onChange={(field, value) =>
                    handleTodoChange(todo.id, field, value)
                  }
                />
                <div className="flex justify-between text-sm">
                  <button
                    onClick={() => setEditingTodoId(null)}
                    className="text-muted hover:underline"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setEditingTodoId(null)}
                    className="text-accent hover:underline"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <div
                key={todo.id}
                className="flex items-center justify-between px-3 py-2 rounded cursor-pointer hover-bg-muted bg-muted/20 text-text"
                onClick={() => setEditingTodoId(todo.id)}
              >
                <span className="truncate text-sm">{todo.title}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleDeleteTodo(todo.id)
                  }}
                  className="text-muted hover:text-red-500"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            )
          )}
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-border">
          <button
            onClick={handleDeleteProject}
            className="text-sm text-red-500 hover:underline"
          >
            Delete project
          </button>
          <div className="flex gap-3">
            <button onClick={onClose} className="btn-muted">
              Cancel
            </button>
            <button onClick={handleAccept} className="btn-accent">
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
