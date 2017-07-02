import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';
import { Job } from '../../model/job';
import {SearchService} from './service/search.service';
import { flyIn } from '../../animations/fly-in';


@Component ({
  selector: 'app-full-part',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.css'],
  providers: [ JobService, SearchService ],
  animations: [flyIn]
})

export class JobFullComponent implements OnInit {

  public p: string;
  public searchValues = '';
  public fullJobs: Job[];
  public jobType = '全职';

  constructor(
    public jobService: JobService,
    public searchService: SearchService
  ) {}

  getPartJobs(): void {
    this.jobService.getJobs(this.jobType).subscribe( Jobs => {
      this.fullJobs = Jobs;
      return this.fullJobs;
    });
  }

  ngOnInit() {
    this.getPartJobs();
  }

  searchFullJob(searchInfo) {
    this.searchService.search(searchInfo)
      .subscribe(res => {
        this.fullJobs = res;
        return res;
      });
  }
}
