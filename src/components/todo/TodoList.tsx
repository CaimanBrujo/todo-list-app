import { useState } from 'react'
import { useTodoContext } from '../../context/useTodoContext'
import TodoItem from './TodoItem'
import AddTodoButton from './AddTodoButton'
import NewTodoForm from './NewTodoForm'

type Props = {
  projectId: string
}

export default function TodoList({ projectId }: Props) {
  const { state } = useTodoContext()
  const project = state.find((p) => p.id === projectId)
  const [isAddingTodo, setIsAddingTodo] = useState(false)

  if (!project) {
    return <p className="text-muted text-sm">Project not found.</p>
  }

  return (
    <div className="space-y-4">
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
    </div>
  )
}
