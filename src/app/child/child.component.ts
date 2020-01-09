import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  fruitStatus: number = 0;

  @Output()
  login = new EventEmitter<boolean>();

  loginOutput(login: boolean) {
    this.login.emit(login);
  }

  fruitCounter() {
    return this.fruitStatus++;
  }

  constructor() { }

  ngOnInit() {
  }

}
