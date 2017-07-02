import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SignRoutingModule } from './sign-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SafetyComponent } from './safety/safety.component';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    SafetyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SignRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class AppSignModule { }
