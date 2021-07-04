import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { resetButton, submitButton } from 'src/app/constants/button-list.constant';
import { parentFormArrayData, validatorMap } from 'src/app/constants/form-induction.constant';
import { FormStructure } from 'src/app/core/models/form-structure.model';
import { FormInductionService } from '../services/form-induction.service';

@Component({
  selector: 'app-form-induction',
  templateUrl: './form-induction.component.html',
  styleUrls: ['./form-induction.component.scss']
})
export class FormInductionComponent implements OnInit {
  inductionForm: FormGroup;
  submitButton = submitButton;
  resetButton = resetButton;
  outputFormObject: FormStructure[];
  FormFieldsData: FormStructure[] = parentFormArrayData;


  constructor(private fb: FormBuilder, private formInductionService: FormInductionService) {
    
  }

  ngOnInit() {
    this.inductionForm = this.fb.group({});
    this.formInductionService.getFormTracker().subscribe( res => {
      if(res) {
        this.outputFormObject = this.formInductionService.formDetails;
      }
    })
  }

  /**
   * @method takeAction
   * @description perform the required action on basis of users choice
   * @param action 
   */
  takeAction(action: string): void {
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

  /**
   * @method mapFormData
   * @description create a valid formstructure object by proccessing the user input data
   * @param formData 
   */
  mapFormData(formData: any): void {
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
    this.formInductionService.setFormDetails(processedData);
    this.formInductionService.setFormTracker();
    console.log("inside map");
    console.log(processedData);
  }

}
