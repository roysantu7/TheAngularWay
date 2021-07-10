import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomFormsModule } from '../forms/customForms.module';
import { SharedModule } from '../shared/shared.module';
import { FormInductionComponent } from './form-induction/form-induction.component';
import { OutputFormComponent } from './output-form/output-form.component';
import { ClipboardModule } from '@angular/cdk/clipboard';

const routes: Routes = [
  {
    path:'sign-up',
    component: SignUpComponent
  },
  {
    path:'form-induction',
    component: FormInductionComponent
  }
]

@NgModule({
  declarations: [SignUpComponent, FormInductionComponent, OutputFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CustomFormsModule,
    SharedModule,
    ClipboardModule
  ]
})
export class FeaturesModule { }
