export interface IAppStore {
  isOpenDialog: boolean
  
}

export interface ILoginUser {
  email: string,
  password: string,
  isLogined: boolean,
}

export interface IAuthStore {
  user: {
    email: null | string,
    password: null | string,
    isLogined: boolean,
  },
}