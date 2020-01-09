import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output()
  login = new EventEmitter<boolean>();

  loginOutput(login: boolean) {
    this.login.emit(login);
  }

  constructor() { }

  ngOnInit() {
  }

}
