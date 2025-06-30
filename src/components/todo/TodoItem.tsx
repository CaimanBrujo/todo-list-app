import type { Todo } from '../../types/Todo'
import { CalendarDays, CheckCircle2, Circle } from 'lucide-react'
import { useTodoContext } from '../../context/useTodoContext'
import clsx from 'clsx'

type Props = {
  todo: Todo
}

export default function TodoItem({ todo }: Props) {
  const { dispatch, state } = useTodoContext()

  const borderColor = clsx({
    'border-l-4 border-l-green-500': todo.priority === 'low',
    'border-l-4 border-l-yellow-500': todo.priority === 'medium',
    'border-l-4 border-l-red-500': todo.priority === 'high'
  })

  const iconColor = clsx({
    'text-green-500': todo.priority === 'low',
    'text-yellow-500': todo.priority === 'medium',
    'text-red-500': todo.priority === 'high'
  })

  const bgCompleted = todo.completed ? 'bg-[--color-muted]/10' : ''

  const projectId = state.find((project) =>
    project.todos.some((t) => t.id === todo.id)
  )?.id

  const handleToggle = () => {
    if (!projectId) return
    dispatch({
      type: 'TOGGLE_TODO',
      payload: {
        projectId,
        todoId: todo.id
      }
    })
  }

  let dueText = ''
  if (todo.dueDate) {
    const now = new Date()
    const due = new Date(todo.dueDate + 'T00:00:00')
    const diff = Math.floor(
      (due.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
    )

    if (diff < 0) {
      dueText = 'Overdue'
    } else if (diff === 0) {
      dueText = 'Due today'
    } else {
      dueText = `Due in ${diff} day${diff === 1 ? '' : 's'}`
    }
  }

  return (
    <li
      className={clsx(
        'border border-[--color-border] rounded p-4 space-y-2',
        borderColor,
        bgCompleted
      )}
    >
      <div className="flex justify-between items-center">
        <h3
          className={clsx(
            'font-semibold',
            todo.completed && 'line-through text-muted'
          )}
        >
          {todo.title}
        </h3>
        <button onClick={handleToggle}>
          {todo.completed ? (
            <CheckCircle2 className={clsx('w-7 h-7', iconColor)} />
          ) : (
            <Circle className={clsx('w-7 h-7', iconColor)} />
          )}
        </button>
      </div>

      {!todo.completed && (
        <>
          <p className="text-sm text-muted">{todo.description}</p>

          {todo.dueDate && (
            <div className="flex items-center gap-2 text-sm text-muted">
              <CalendarDays className="w-4 h-4 text-muted" />
              <span>{dueText}</span>
            </div>
          )}
        </>
      )}
    </li>
  )
}
