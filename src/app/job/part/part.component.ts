import { Component, OnInit } from '@angular/core';

import { JobService } from '../job.service';
import { SearchService } from './service/search.service';
import { flyIn } from '../../animations/fly-in';

import { Job } from '../../model/job';

@Component ({
  selector: 'app-job-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.css'],
  providers: [ JobService, SearchService],
  animations: [flyIn]
})

export class JobPartComponent implements OnInit {

  public p: string;
  public searchValues = '';
  public partJobs: Job[];
  public jobDetail: boolean;
  public jobType = '兼职';

  constructor(
    private jobService: JobService,
    private searchService: SearchService
  ) {}

  getPartJobs(): void {
    this.jobService.getJobs(this.jobType).subscribe( Jobs => {
      this.partJobs = Jobs;
      return this.partJobs;
    });
  }

  ngOnInit() {
    this.getPartJobs();
  }

  searchPartJob(searchInfo) {
    console.log(searchInfo);
    this.searchService.search(searchInfo)
      .subscribe(res => {
        this.partJobs = res;
        return res;
      });
  }
}
