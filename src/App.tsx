import Header from './components/ui/Header'
import Footer from './components/ui/Footer'
import ProjectsSidebar from './components/ui/ProjectsSidebar'
import TodoList from './components/ui/TodoList'

export default function App() {
  return (
    <div className="min-h-screen h-full flex flex-col bg-background text-text">
      <Header />
      <main className="h-full flex flex-1 relative">
        <ProjectsSidebar />
        <div className="flex-1 p-6 pl-10 md:pl-6">
          <h1 className="text-2xl font-bold mb-4">Your Tasks</h1>
          <TodoList projectId="default" />
        </div>
      </main>
      <Footer />
    </div>
  )
}
