import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { ResumeInfoService } from './service/resume-info.service';
import {ThinkJob} from '../../center/model/thinkJob';
import {UserInfo} from '../../center/model/userInfo';
import {Experience} from '../../center/model/experience';
import {Education} from '../../center/model/education';
import {flyIn} from '../../animations/fly-in';
import {fadeIn} from '../../animations/fade-in';

@Component ({
  selector: 'app-job-info',
  templateUrl: './resume-info.component.html',
  styleUrls: ['./resume-info.component.css'],
  providers: [ ResumeInfoService ],
  animations: [flyIn, fadeIn]
})

export class ResumeInfoComponent implements OnInit {

  public userInfo: UserInfo = new UserInfo;
  public thinkJob: ThinkJob = new ThinkJob;
  public experience: Experience = new Experience;
  public education: Education = new Education;

  moreInfo = '更多展开 ▼';
  hiddenInfo = false;

  private i = 1;
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

  // 服务

  constructor(
      public router: Router,
      public activeRoute: ActivatedRoute,
      public resumeInfoService: ResumeInfoService
  ) {}

  ngOnInit() {
    this.getUserInfo();
    this.getThinkJob();
    this.getExperience();
    this.getEducation();
  }

  getUserInfo(): void {
    this.activeRoute.params.subscribe(params => {
      this.resumeInfoService.getUserInfo(params.userId).subscribe(res => {
        this.userInfo = res[0];
        console.log(this.userInfo);
        return this.userInfo;
      });
    });
  }

  getThinkJob(): void {
    this.activeRoute.params.subscribe(params => {
      this.resumeInfoService.getThinkJob(params.userId).subscribe(res => {
        this.thinkJob = res[0];
        console.log(this.thinkJob);
        return this.thinkJob;
      });
    });
  }

  getExperience(): void {
    this.activeRoute.params.subscribe(params => {
      this.resumeInfoService.getExperience(params.userId).subscribe(res => {
        this.experience = res[0];
        console.log(this.experience);
        return this.experience;
      });
    });
  }

  getEducation(): void {
    this.activeRoute.params.subscribe(params => {
      this.resumeInfoService.getEducation(params.userId).subscribe(res => {
        this.education = res[0];
        console.log(this.education);
        return this.education;
      });
    });
  }

}
