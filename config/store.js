import create from 'zustand'
import { devtools } from 'zustand/middleware'

export const useStore = create(
  devtools((set, get) => ({
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
    // Related to hospital data
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
      set((state) => ({ setRecentBooking: params.recentBooking }))
    },
  }))
)
