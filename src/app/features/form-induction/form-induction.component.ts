import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { resetButton, submitButton } from 'src/app/constants/button-list.constant';
import { formBaseStructure, parentFormArrayData, validatorMap } from 'src/app/constants/form-induction.constant';
import { FormStructure } from 'src/app/core/models/form-structure.model';

@Component({
  selector: 'app-form-induction',
  templateUrl: './form-induction.component.html',
  styleUrls: ['./form-induction.component.scss']
})
export class FormInductionComponent implements OnInit {
  inductionForm: FormGroup;
  submitButton = submitButton;
  resetButton = resetButton;

  // FormFieldsData: FormStructure[] = formInductionFields;
  FormFieldsData: FormStructure[] = parentFormArrayData;
  // currentStep:number = 1;

  // test

  testForm: FormGroup;
  testFormData: FormStructure[] = formBaseStructure;
  // end of test

  constructor(private fb: FormBuilder) {
    
  }

  ngOnInit() {
    this.inductionForm = this.fb.group({});
    this.testForm = this.fb.group({});
  }


  getFormGroup(name): FormGroup {
    return this.inductionForm.get(name) as FormGroup;
  }

  takeAction(action: string) {
    switch (action) {
      case 'onReset':
        console.log("reset!!!");
        console.log(this.inductionForm.value);
        this.inductionForm.reset();
        break;
      
      case 'onSubmit':
        this.inductionForm.markAllAsTouched();
        console.log("Not success!!!");
          console.log(this.inductionForm.value);
        if (this.inductionForm.valid) {
          console.log("success!!!");
          this.mapFormData(this.inductionForm.value.fieldArray);
        }
        break;

      default:
        break;
    }
  }

  mapFormData(formData): void {
    const processedData = [];
    formData.forEach((item, i) => {
      const field = item.fieldData;
      const fieldOptions = field.optionList;
      const validatorList = field.validatorList;

      let options = [];

      if(fieldOptions.length > 1) {
        fieldOptions.forEach(option => {
          options.push(option.fieldData);
        });
      }

      const validatorMappedList = [];

      if(validatorList) {
        Object.entries(validatorList).forEach(([key, value]) => {
          if(value && value !== '') {
            validatorMappedList.push(validatorMap[key](value));
          }
        })
      }

      const body = {
        id: i,
        type: field.type,
        label: field.label,
        controlName: field.controlName,
        value: field.value,
        isRequired: validatorList && validatorList.isRequired !== null ? validatorList.isRequired : null,
        isDisabled: field.isDisabled,
        maxlength: validatorList && validatorList.maxlength !== '' ? validatorList.maxlength : null,
        minlength: validatorList && validatorList.minlength !== '' ? validatorList.minlength : null,
        pattern: validatorList && validatorList.pattern !== '' ? new RegExp(validatorList.pattern) : null,
        validatorList: validatorMappedList,
        hint: field.hint,
        errorMessage: field.errorMessage,
        placeholder: field.placeholder,
        optionList: options,
        childFormDetails: field.childFormDetails ? field.childFormDetails : null
      }

      processedData.push(body);
    });
    this.testFormData[0].childFormDetails = processedData;
    console.log("inside map");
    console.log(processedData);
  }

}
