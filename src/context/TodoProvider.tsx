import { useReducer } from 'react'
import { todoReducer } from '../reducers/todoReducer'
import { TodoContext } from './useTodoContext'
import type { Project } from '../types/Todo'
import type { ReactNode } from 'react'
import { v4 as uuidv4 } from 'uuid'

const initialState: Project[] = [
  {
    id: 'default',
    name: 'Default Project',
    todos: [
      {
        id: uuidv4(),
        title: 'Test Todo',
        description: 'This is just a test task!',
        dueDate: new Date().toISOString().split('T')[0],
        priority: 'medium',
        completed: false
      }
    ]
  }
]

export function TodoProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(todoReducer, initialState)

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  )
}
