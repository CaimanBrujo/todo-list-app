import type { Todo } from '../../types/Todo'
import { CalendarDays, CheckCircle2, Circle } from 'lucide-react'
import clsx from 'clsx'

type Props = {
  todo: Todo
}

export default function TodoItem({ todo }: Props) {
  const leftBorderColor = clsx({
    'border-l-4 border-l-green-500': todo.priority === 'low',
    'border-l-4 border-l-yellow-500': todo.priority === 'medium',
    'border-l-4 border-l-red-500': todo.priority === 'high'
  })

  return (
    <li
      className={clsx(
        'border border-[--color-border] rounded p-4 space-y-2',
        leftBorderColor
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

      {todo.dueDate && (
        <div className="flex items-center gap-2 text-sm text-muted">
          <CalendarDays className="w-4 h-4 text-text" />
          <span>{todo.dueDate}</span>
        </div>
      )}
    </li>
  )
}
