import type { Project, TodoAction } from '../types/Todo'
import { v4 as uuidv4 } from 'uuid'
import { initialData } from '../data/initialData'

export const todoReducer = (
  state: Project[],
  action: TodoAction
): Project[] => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return [...state, { id: uuidv4(), name: action.payload.name, todos: [] }]

    case 'DELETE_PROJECT':
      return state.filter((p) => p.id !== action.payload.projectId)

    case 'ADD_TODO':
      return state.map((p) =>
        p.id === action.payload.projectId
          ? {
              ...p,
              todos: [
                ...p.todos,
                {
                  id: uuidv4(),
                  ...action.payload.todo,
                  completed: false
                }
              ]
            }
          : p
      )

    case 'TOGGLE_TODO':
      return state.map((p) =>
        p.id === action.payload.projectId
          ? {
              ...p,
              todos: p.todos.map((todo) =>
                todo.id === action.payload.todoId
                  ? { ...todo, completed: !todo.completed }
                  : todo
              )
            }
          : p
      )

    case 'DELETE_TODO':
      return state.map((p) =>
        p.id === action.payload.projectId
          ? {
              ...p,
              todos: p.todos.filter((todo) => todo.id !== action.payload.todoId)
            }
          : p
      )

    case 'RESET_ALL':
      return [...initialData]

    case 'EDIT_PROJECT':
      return state.map((p) =>
        p.id === action.payload.projectId
          ? { ...p, name: action.payload.name }
          : p
      )

    case 'SET_TODOS':
      return state.map((p) =>
        p.id === action.payload.projectId
          ? { ...p, todos: action.payload.todos }
          : p
      )

    default:
      return state
  }
}
