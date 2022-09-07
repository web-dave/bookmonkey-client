// ValidatorFn {
//     (control: AbstractControl): ValidationErrors | null;
// }

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const publisherValidatorFn = (
  blacklist: string[] = ['Batman']
): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    if (
      blacklist.some(
        (blocker) =>
          String(control.value).toLowerCase() === blocker.toLowerCase()
      )
    ) {
      return { publisher: 'Publisher is blocked' };
    }
    return null;
  };
};

export const publisherValidator = (
  control: AbstractControl
): ValidationErrors | null => {
  if (control.value !== 'Batman') {
    return { publisher: { expected: 'Batman', given: control.value } };
  }
  return null;
};
