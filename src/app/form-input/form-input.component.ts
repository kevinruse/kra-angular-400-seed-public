import { Component, Input, OnInit } from '@angular/core';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {

  @Input()
  icon: string;

  get iconClasses() {
    const cssIconClasses = {
      fa: true
    };
    if (this.icon) {
      cssIconClasses['fa-' + this.icon] = true;
    }
    return cssIconClasses;
  }


  faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit() {
  }

}
