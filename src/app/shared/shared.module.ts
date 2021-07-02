import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SelectComponent } from './select/select.component';
import { RadioComponent } from './radio/radio.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../core/button/button.component';

const packageList = [
  CommonModule,
  MaterialModule,    
  FlexLayoutModule,
  FormsModule,
  ReactiveFormsModule
]

@NgModule({
  declarations: [InputComponent, CheckboxComponent, SelectComponent, RadioComponent, ButtonComponent],
  imports: [...packageList],
  exports: [InputComponent, CheckboxComponent, SelectComponent, RadioComponent, ButtonComponent, MaterialModule, FlexLayoutModule, ReactiveFormsModule]
})
export class SharedModule { }
