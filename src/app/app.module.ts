import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { FormInputComponent } from './form-input/form-input.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports         :   [ BrowserModule, FontAwesomeModule ],
    declarations    :   [ AppComponent, HeaderComponent, ChildComponent, FormInputComponent ],
    bootstrap       :   [ AppComponent ]
})

export class AppModule {}
