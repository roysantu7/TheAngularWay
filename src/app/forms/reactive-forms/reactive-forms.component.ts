import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormArray, FormBuilder, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { FormStructure } from 'src/app/core/models/form-structure.model';
import { matchPasswords } from '../../shared/custom-validation/match-password.directive';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ReactiveFormsComponent,
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: ReactiveFormsComponent,
      multi: true
    }
  ]
})
export class ReactiveFormsComponent implements OnInit, ControlValueAccessor {
  @Input() formGroupInfo: any;
  @Input() formGroupTitle: FormGroup;
  @Input() FormType: string;
  
  signUpformFields:any;
  formArrayItems: FormArray;
  // items: FormArray;

  // start of test

  orderForm: FormGroup;
  

  // end of test

  constructor(private fb: FormBuilder) { }
   

  ngOnInit(): void {
    // console.log(this.formGroupInfo);
    // console.log(this.formGroupTitle);
    // console.log('form Type: ',this.FormType);
    this.createForm();
  }

  createItem(): FormGroup {
    return this.fb.group({
      fieldData: new FormGroup({}),
    });
  }

  addItem(fGroup: FormGroup, controlName): void {
    // this.formArrayItems = fGroup.get('formArrayItems') as FormArray;
    // this.formArrayItems.push(this.createItem());
    (fGroup.get(controlName) as FormArray).push(this.createItem());
  }

  deleteItem(controlName, i: number): void {
    (this.formGroupTitle.get(controlName) as FormArray).removeAt(i);
  }

  getFormArray(controlName, i) {
    return (this.formGroupTitle.get(controlName) as FormArray).controls[i].get('fieldData') as FormGroup
  }

  createForm(): void {
    this.addFormControls(this.formGroupInfo, this.formGroupTitle);    
  }


  addFormControls(fieldList: FormStructure[], formGroup: FormGroup): void {
    fieldList.forEach(field => {
      
      if(field.type === 'formGroup') {
        formGroup.addControl(field.controlName, new FormGroup({}));
      } else if(field.type === 'formArray') {
        formGroup.addControl(field.controlName, this.fb.array([this.createItem()]));
        // formGroup.addControl('formArrayItems', this.fb.array([this.createItem()]));
      } else {
        formGroup.addControl(field.controlName, new FormControl(field.value, field.validatorList));
      }
      

      if (field.controlName === 'confirmPassword') {
        formGroup.get(field.controlName).setValidators([...field.validatorList, matchPasswords(this.formGroupTitle)]);
      } 
    });
  }
 
  getFormGroup(name): FormGroup {
    return this.formGroupTitle.get(name) as FormGroup;
  }
  
  // value accessor methods

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(obj: any): void {
    // this.fieldData.setValue(obj);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

}
