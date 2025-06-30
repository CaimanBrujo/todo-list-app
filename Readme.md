# Todo List App

A clean and responsive task manager built with **React**, **TypeScript**, and **Tailwind CSS v4**. The app supports multiple projects, each containing a list of todos with full create/edit/delete functionality. State is managed with `useReducer` and persisted in `localStorage`.

## Live Preview

https://todo-list-app-ten-nu.vercel.app/

## Features

- Create and delete projects
- Add todos with title, description, due date, and priority
- Edit and delete todos inside a modal interface
- One-todo-at-a-time inline editing experience
- Global state management via `useReducer` and Context API
- Automatic localStorage persistence
- Fully responsive dark-mode UI with Tailwind CSS v4

## Stack

- React 19
- TypeScript 5.8
- Vite 6
- Tailwind CSS v4
- ESLint 9
- Prettier 3
- uuid
- clsx

## Additional Libraries

### `uuid`

Used to generate unique IDs for projects and todos.

```ts
import { v4 as uuidv4 } from 'uuid'

const newTodo = {
  id: uuidv4(),
  title: 'Example Task',
  ...
}
```

### `clsx`

Utility for conditionally joining classNames.

```tsx
import clsx from 'clsx'

const buttonClass = clsx(
  'text-sm',
  isActive && 'text-accent',
  isDisabled && 'opacity-50 cursor-not-allowed'
)
```

## Project Structure

```
todo-list-app/
├── public/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   └── settings/
│   │   │   │   ├── ResetButton.tsx
│   │   │   │   ├── ResetConfirmModal.tsx
│   │   │   │   ├── SettingsMenu.tsx
│   │   │   │   └── ThemeToggle.tsx
│   │   │   └── sidebar/
│   │   │       ├── Sidebar.tsx
│   │   │       └── SidebarToggleButton.tsx
│   │   └── todo/
│   │       ├── AddProjectButton.tsx
│   │       ├── AddProjectModal.tsx
│   │       ├── AddTodoButton.tsx
│   │       ├── EditProjectModal.tsx
│   │       ├── NewTodoForm.tsx
│   │       ├── ProjectsPanel.tsx
│   │       ├── TodoFormFields.tsx
│   │       ├── TodoItem.tsx
│   │       └── TodoList.tsx
│   ├── context/
│   │   ├── LayoutProvider.tsx
│   │   ├── TodoProvider.tsx
│   │   ├── useLayoutContext.ts
│   │   └── useTodoContext.ts
│   ├── data/
│   │   └── initialData.ts
│   ├── reducers/
│   │   └── todoReducer.ts
│   ├── types/
│   │   └── Todo.ts
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── .prettierrc
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

## Setup

```bash
git clone https://github.com/CaimanBrujo/todo-list-app.git
cd todo-list-app
npm install
```

## Scripts

```bash
npm run dev       # Start development server
npm run lint      # Run ESLint
npm run format    # Format with Prettier
npm run build     # Build for production
npm run preview   # Preview production build
```
