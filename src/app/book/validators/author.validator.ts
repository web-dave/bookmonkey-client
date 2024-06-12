import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const authorValidator: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
  const name: string = control.value;
  if (!name) {
    return null;
  }
  const error = /[0-9]+/.test(name);
  return error ? { author: 'invalid character' } : null;
};
