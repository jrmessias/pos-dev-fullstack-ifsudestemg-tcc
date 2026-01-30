import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const userStore = create(
    persist(
        (set) => ({
            user: null, // Estado inicial

            // Função simples para definir ou atualizar o usuário
            setUser: (userData) => set({ user: userData }),
        }),
        {
            name: 'user-storage', // Nome da chave que aparecerá no localStorage
            storage: createJSONStorage(() => localStorage), // Define onde salvar
        }
    )
)
