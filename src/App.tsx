import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Sidebar from './components/layout/sidebar/Sidebar'
import TodoList from './components/todo/TodoList'
import { useTodoContext } from './context/useTodoContext'

export default function App() {
  const { selectedProjectId } = useTodoContext()

  return (
    <div className="min-h-screen flex flex-col bg-background text-text">
      <Header />
      <main className="flex-1 relative justify-center flex">
        <div className="flex w-full max-w-[1200px] border-[--color-border]">
          <Sidebar />
          <div className="flex-1 p-6 pl-10 md:pl-6">
            <TodoList projectId={selectedProjectId} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
