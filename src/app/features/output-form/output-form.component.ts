import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { resetButton, submitButton } from 'src/app/constants/button-list.constant';
import { formBaseStructure } from 'src/app/constants/form-induction.constant';
import { FormStructure } from 'src/app/core/models/form-structure.model';
import { FormInductionService } from '../services/form-induction.service';

@Component({
  selector: 'app-output-form',
  templateUrl: './output-form.component.html',
  styleUrls: ['./output-form.component.scss']
})
export class OutputFormComponent implements OnInit {
  submitButton = submitButton;
  resetButton = resetButton;
  // test

  testForm: FormGroup;
  testFormData: FormStructure[];
  // end of test

  constructor(private formInductionService: FormInductionService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formInductionService.getFormTracker().subscribe( res => {
      if(res) {
        this.testForm = this.fb.group({});
        this.testFormData = this.formInductionService.formDetails;
      }
      console.log("output form");
      console.log(this.testFormData);
    })
  }

  takeAction(action: string, formName: string) {
    switch (action) {
      case 'onReset':
        console.log("Reset!!!");
        console.log(this.testForm.getRawValue());
        this.testForm.reset();
        break;
      case 'onSubmit':
        this.testForm.markAllAsTouched();
        console.log("before success!!!");
          console.log(this.testForm.getRawValue());
        if (this.testForm.valid) {
          console.log("success!!!");
        }
        break;
    
      default:
        break;
    }
  }

}
