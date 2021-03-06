import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormArray, FormBuilder, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { FormStructure } from '../../core/models/form-structure.model';
import { cloneAbstractControl } from '../../util/form-methods.util';
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
export class ReactiveFormsComponent implements ControlValueAccessor {
  @Input() formGroupInfo: any;
  @Input() formGroupTitle: FormGroup;
  
  signUpformFields:any;
  formArrayItems: FormArray;

  constructor(private fb: FormBuilder) { }

  ngOnChanges() {
    this.createForm();
  }

   /**
   * @method createForm
   * @description Initiate form creation process
   */

  createForm(): void {
    this.addFormControls(this.formGroupInfo, this.formGroupTitle);    
  }

  /**
   * @method addFormControls
   * @description build the form with respective data from parent component's input value
   * @params fieldList, formGroup
   */
  addFormControls(fieldList: FormStructure[], formGroup: FormGroup): void {
    fieldList.forEach(field => {
      
      if(field.type === 'formGroup') {
        formGroup.addControl(field.controlName, new FormGroup({}));
      } else if(field.type === 'formArray') {
        formGroup.addControl(field.controlName, this.fb.array([this.createItem()]));
      } else {
        formGroup.addControl(field.controlName, new FormControl({value: field.value, disabled: field.isDisabled}, field.validatorList));
      }
      
      if (field.controlName === 'confirmPassword') {
        formGroup.get(field.controlName).setValidators([...field.validatorList, matchPasswords(this.formGroupTitle)]);
      } 
    });
  }

  /**
   * @method createItem
   * @description create a child formGroup named fieldData for a formArray
   */
  createItem(): FormGroup {
    return this.fb.group({
      fieldData: new FormGroup({}),
    });
  }

  /**
   * @method addItem
   * @description add an item to a FormArray
   * @params fGroup, controlName
   */
  addItem(fGroup: FormGroup, controlName: string): void {
    (fGroup.get(controlName) as FormArray).push(this.createItem());
  }

  /**
   * @method copyItem
   * @description copy an item from a FormArray based on its controlName and index value
   * @params controlName, index
   */
  copyItem(fGroup: FormGroup, controlName: string): void {
    const formElement = (fGroup.get(controlName) as FormArray);
    const lastIndex = formElement.length -1;
    if(lastIndex >= 0) {
      formElement.push(cloneAbstractControl(formElement.controls[lastIndex]));
    }
  }

  /**
   * @method deleteItem
   * @description delete an item from a FormArray based on its controlName and index value
   * @params controlName, index
   */
  deleteItem(controlName:string, i: number): void {
    const lastElem = (this.formGroupTitle.get(controlName) as FormArray).controls[i];
    (this.formGroupTitle.get(controlName) as FormArray).removeAt(i);
  }

  /**
   * @method getFormArrayGroup
   * @description returns the formgroup of a FormArray based on its controlName and index value
   * @params controlName, index
   */
  getFormArrayGroup(controlName: string, index: number): FormGroup {
    return (this.formGroupTitle.get(controlName) as FormArray).controls[index].get('fieldData') as FormGroup
  }
 
  /**
   * @method getFormGroup
   * @description returns formgroup of a specific controlName
   * @param controlName
   */
  getFormGroup(controlName:string): FormGroup {
    return this.formGroupTitle.get(controlName) as FormGroup;
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
