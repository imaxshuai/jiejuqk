import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CenterResumeComponent } from './resume/resume.component';
import { CenterRecordComponent } from './record/record.component';
import { CenterCompanyComponent } from './company/company.component';
import { CenterUserComponent } from './user/user.component';
import { TeacherAgreementComponent } from './resume/teacherAgreement/teacherAgreement.component';

const routes: Routes = [
  { path: 'center', component: CenterRecordComponent },
  { path: 'center/user', component: CenterUserComponent },
  { path: 'center/resume', component: CenterResumeComponent },
  { path: 'center/record', component: CenterRecordComponent },
  { path: 'center/company', component: CenterCompanyComponent},
  {path: 'agreement/teacher', component: TeacherAgreementComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class CenterRoutingModule {}
