import { FormControl } from '@angular/forms';

export type IForm<T> = {
  [K in keyof T]: FormControl<T[K]>;
};

export enum IBundesland {
  hamburg = 'Hamburg',
  sh = 'SH',
  niedersachsen = 'Niedersachsen',
}

export interface IUser {
  name: string;
  street: string;
  zip: number;
  city: string;
  state: IBundesland;
  confirmed: boolean;
}
