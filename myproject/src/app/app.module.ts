import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MobileValidatorDirective } from './mobile-validator.directive';
import { AlphabetValidatorDirective } from './alphabet-validator.directive';
import { EmailValidatorDirective } from './email-validator.directive';
import { IpaddressDirective } from './ipaddress.directive';
import { MacaddressDirective } from './macaddress.directive';
import { PancardvalidatiorDirective } from './pancardvalidatior.directive';


@NgModule({
  declarations: [
    AppComponent,
    MobileValidatorDirective,
    AlphabetValidatorDirective,
    EmailValidatorDirective,
    IpaddressDirective,
    MacaddressDirective,
    PancardvalidatiorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }