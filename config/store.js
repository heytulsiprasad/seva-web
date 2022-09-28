import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export const useStore = create(
  devtools((set, get) => ({
    // Hospital store
    currentHospital: {},
    allHospitals: {},
    setCurrentHospital: (params) => {
      console.log(params.currentHospital)
      set((state) => ({ currentHospital: params.currentHospital }))
    },
    setAllHospitals: (params) => {
      set((state) => ({ allHospitals: params.allHospitals }))
    },

    // User store
    currentUser: null,
    userBookings: [],
    setCurrentUser: (params) => {
      set((state) => ({
        currentUser: params.currentUser,
      }))
    },
    setUserBookings: (params) => {
      set((state) => [...state.userBookings, params.userBookings])
    },
    clearCurrentUser: () => {
      set((state) => ({ currentUser: {} }))
    },

    // Slot booking
    slotBooking: null,
    setSlotBooking: (params) => {
      set((state) => ({ slotBooking: params.slotBooking }))
    },
  }))
)
