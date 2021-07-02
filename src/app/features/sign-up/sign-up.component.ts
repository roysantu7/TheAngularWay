import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { StepFormStructure } from 'src/app/core/models/form-structure.model';
import { backButton, submitButton, nextButton } from '../../constants/button-list.constant';
import { signUpStepsInfo } from '../../constants/sign-up-form.constant';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  submitButton = submitButton;
  nextButton = nextButton;
  backButton = backButton;

  FormFieldsData: StepFormStructure[] = signUpStepsInfo;
  currentStep:number = 1;

  constructor(private fb: FormBuilder) {
    
  }

  ngOnInit() {
    this.signUpForm = this.fb.group({});
    this.FormFieldsData.forEach(item => this.signUpForm.addControl(item.name, new FormGroup({})));
  }

  
  getFormGroup(name): FormGroup {
    return this.signUpForm.get(name) as FormGroup;
  }

  takeAction(action: string, formName: string) {
    const currentForm = this.getFormGroup(formName);
    switch (action) {
      case 'onReset':
        this.signUpForm.reset();
        break;
      case 'onBack':
        this.currentStep -= 1;
        break;
      case 'onNext':
        currentForm.markAllAsTouched();
        if (currentForm.valid) {
          this.currentStep += 1;
        }
        break;
      case 'onSubmit':
        this.signUpForm.markAllAsTouched();
        if (this.signUpForm.valid) {
          console.log("success!!!");
          console.log(this.signUpForm.value);
        }
        break;
    
      default:
        break;
    }
  }

}
