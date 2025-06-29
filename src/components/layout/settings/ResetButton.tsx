import { useTodoContext } from '../../../context/useTodoContext'

export default function ResetButton() {
  const { dispatch } = useTodoContext()

  const handleReset = () => {
    localStorage.clear()
    document.documentElement.classList.remove('light')
    dispatch({ type: 'RESET_ALL' })
  }

  return (
    <button
      onClick={handleReset}
      className="mt-auto w-full py-2 px-4 border border-[--color-border] text-[--color-text] rounded hover:bg-[--color-button-hover] hover:text-white transition"
    >
      Reset App
    </button>
  )
}
