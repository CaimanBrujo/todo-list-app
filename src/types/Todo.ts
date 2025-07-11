export type Priority = 'low' | 'medium' | 'high'

export type Todo = {
  id: string
  title: string
  description: string
  dueDate: string
  priority: Priority
  completed: boolean
}

export type Project = {
  id: string
  name: string
  todos: Todo[]
}

export type TodoAction =
  | {
      type: 'ADD_TODO'
      payload: { projectId: string; todo: Omit<Todo, 'id' | 'completed'> }
    }
  | { type: 'TOGGLE_TODO'; payload: { projectId: string; todoId: string } }
  | { type: 'DELETE_TODO'; payload: { projectId: string; todoId: string } }
  | {
      type: 'ADD_PROJECT'
      payload: { id: string; name: string; todos: Todo[] }
    }
  | { type: 'DELETE_PROJECT'; payload: { projectId: string } }
  | { type: 'RESET_ALL' }
  | { type: 'EDIT_PROJECT'; payload: { projectId: string; name: string } }
  | { type: 'SET_TODOS'; payload: { projectId: string; todos: Todo[] } }
