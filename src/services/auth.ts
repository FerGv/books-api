// Libraries
import jwt from 'jsonwebtoken';

// Config
import config from '@/config';

// Interfaces
import { IChangePassword, ILogin, IRecoverPassword, IResetPassword, IUser } from '@/interfaces';

// Models
import { User } from '@/models';

export const changePassword = async ({ newPassword, oldPassword, username }: IChangePassword) => {};

export const login = async ({ password, username }: ILogin) => {
  const user = await User.findOne({ where: { password, username } });

  if (!user) return null;

  const token = jwt.sign({ username }, config.jwt.SECRET, { expiresIn: config.jwt.EXPIRES_IN });

  return { token };
};

export const recoverPassword = async ({ username }: IRecoverPassword) => {};

export const register = async ({ email, password, username }: IUser) => {
  const user = await User.create({ email, password, username });

  return user;
};

export const resetPassword = async ({ newPassword, username }: IResetPassword) => {};
