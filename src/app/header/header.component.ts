import { Component, Input, OnInit } from '@angular/core';
import { TitleService } from '../services/title.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
    })

export class HeaderComponent implements OnInit {

    @Input()
    user;

    userName: string = 'Kevin';
    title: string;
    constructor(private titleService: TitleService) {
    }
    ngOnInit() {
        this.title = this.titleService.getTitle();
    }
}
