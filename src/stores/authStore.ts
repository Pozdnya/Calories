import type { IAuthStore, ILoginUser } from '@/types/Interfaces';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('authStore', {
  state: (): IAuthStore => ({
    user: {
      email: null,
      password: null,
      isLogined: false
    },
  }),
  actions: {
    loginUser(user: ILoginUser) {
      this.user = user
    }
  },
  getters: {
    isLoginedUser(state) {
      return state.user.isLogined
    }
  }
})