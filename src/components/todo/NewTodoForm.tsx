import { useState, useEffect } from 'react'
import { useTodoContext } from '../../context/useTodoContext'
import { Plus, X } from 'lucide-react'

type Props = {
  projectId: string
  onConfirm: () => void
  onCancel: () => void
}

type Priority = 'low' | 'medium' | 'high'

export default function NewTodoForm({ projectId, onConfirm, onCancel }: Props) {
  const { dispatch } = useTodoContext()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [priority, setPriority] = useState<Priority>('medium')
  const [showError, setShowError] = useState(false)

  useEffect(() => {
    if (showError) {
      const timer = setTimeout(() => setShowError(false), 2500)
      return () => clearTimeout(timer)
    }
  }, [showError])

  const handleSubmit = () => {
    if (!title.trim()) {
      setShowError(true)
      return
    }

    dispatch({
      type: 'ADD_TODO',
      payload: {
        projectId,
        todo: {
          title: title.trim(),
          description: description.trim(),
          dueDate,
          priority
        }
      }
    })

    onConfirm()
  }

  return (
    <div className="relative border border-dashed border-accent-muted p-4 rounded-xl space-y-3">
      {showError && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-accent-muted text-background text-sm px-4 py-2 rounded shadow-md">
          Title is required
        </div>
      )}

      <input
        type="text"
        placeholder="Title"
        className="w-full bg-transparent border border-border px-3 py-2 rounded text-sm"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Description"
        className="w-full bg-transparent border border-border px-3 py-2 rounded text-sm resize-none"
        rows={3}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="date"
          className="text-[--color-text] w-full sm:w-1/2 bg-transparent border border-border px-3 py-2 rounded text-sm"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        <select
          className="w-full sm:w-1/2 bg-transparent border border-border px-3 py-2 rounded text-sm"
          value={priority}
          onChange={(e) => setPriority(e.target.value as Priority)}
        >
          <option value="low">Low priority</option>
          <option value="medium">Medium priority</option>
          <option value="high">High priority</option>
        </select>
      </div>

      <div className="flex justify-end gap-2">
        <button
          onClick={onCancel}
          className="text-sm px-3 py-1 rounded border border-border text-muted hover:text-text"
        >
          <X className="w-4 h-4 inline" /> Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="text-sm px-3 py-1 rounded bg-accent-muted text-text hover:bg-accent-soft"
        >
          <Plus className="w-4 h-4 inline" /> Add
        </button>
      </div>
    </div>
  )
}
