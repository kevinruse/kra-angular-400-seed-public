import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `<header>
                       <img src="assets/images/icons/seed-icon.png" alt="">
                       <h1>Welcome to Angular Seed!</h1>
                  </header>`
})

export class HeaderComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
