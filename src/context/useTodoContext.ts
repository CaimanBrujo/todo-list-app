import { createContext, useContext } from 'react'
import type { Dispatch } from 'react'
import type { Project, TodoAction } from '../types/Todo'

export type TodoContextType = {
  state: Project[]
  dispatch: Dispatch<TodoAction>
}

export const TodoContext = createContext<TodoContextType | undefined>(undefined)

export function useTodoContext() {
  const context = useContext(TodoContext)
  if (!context) {
    throw new Error('useTodoContext must be used within TodoProvider')
  }
  return context
}
