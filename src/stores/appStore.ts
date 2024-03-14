import type { IAppStore } from '@/types/Interfaces';
import { defineStore } from 'pinia';


export const useAppStore = defineStore('appStore', {
  state: (): IAppStore => ({
    isOpenDialog: false,
  }),
  getters: {

  },
  actions: {
    toggleDialog() {
      this.isOpenDialog = !this.isOpenDialog
    },
  },
})