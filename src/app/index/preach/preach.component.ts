import { Component, OnInit } from '@angular/core';
import {PreachJobService} from './service/preach-job.service';
import {Job} from '../../model/job';

@Component ({
  selector: 'index-preach',
  templateUrl: './preach.component.html',
  styleUrls: ['./preach.component.css'],
  providers: [PreachJobService]
})

export class PreachComponent implements OnInit {

  public activityJobs: Job[];
  public partJobs: Job[];

  constructor(public appJobService: PreachJobService) { }

  ngOnInit() {
    this.IndexShowPartJob();
    this.IndexShowActivityJob();
  }

  IndexShowPartJob() {
    return this.appJobService.getJobs('兼职')
      .subscribe(jobs => {
        this.partJobs = jobs;
        return  this.partJobs;
      });
  }

  IndexShowActivityJob() {
    return this.appJobService.getJobs('活动充场')
      .subscribe(jobs => {
        this.activityJobs = jobs;
        console.log(jobs);
        return this.activityJobs;
      });
  }
}
