import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {
  @Input() fieldInfo;
  constructor() { }

  ngOnInit(): void {
    console.log(this.fieldInfo);
  }

}
