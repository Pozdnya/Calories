import type { IAuthStore, IAuthData } from '@/types/Interfaces';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('authStore', {
  state: (): IAuthStore => ({
    user: {
      userName: null,
      email: null,
      password: null,
    },
    isLogined: false
  }),
  actions: {
    loginUser(user: IAuthData) {
      this.user = user
    }
  },
  getters: {
    isLoginedUser(state) {
      return state.isLogined
    }
  }
})