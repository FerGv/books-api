// Node
import crypto from 'node:crypto';

// Libraries
import jwt from 'jsonwebtoken';

// Config
import config from '@/config';

// Interfaces
import { IChangePassword, ILogin, IRecoverPassword, IResetPassword, IUser } from '@/interfaces';

// Models
import { User } from '@/models';

// Utils
import { hashPassword, validatePassword } from '@/utils/auth';
import { getUserByUsername } from '@/utils/user';

export const changePassword = async ({ newPassword, oldPassword, username }: IChangePassword) => {};

export const login = async ({ password, username }: ILogin) => {
  const user = await getUserByUsername(username);

  if (!user) return null;

  const validPassword = await validatePassword(password, user.password);

  if (!validPassword) return null;

  const token = jwt.sign({ username }, config.jwt.SECRET, { expiresIn: config.jwt.EXPIRES_IN });

  return { token };
};

export const recoverPassword = async ({ username }: IRecoverPassword) => {
  const user = await getUserByUsername(username);

  if (!user) return null;

  const token = crypto.randomBytes(16).toString('hex');
  const recoverLink = `${config.app.URL}/api/auth/password/reset/${token}`;

  return { recoverLink };
};

export const register = async ({ email, password, username }: IUser) => {
  const hashedPassword = await hashPassword(password);
  const user = await User.create({ email, username, password: hashedPassword });

  return user;
};

export const resetPassword = async ({ newPassword, username }: IResetPassword) => {};
