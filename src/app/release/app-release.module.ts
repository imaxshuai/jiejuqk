import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ReleaseRoutingModule } from './release-routing.module';
import { ReleaseComponent } from './release.component';
import { ReleaseFormComponent} from './release-form/release-form.component';
import { SearchResumeComponent} from './search-resume/search-resume.component';
import { ResumeInfoComponent } from './resume-info/resume-info.component';
import { Ng2PaginationModule } from 'ng2-pagination';


@NgModule({
  declarations: [
    ReleaseComponent,
    ReleaseFormComponent,
    SearchResumeComponent,
    ResumeInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReleaseRoutingModule,
    Ng2PaginationModule
  ],
  providers: [],
  bootstrap: []
})
export class AppReleaseModule { }
