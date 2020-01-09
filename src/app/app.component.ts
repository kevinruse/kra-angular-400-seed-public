import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {

    loggedIn: boolean;
    logIn(evt) {
        this.loggedIn = evt;
    }


    // tslint:disable-next-line:max-line-length
    user = {id: 1, name: 'Kevin', gender: 'M', ageGroup: '51+', userCode: 'M51+', reqs: {}, reqsStatus: {fruitMet: false, vegMet: false, proteinMet: false, grainMet: false}, registered: true, email: 'kevin@kevinruse.com'};

}
