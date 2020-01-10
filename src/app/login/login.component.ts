import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

  nameForm: FormGroup;
  userName: any;

  constructor(private formBuilder: FormBuilder) {
    this.nameForm = formBuilder.group({
      userName : [null]
    });
    this.userName = this.nameForm.controls['userName'];
  }

  onSubmit() {
    console.log(this.nameForm.value);
  }

  log(val) {
    console.log(val);
  }

  ngOnInit() {
  }
}

