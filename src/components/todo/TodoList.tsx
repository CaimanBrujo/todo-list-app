import { useTodoContext } from '../../context/useTodoContext'
import TodoItem from './TodoItem'

type Props = {
  projectId: string
}

export default function TodoList({ projectId }: Props) {
  const { state } = useTodoContext()
  const project = state.find((p) => p.id === projectId)

  if (!project) {
    return <p className="text-muted text-sm">Project not found.</p>
  }

  if (project.todos.length === 0) {
    return <p className="text-muted text-sm">No todos yet.</p>
  }

  return (
    <ul className="space-y-4">
      {project.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}
