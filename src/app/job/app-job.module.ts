import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { JobRoutingModule } from './job-routing.module';
import { JobPartComponent } from './part/part.component';
import { JobFullComponent } from './full/full.component';
import { JobActivityComponent } from './activity/activity.component';
import { JobInfoComponent } from './job-info/job-info.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { Ng2PaginationModule } from 'ng2-pagination';


@NgModule({
  declarations: [
    JobPartComponent,
    JobFullComponent,
    JobActivityComponent,
    JobInfoComponent,
    CompanyInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JobRoutingModule,
    Ng2PaginationModule
  ],
  providers: [],
  bootstrap: []
})
export class AppJobModule { }
