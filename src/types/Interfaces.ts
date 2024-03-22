import type { FormModeEnum } from "./Enums";

export interface IAppStore {
  isOpenDialog: boolean,
  dialogMode: null | FormModeEnum,
}

export interface IAuthData {
  userName?: string 
  email: string 
  password: string 
}

export interface IAuthStore {
  user: IAuthData,
  isLogined: boolean,
}