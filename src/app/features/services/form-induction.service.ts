import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FormStructure } from 'src/app/core/models/form-structure.model';

@Injectable({
  providedIn: 'root'
})
export class FormInductionService {

  formDetails: FormStructure[];
  formTracker$ = new Subject<any>();

  constructor() { }

  setFormDetails(formData: FormStructure[]) {
    this.formDetails = formData;
  }

  setFormTracker() {
    this.formTracker$.next(true);
  }
  
  getFormTracker() {
    return this.formTracker$.asObservable();
  }
}
