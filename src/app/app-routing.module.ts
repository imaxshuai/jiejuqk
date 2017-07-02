import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { SigninComponent } from './sign/signin/signin.component';
import { SignupComponent } from './sign/signup/signup.component';
import { JobComponent } from './job/job.component';
import { ReleaseComponent } from './release/release.component';


const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'job', component: JobComponent },
  { path: 'release', component: ReleaseComponent },
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
