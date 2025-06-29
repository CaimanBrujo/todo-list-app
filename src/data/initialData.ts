import type { Project } from '../types/Todo'
import { v4 as uuidv4 } from 'uuid'

export const initialData: Project[] = [
  {
    id: uuidv4(),
    name: 'Work',
    todos: [
      {
        id: uuidv4(),
        title: 'Finish project brief',
        description: 'Complete the document and send it to the client',
        dueDate: '2025-07-01',
        priority: 'high',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Update Trello board',
        description: 'Organize tasks by priority',
        dueDate: '2025-07-02',
        priority: 'medium',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Reply to emails',
        description: 'Respond to inquiries from the design team',
        dueDate: '2025-06-30',
        priority: 'low',
        completed: true
      }
    ]
  },
  {
    id: uuidv4(),
    name: 'Personal',
    todos: [
      {
        id: uuidv4(),
        title: 'Grocery shopping',
        description: 'Buy fruits, vegetables, and coffee',
        dueDate: '2025-06-29',
        priority: 'medium',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Call mom',
        description: 'Check in and catch up',
        dueDate: '2025-06-30',
        priority: 'low',
        completed: true
      },
      {
        id: uuidv4(),
        title: 'Read book',
        description: 'Finish chapter 6 of Atomic Habits',
        dueDate: '2025-07-03',
        priority: 'low',
        completed: false
      }
    ]
  },
  {
    id: uuidv4(),
    name: 'Fitness',
    todos: [
      {
        id: uuidv4(),
        title: 'Morning run',
        description: '5km around the park',
        dueDate: '2025-06-29',
        priority: 'high',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Stretching routine',
        description: '10 minutes of yoga and stretches',
        dueDate: '2025-06-29',
        priority: 'medium',
        completed: true
      },
      {
        id: uuidv4(),
        title: 'Track calories',
        description: 'Log meals into the app',
        dueDate: '2025-06-29',
        priority: 'low',
        completed: false
      }
    ]
  }
]
