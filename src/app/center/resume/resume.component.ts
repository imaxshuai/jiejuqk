import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CenterComponent } from '../center.component';
import {ResumeService} from './service/resume.service';
import {UserInfo} from '../model/userInfo';
import {User} from '../../sign/model/user';
import {ThinkJob} from '../model/thinkJob';
import {Experience} from '../model/experience';
import {Education} from '../model/education';
import {flyIn} from '../../animations/fly-in';

declare var $: any;
declare var toastr: any;

@Component ({
  selector: 'app-center-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  providers: [ResumeService],
  animations: [flyIn]
})

export class CenterResumeComponent implements OnInit {


  public userInfo: UserInfo = new UserInfo;
  public thinkJob: ThinkJob = new ThinkJob;
  public experience: Experience = new Experience;
  public education: Education = new Education;
  public currentUser: User;
  public zhiCount = 1;

  moreInfo = '更多展开 ▼';
  hiddenInfo = false;
  reviseInfo = true;
  reviseThink = true;
  reviseExperience = true;
  reviseEducation = true;

  private i = 1;

  more(): void {
    this.i++;
    if (this.i % 2 === 0) {
      this.moreInfo = '更多收起 ▲';
      this.hiddenInfo = true;
    } else {
      this.moreInfo = '更多展开 ▼';
      this.hiddenInfo = false;
    }
  }

  revise(): void {
    this.reviseInfo = !this.reviseInfo;
    this.hiddenInfo = false;
    this.moreInfo = '更多展开 ▼';
    this.i = 1;
  }

  thinkRevise(): void {
    this.reviseThink = !this.reviseThink;
  }

  experienceRevise(): void {
    this.reviseExperience = !this.reviseExperience;
  }

  educationRevise(): void {
    this.reviseEducation = !this.reviseEducation;
  }


  // 服务
  constructor(public router: Router,
              public resumeService: ResumeService) {
  }


  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.getUserInfo();
    this.getThinkJob();
    this.getExperience();
    this.getEducation();
  }


  getUserInfo() {
    this.resumeService.getUserInfo(this.currentUser._id).subscribe(res => {
      this.userInfo = res[0];
    });
  }

  getThinkJob() {
    this.resumeService.getThinkJob(this.currentUser._id).subscribe(res => {
      this.thinkJob = res[0];
    });
  }

  getExperience() {
    this.resumeService.getExperience(this.currentUser._id).subscribe(res => {
      this.experience = res[0];
    });
  }

  getEducation() {
    this.resumeService.getEducation(this.currentUser._id).subscribe(res => {
      this.education = res[0];
    });
  }

  companySubmit(userInfo) {
    this.resumeService.postUserInfo(userInfo).subscribe(res => {
      this.userInfo = res;
      return this.userInfo;
    });
    toastr.info('资料修改成功!', '系统提示');
    this.router.navigateByUrl('center');
  }

  thinkJobSubmit(thinkJob) {
    this.resumeService.postThinkJob(thinkJob).subscribe(res => {
      this.thinkJob = res;
      console.log(res);
      return this.thinkJob;
    });
    toastr.info('资料修改成功!', '系统提示');
    this.router.navigateByUrl('center');
  }

  experienceSubmit(experience) {
    this.resumeService.postExperience(experience).subscribe(res => {
      this.experience = res;
      return this.experience;
    });
    toastr.info('资料修改成功!', '系统提示');
    this.router.navigateByUrl('center');
  }

  educationSubmit(education) {
    this.resumeService.postEducation(education).subscribe(res => {
      this.education = res;
      return this.education;
    });
    toastr.info('资料修改成功!', '系统提示');
    this.router.navigateByUrl('center');
  }

  toggleZhi() {
    this.zhiCount++;
    if (this.zhiCount % 2 === 0) {
      $('.zhi').animate({width: '100px', height: '100px'});
    } else {
      $('.zhi').animate({width: '0', height: '0'});
    }
    ;
  }
}
