import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JobPartComponent } from './part/part.component';
import { JobFullComponent } from './full/full.component';
import { JobActivityComponent } from './activity/activity.component';
import { JobInfoComponent } from './job-info/job-info.component';
import { CompanyInfoComponent } from './company-info/company-info.component';

const routes: Routes = [
  { path: 'job/part', component: JobPartComponent },
  { path: 'job/full', component: JobFullComponent },
  { path: 'job/activity', component: JobActivityComponent },
  { path: 'job/info/:jobId', component: JobInfoComponent },
  { path: 'company/info/:companyId', component: CompanyInfoComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class JobRoutingModule {}
