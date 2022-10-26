// Libraries
import bcrypt from 'bcrypt';

export const hashPassword = async (plaintTextPassword: string) => {
  const hash = await bcrypt.hash(plaintTextPassword, 10);

  return hash;
};

export const validatePassword = async (plaintTextPassword: string, hash: string) => {
  const result = await bcrypt.compare(plaintTextPassword, hash);

  return result;
};
