export interface IBook {
  id: number;
  title: string;
  author: string;
  year: number;
  editorial: string;
  uuid: string;
}

export type IBookCreation = Omit<IBook, 'id' | 'uuid'>;
