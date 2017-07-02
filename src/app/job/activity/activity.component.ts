import { Component, OnInit } from '@angular/core';

import { JobService } from '../job.service';
import { Job } from '../../model/job';
import {SearchService} from './service/search.service';
import { flyIn } from '../../animations/fly-in';

@Component ({
  selector: 'app-full-part',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
  providers: [ JobService, SearchService ],
  animations: [flyIn]
})

export class JobActivityComponent implements OnInit {

  public p: string;
  public searchValues = '';
  public activityJobs: Job[];
  public jobDetail: boolean;
  public jobType = '活动充场';

  constructor(
    private jobService: JobService,
    private searchService: SearchService
  ) {}

  getPartJobs(): void {
    this.jobService.getJobs(this.jobType).subscribe( Jobs => {
      this.activityJobs = Jobs;
      return this.activityJobs;
    });
  }

  ngOnInit() {
    this.getPartJobs();
  }
  searchActivityJob(searchInfo) {
    this.searchService.search(searchInfo)
      .subscribe(res => {
        this.activityJobs = res;
        return res;
      });
  }
}
