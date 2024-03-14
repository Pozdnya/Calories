import { FormModeEnum } from '@/types/Enums';
import type { IAppStore } from '@/types/Interfaces';
import { defineStore } from 'pinia';


export const useAppStore = defineStore('appStore', {
  state: (): IAppStore => ({
    isOpenDialog: false,
    dialogMode: null,
  }),
  getters: {
    getFormMode(state) {
      return state.dialogMode
    }
  },
  actions: {
    toggleDialog(mode?: FormModeEnum) {
      this.isOpenDialog = !this.isOpenDialog;
      if (mode) {
        this.dialogMode = mode;
      }
    },
  },
})