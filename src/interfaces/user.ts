export interface IUser {
  id: number;
  email: string;
  password: string;
  username: string;
  uuid: string;
}

export type IUserCreation = Omit<IUser, 'id' | 'uuid'>;
