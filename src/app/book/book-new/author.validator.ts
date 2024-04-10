import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const authorValidator: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
  const value: string = control.value || '';
  return /[0-9]/.test(value)
    ? {
        numAuthor: 'Der Name eines Autors darf keine Zahlen beinhalten',
      }
    : null;
};
