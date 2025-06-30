import type { Project } from '../types/Todo'
import { v4 as uuidv4 } from 'uuid'

const today = new Date()
const getISODate = (offsetDays: number) => {
  const date = new Date(today)
  date.setDate(today.getDate() + offsetDays)
  return date.toISOString().split('T')[0]
}

export const initialData: Project[] = [
  {
    id: uuidv4(),
    name: 'Work',
    todos: [
      {
        id: uuidv4(),
        title: 'Finish project brief',
        description: 'Complete the document and send it to the client',
        dueDate: getISODate(1),
        priority: 'high',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Update Trello board',
        description: 'Organize tasks by priority',
        dueDate: getISODate(2),
        priority: 'medium',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Reply to emails',
        description: 'Respond to inquiries from the design team',
        dueDate: getISODate(0),
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
        dueDate: getISODate(1),
        priority: 'medium',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Call my friend Ivan Z',
        description: 'Check in and catch up',
        dueDate: getISODate(1),
        priority: 'low',
        completed: true
      },
      {
        id: uuidv4(),
        title: 'Read book',
        description: 'Finish chapter 6 of Atomic Habits',
        dueDate: getISODate(3),
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
        dueDate: getISODate(2),
        priority: 'high',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Stretching routine',
        description: '10 minutes of yoga and stretches',
        dueDate: getISODate(3),
        priority: 'medium',
        completed: true
      },
      {
        id: uuidv4(),
        title: 'Track calories',
        description: 'Log meals into the app',
        dueDate: getISODate(1),
        priority: 'low',
        completed: false
      }
    ]
  }
]
