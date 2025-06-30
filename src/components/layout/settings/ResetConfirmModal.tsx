type Props = {
  open: boolean
  onClose: () => void
  onConfirm: () => void
}

export default function ResetConfirmModal({ open, onClose, onConfirm }: Props) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
      <div className="bg-background text-text p-6 rounded border border-border shadow-lg w-[90%] max-w-md space-y-4">
        <h2 className="text-xl font-semibold">Reset Application</h2>
        <p className="text-sm leading-relaxed text-muted">
          This app stores your data locally in your browser. Resetting will
          permanently delete all your added projects and todos, and return the
          app to its default state.
        </p>
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-muted hover:bg-border text-background rounded"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirm()
              onClose()
            }}
            className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded"
          >
            Confirm Reset
          </button>
        </div>
      </div>
    </div>
  )
}
