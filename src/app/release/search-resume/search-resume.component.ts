import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { SearchResumeService } from './service/search-resume.service';
import {  } from './service/search.service';

import { User } from '../../sign/model/user';
import {Company} from '../../center/model/company';
import {ThinkJob} from '../../center/model/thinkJob';
import {SearchService} from './service/search.service';
import {flyIn} from '../../animations/fly-in';

declare var toastr: any;

@Component({
  selector: 'app-search-resume',
  templateUrl: './search-resume.component.html',
  styleUrls: ['./search-resume.component.css'],
  providers: [SearchResumeService, SearchService],
  animations: [flyIn]
})
export class SearchResumeComponent implements OnInit {

  public p: string;
  public currentUser: User;
  public company: Company = new Company;
  public thinkJobs: ThinkJob[];

  constructor(
    public searchResumeService: SearchResumeService,
    public searchService: SearchService,
    public router: Router
  ) {}

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.getThinkJobs();
  }

  getThinkJobs(): void {
    this.searchResumeService.getThinkJobs().subscribe( Jobs => {
      this.thinkJobs = Jobs;
      return this.thinkJobs;
    });
  }

  searchResume(searchInfo) {
    this.searchService.search(searchInfo)
      .subscribe(res => {
        this.thinkJobs = res;
        return res;
      });
  }

}
