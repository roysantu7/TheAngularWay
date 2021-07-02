import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export function matchPasswords(formName: FormGroup): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        // const forbidden = nameRe.test(control.value);
        // return forbidden ? {forbiddenName: {value: control.value}} : null;
        return formName.get('password').value === formName.get('confirmPassword').value ? null : {'passwordMismatch': true};
      };
  }