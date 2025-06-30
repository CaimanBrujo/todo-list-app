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
        className="mx-auto mt-6 flex items-center gap-2 text-accent hover:text-[color:var(--color-accent-soft)] transition-colors duration-150"
      >
        <FolderPlus className="w-10 h-10" />
      </button>
    </div>
  )
}
