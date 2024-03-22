import type { IAuthStore, IAuthData } from '@/types/Interfaces';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('authStore', {
  state: (): IAuthStore => ({
    user: {
      userName: '',
      email: '',
      password: '',
    },
    isLogined: false
  }),
  actions: {
    loginUser(user: IAuthData, isLogined: boolean) {
      this.user = user;
      this.isLogined = isLogined;
    }
  },
  getters: {
    isLoginedUser(state) {
      return state.isLogined
    }
  }
})