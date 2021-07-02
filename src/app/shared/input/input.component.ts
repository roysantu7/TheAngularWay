import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() inputType: string;
  @Input() fieldInfo: any;

  constructor() { }

  ngOnInit(): void {
    console.log('input type is', this.inputType);
    console.log(this.fieldInfo);
  }

}
