import create from 'zustand'
import { devtools } from 'zustand/middleware'

export const useStore = create(
  devtools((set, get) => ({
    // User store
    currentUser: null,
    isAuthenticated: false,
    setCurrentUser: (params) => {
      set((state) => ({
        currentUser: params.currentUser,
        isAuthenticated: params.isAuthenticated,
      }))
    },
    clearCurrentUser: () => {
      set((state) => ({
        currentUser: {},
        isAuthenticated: false,
      }))
    },

    // Hospital store
    selectedHospital: null,
    hospitalData: {},
    setSelectedHospital: (params) => {
      set((state) => ({ selectedHospital: params.selectedHospital }))
    },
    setHospitalData: (params) => {
      set((state) => ({ hospitalData: params.hospitalData }))
    },

    // Recent ticket data
    recentBooking: {},
    setRecentBooking: (params) => {
      set((state) => ({ recentBooking: params.recentBooking }))
    },
  }))
)
