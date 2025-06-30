type Priority = 'low' | 'medium' | 'high'

interface Props {
  title: string
  description: string
  dueDate: string
  priority: Priority
  onChange: (field: string, value: string) => void
}

export default function TodoFormFields({
  title,
  description,
  dueDate,
  priority,
  onChange
}: Props) {
  return (
    <div className="space-y-3">
      <input
        type="text"
        placeholder="Title"
        className="w-full bg-transparent border border-border px-3 py-2 rounded text-sm"
        value={title}
        onChange={(e) => onChange('title', e.target.value)}
      />

      <textarea
        placeholder="Description"
        className="w-full bg-transparent border border-border px-3 py-2 rounded text-sm resize-none"
        rows={3}
        value={description}
        onChange={(e) => onChange('description', e.target.value)}
      />

      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="date"
          className="text-[--color-text] w-full sm:w-1/2 bg-transparent border border-border px-3 py-2 rounded text-sm"
          value={dueDate}
          onChange={(e) => onChange('dueDate', e.target.value)}
        />

        <select
          className="w-full sm:w-1/2 bg-transparent border border-border px-3 py-2 rounded text-sm"
          value={priority}
          onChange={(e) => onChange('priority', e.target.value)}
        >
          <option value="low">Low priority</option>
          <option value="medium">Medium priority</option>
          <option value="high">High priority</option>
        </select>
      </div>
    </div>
  )
}
