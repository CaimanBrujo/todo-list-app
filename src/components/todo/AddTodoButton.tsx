import { CopyPlus } from 'lucide-react'

type Props = {
  onClick: () => void
}

export default function AddTodoButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="mx-auto mt-6 flex items-center gap-2 text-accent hover:text-[color:var(--color-accent-soft)] transition-colors duration-150"
    >
      <CopyPlus className="w-10 h-10" />
    </button>
  )
}
