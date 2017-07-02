import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Ng2PaginationModule} from 'ng2-pagination';

import { CenterRoutingModule } from './center-routing.module';
import { CenterComponent } from './center.component';
import { CenterResumeComponent } from './resume/resume.component';
import { CenterRecordComponent } from './record/record.component';
import { CenterCompanyComponent } from './company/company.component';
import { CenterUserComponent } from './user/user.component';
import { TeacherAgreementComponent } from './resume/teacherAgreement/teacherAgreement.component';


@NgModule({
  declarations: [
    CenterComponent,
    CenterResumeComponent,
    CenterRecordComponent,
    CenterCompanyComponent,
    CenterUserComponent,
    TeacherAgreementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CenterRoutingModule,
    Ng2PaginationModule
  ],
  providers: [],
  bootstrap: []
})
export class AppCenterModule { }
