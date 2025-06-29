import type { Todo } from '../../types/Todo'
import { CalendarDays, Flag, CheckCircle2, Circle } from 'lucide-react'
import clsx from 'clsx'

type Props = {
  todo: Todo
}

export default function TodoItem({ todo }: Props) {
  const borderColor = clsx({
    'border-l-4 border-green-500': todo.priority === 'low',
    'border-l-4 border-yellow-500': todo.priority === 'medium',
    'border-l-4 border-red-500': todo.priority === 'high'
  })

  return (
    <li
      className={clsx(
        'border border-border rounded p-4 space-y-2',
        borderColor
      )}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">{todo.title}</h3>
        {todo.completed ? (
          <CheckCircle2 className="w-4 h-4 text-green-500" />
        ) : (
          <Circle className="w-4 h-4 text-yellow-500" />
        )}
      </div>

      <p className="text-sm text-muted">{todo.description}</p>

      <div className="flex items-center gap-2 text-sm text-muted">
        <CalendarDays className="w-4 h-4" />
        <span>{todo.dueDate}</span>
      </div>

      <div className="flex items-center gap-2 text-sm text-muted">
        <Flag className="w-4 h-4" />
        <span className="capitalize">{todo.priority}</span>
      </div>
    </li>
  )
}
