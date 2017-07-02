import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { JobService } from '../job.service';
import { Job } from '../../model/job';
import {flyIn} from '../../animations/fly-in';
import {fadeIn} from '../../animations/fade-in';

@Component ({
  selector: 'app-job-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css'],
  providers: [ JobService ],
  animations: [fadeIn, flyIn]
})

export class CompanyInfoComponent implements OnInit {

  companyInfo: Job;
  moreInfo = '更多收起 ▲';
  hiddenInfo = true;

  private i = 0;
  more(): void {
    this.i++;
    if ( this.i % 2 === 0 ) {
      this.moreInfo = '更多收起 ▲';
      this.hiddenInfo = true;
    }else {
      this.moreInfo = '更多展开 ▼';
      this.hiddenInfo = false;
    }
  }

  constructor(
      public router: Router,
      public activeRoute: ActivatedRoute,
      private jobService: JobService ) {}

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      console.log(params);
      this.jobService.getCompany(params.companyId).subscribe(job => {
                        this.companyInfo = job;
                        console.log(this.companyInfo);
                 });
    });
  }
}
