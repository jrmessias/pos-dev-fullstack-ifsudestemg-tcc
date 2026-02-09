import { create } from 'zustand'

export const userStore = create((set) => ({
    user: null,
    setUser: (userData) => set({ user: userData }),
}))
