import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { FormInputComponent } from './form-input/form-input.component';
import { HeaderComponent } from './header/header.component';
import { StatusComponent } from './status/status.component';
import { StatusDirective } from './directives/status.directive';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports         :   [ BrowserModule,
                          FontAwesomeModule,
                          FormsModule,
                          ReactiveFormsModule],
    declarations    :   [ AppComponent,
                          HeaderComponent,
                          ChildComponent,
                          FormInputComponent,
                          StatusComponent,
                          StatusDirective,
                          LoginComponent ],
    entryComponents: [ StatusComponent ],
    bootstrap       :   [ AppComponent ]
})

export class AppModule {}
