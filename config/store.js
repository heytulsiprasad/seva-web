import create from 'zustand'
import { devtools } from 'zustand/middleware'

export const useAuth = create(
  devtools((set, get) => ({
    currentUser: null,
    setCurrentUser: (params) => {
      set((state) => ({
        currentUser: params.currentUser,
      }))
    },
  }))
)
