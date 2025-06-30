import { FolderPlus } from 'lucide-react'

type Props = {
  onClick: () => void
}

export default function AddProjectButton({ onClick }: Props) {
  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={onClick}
        aria-label="Add new project"
        className="w-10 h-10 rounded-full bg-[--color-background] border border-[--color-border] text-text hover-bg-muted transition-colors shadow-lg flex items-center justify-center"
      >
        <FolderPlus className="w-6 h-6" />
      </button>
    </div>
  )
}
