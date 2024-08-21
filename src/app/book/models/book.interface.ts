import { FormControl } from '@angular/forms';

type IForm<T> = {
  [K in keyof T]: FormControl<T[K] | null>;
};

export type IBookForm = IForm<IBook>;
export interface IBook {
  title: string;
  author: string;
  abstract: string;
  isbn: string;
  subtitle: string;
  numPages: number;
  publisher: string;
  price: string;
  cover: string;
}
