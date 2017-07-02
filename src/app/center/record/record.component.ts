import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CenterComponent } from '../center.component';
import {ResumeService} from '../resume/service/resume.service';
import {UserInfo} from '../model/userInfo';
import {User} from '../../sign/model/user';
import {flyIn} from '../../animations/fly-in';
import {Job} from '../../job/model/job';

declare var $: any;
declare var toastr: any;

@Component ({
  selector: 'app-center-resume',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css'],
  providers: [ResumeService],
  animations: [flyIn]
})

export class CenterRecordComponent implements OnInit {
  public userInfo: UserInfo = new UserInfo;
  public currentUser: User;
  public releaseJobs: Job[];
  public zhiCount = 1;

  moreInfo = '更多展开 ▼';
  hiddenInfo = false;
  reviseInfo = true;
  addActiveNav1 = true;
  addActiveNav2 = false;

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

  revise(): void {
    this.reviseInfo = !this.reviseInfo;
    this.hiddenInfo = false;
    this.moreInfo = '更多展开 ▼';
    this.i = 1;
  }

  activeNavClass1(): void {
    this.addActiveNav1 = true;
    this.addActiveNav2 = false;
  }
  activeNavClass2(): void {
    this.addActiveNav1 = false;
    this.addActiveNav2 = true;
  }

  // 服务
  constructor(
    public router: Router,
    public resumeService: ResumeService
  ) {}


  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.getUserInfo();
    this.getReleaseJobNotes();
  }

  getReleaseJobNotes() {
    this.resumeService.getReleaseJobNotes(this.currentUser._id).subscribe(res => {
      this.releaseJobs = res;
      return this.releaseJobs;
    });
  }

  getUserInfo() {
    this.resumeService.getUserInfo(this.currentUser._id).subscribe(res => {
      this.userInfo = res[0];
    });
  }


  companySubmit(userInfo) {
    this.resumeService.postUserInfo(userInfo).subscribe(res => {
      this.userInfo = res;
      return this.userInfo;
    });
    this.router.navigateByUrl('center');
    toastr.info('资料修改成功!', '系统提示');
  }

  toggleZhi() {
    this.zhiCount++;
    if (this.zhiCount % 2 === 0) {
      $('.zhi').animate({width: '100px', height: '100px'});
    } else {
      $('.zhi').animate({width: '0', height: '0'});
    };
  }

}
