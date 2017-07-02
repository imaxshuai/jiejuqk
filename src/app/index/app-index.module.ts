import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { IndexComponent } from './index.component';
import { AdComponent } from './ad/ad.component';
import { BannerComponent } from './banner/banner.component';
import { PreachComponent } from './preach/preach.component';
import { ProcessComponent } from './process/process.component';
import { PropagateComponent } from './propagate/propagate.component';
import { IndexRoutingModule } from './index-routing.module';

@NgModule({
  declarations: [
    IndexComponent,
    AdComponent,
    BannerComponent,
    PreachComponent,
    ProcessComponent,
    PropagateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    IndexRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class AppIndexModule { }
