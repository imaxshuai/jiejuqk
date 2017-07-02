import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReleaseFormComponent } from './release-form/release-form.component';
import { SearchResumeComponent } from './search-resume/search-resume.component';
import { ResumeInfoComponent } from './resume-info/resume-info.component';

const routes: Routes = [
  { path: 'release/form', component: ReleaseFormComponent },
  { path: 'searchResume', component: SearchResumeComponent },
  { path: 'resume/:userId', component: ResumeInfoComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class ReleaseRoutingModule {}
