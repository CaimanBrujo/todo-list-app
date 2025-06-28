import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { TodoProvider } from './context/TodoProvider'
import { LayoutProvider } from './context/LayoutProvider'

document.documentElement.classList.add('dark')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LayoutProvider>
      <TodoProvider>
        <App />
      </TodoProvider>
    </LayoutProvider>
  </StrictMode>
)
