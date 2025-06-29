import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Sidebar from './components/layout/sidebar/Sidebar'
import TodoList from './components/todo/TodoList'

export default function App() {
  return (
    <div className="min-h-screen h-full flex flex-col bg-background text-text">
      <Header />
      <main className="h-full flex flex-1 relative">
        <Sidebar />
        <div className="flex-1 p-6 pl-10 md:pl-6">
          <h1 className="text-2xl font-bold mb-4">Your Tasks</h1>
          <TodoList projectId="default" />
        </div>
      </main>
      <Footer />
    </div>
  )
}
