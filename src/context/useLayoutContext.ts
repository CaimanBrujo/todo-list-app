import { createContext, useContext } from 'react'

export type LayoutContextType = {
  isSidebarOpen: boolean
  openSidebar: () => void
  closeSidebar: () => void
  toggleSidebar: () => void
  isMobile: boolean
}

export const LayoutContext = createContext<LayoutContextType | undefined>(
  undefined
)

export function useLayoutContext() {
  const context = useContext(LayoutContext)
  if (!context) {
    throw new Error('useLayoutContext must be used within LayoutProvider')
  }
  return context
}
