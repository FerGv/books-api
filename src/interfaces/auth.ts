export interface IChangePassword {
  newPassword: string;
  oldPassword: string;
  username: string;
}

export interface ILogin {
  password: string;
  username: string;
}

export interface IResetPassword {
  newPassword: string;
  username: string;
}

export interface IRecoverPassword {
  username: string;
}
