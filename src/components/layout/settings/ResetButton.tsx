type Props = {
  onClick: () => void
}

export default function ResetButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="mt-auto w-full py-2 px-4 border border-[--color-border] text-[--color-text] rounded hover:bg-[--color-button-hover] hover:text-white transition"
    >
      Reset App
    </button>
  )
}
