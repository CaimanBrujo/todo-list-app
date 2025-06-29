import { useReducer, useEffect, useState } from 'react'
import { todoReducer } from '../reducers/todoReducer'
import { TodoContext } from './useTodoContext'
import type { Project } from '../types/Todo'
import type { ReactNode } from 'react'
import { initialData } from '../data/initialData'

const STORAGE_KEY = 'todoAppState'

function loadInitialState(): Project[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : initialData
  } catch {
    return initialData
  }
}

export function TodoProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(todoReducer, [], loadInitialState)
  const [selectedProjectId, setSelectedProjectId] = useState<string>(
    loadInitialState()[0]?.id || ''
  )

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  return (
    <TodoContext.Provider
      value={{ state, dispatch, selectedProjectId, setSelectedProjectId }}
    >
      {children}
    </TodoContext.Provider>
  )
}
