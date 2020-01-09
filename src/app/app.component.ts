import {
    AfterViewInit,
    Component,
    ElementRef,
    QueryList,
    ViewChild,
    ViewChildren,
    ViewEncapsulation
} from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {

    loggedIn: boolean;

    @ViewChild(ChildComponent, {static: false}) childView: ChildComponent;
    @ViewChild('fruit', {static: false}) fruit: ElementRef;
    @ViewChildren(ChildComponent) childrenView: QueryList<any>;

    ngAfterViewInit() {
        const children: ChildComponent[] = this.childrenView.toArray();
        console.log(children);
        console.log(this.fruit);
        console.table(this.childView);
    }

    logIn(evt) {
        this.loggedIn = evt;
    }

    addFruit() {
        this.childView.fruitCounter();
        this.fruit.nativeElement.innerText = this.childView.fruitStatus;
        console.log(this.childView.fruitStatus);
    }


    // tslint:disable-next-line:max-line-length
    user = {id: 1, name: 'Kevin', gender: 'M', ageGroup: '51+', userCode: 'M51+', reqs: {}, reqsStatus: {fruitMet: false, vegMet: false, proteinMet: false, grainMet: false}, registered: true, email: 'kevin@kevinruse.com'};

}
