import React, { useState } from 'react'
import { useTodoContext } from '../../context/useTodoContext'
import { v4 as uuidv4 } from 'uuid'

type Props = {
  open: boolean
  onClose: () => void
}

export default function AddProjectModal({ open, onClose }: Props) {
  const { dispatch } = useTodoContext()
  const [name, setName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      dispatch({
        type: 'ADD_PROJECT',
        payload: {
          id: uuidv4(),
          name: name.trim(),
          todos: []
        }
      })
      setName('')
      onClose()
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-background text-text p-5 rounded shadow-lg w-[90%] max-w-sm space-y-4 border border-border"
      >
        <h2 className="text-xl font-semibold">Add New Project</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Project name"
          className="w-full px-3 py-2 border border-border rounded bg-transparent text-text outline-none"
          autoFocus
        />
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-muted hover:bg-border text-background rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-accent text-white hover:bg-accent-soft rounded"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  )
}
