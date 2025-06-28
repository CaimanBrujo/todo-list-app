import Header from './components/Header'
import Footer from './components/Footer'
import { useTodoContext } from './context/useTodoContext'
import { CalendarDays, Flag, CheckCircle2, Circle } from 'lucide-react'

export default function App() {
  const { state } = useTodoContext()

  return (
    <div className="min-h-screen flex flex-col bg-background text-text">
      <Header />

      <main className="flex-1 flex flex-col items-center gap-6 p-6">
        <h1 className="text-3xl font-bold">Projects</h1>

        {state.map((project) => (
          <div
            key={project.id}
            className="w-full max-w-xl border border-border bg-card rounded p-6 shadow space-y-4"
          >
            <h2 className="text-xl font-semibold">{project.name}</h2>

            {project.todos.length === 0 ? (
              <p className="text-muted text-sm">No todos yet.</p>
            ) : (
              <ul className="space-y-3">
                {project.todos.map((todo) => (
                  <li
                    key={todo.id}
                    className="border border-border rounded p-4 space-y-1"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">{todo.title}</h3>
                      {todo.completed ? (
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                      ) : (
                        <Circle className="w-4 h-4 text-yellow-500" />
                      )}
                    </div>

                    <p className="text-sm text-muted">{todo.description}</p>

                    <div className="flex items-center gap-2 text-sm text-muted">
                      <CalendarDays className="w-4 h-4" />
                      <span>{todo.dueDate}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted">
                      <Flag className="w-4 h-4" />
                      <span className="capitalize">{todo.priority}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </main>

      <Footer />
    </div>
  )
}
