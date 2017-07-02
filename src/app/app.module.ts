import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppIndexModule } from './index/app-index.module';
import { AppSignModule } from './sign/app-sign.module';
import { AppCenterModule } from './center/app-center.module';
import { AppJobModule } from './job/app-job.module';
import { AppReleaseModule } from './release/app-release.module';
import { ProcessComponent } from './process/process.component';

import { JobComponent } from './job/job.component';

@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    ProcessComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AppSignModule,
    AppIndexModule,
    AppCenterModule,
    AppJobModule,
    AppReleaseModule,
    ToastModule.forRoot()
  ],
  providers: [{provide: LocationStrategy,useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
