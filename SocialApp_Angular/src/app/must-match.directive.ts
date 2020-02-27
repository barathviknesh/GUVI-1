import { Directive } from '@angular/core';
import { ReactiveFormsModule, FormGroup, AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";

@Directive({
  selector: '[appMustMatch]'
})

export class MustMatchDirective {

  constructor() { }

}

export const MustMatch: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (confirmPassword.errors && !confirmPassword.errors.mustMatch) {
    // return if another validator has already found an error on the matchingControl
    return;
  }

  // set error on matchingControl if validation fails
  if (password.value !== confirmPassword.value) {
        confirmPassword.setErrors({ mustMatch: true})
  }else{
        confirmPassword.setErrors(null);
  }

}
