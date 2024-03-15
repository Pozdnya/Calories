import type { FormModeEnum } from "./Enums";

export interface IAppStore {
  isOpenDialog: boolean,
  dialogMode: null | FormModeEnum,
}

export interface IAuthData {
  userName?: string | null,
  email: string | null,
  password: string | null,
}

export interface IAuthStore {
  user: IAuthData,
  isLogined: boolean,
}