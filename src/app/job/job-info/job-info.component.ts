import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { JobService } from '../job.service';
import { Job } from '../../model/job';
import {flyIn} from '../../animations/fly-in';
import {fadeIn} from '../../animations/fade-in';
import {User} from '../../sign/model/user';

@Component ({
  selector: 'app-job-info',
  templateUrl: './job-info.component.html',
  styleUrls: ['./job-info.component.css'],
  providers: [ JobService ],
  animations: [flyIn, fadeIn]
})

export class JobInfoComponent implements OnInit {

  jobInfo: Job;
  public chat = false;
  public currentUser: User;
  public tel = '电话咨询';

  constructor(
      public router: Router,
      public activeRoute: ActivatedRoute,
      private jobService: JobService ) {}

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      console.log(params);
      this.jobService.getJob(params.jobId).subscribe(job => {
                        this.jobInfo = job;
                        console.log(this.jobInfo);
                 });
    });

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

  }

  showChat() {
    this.chat = true;
  }
  closeChat() {
    this.chat = false;
  }

  showTel() {
    if (!localStorage.getItem('currentUser')) {
      alert('请先登录，才能查看电话信息！');
    }
  }
}
