export interface IBook {
  title: string;
  subtitle: string;
  isbn: string;
  abstract: string;
  numPages: number;
  author: string;
  publisher: string;
  price: string;
  cover: string;
  status?: 'neu' | 'alt';
}

export type mayBook = IBook | undefined;
