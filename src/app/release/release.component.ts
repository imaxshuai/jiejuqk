import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ReleaseJobService } from './release-form/service/release-job.service';
import { User } from '../sign/model/user';
import { Company } from '../center/model/company';
import {flyIn} from '../animations/fly-in';

declare var $: any;
declare var toastr: any;

@Component({
  selector: 'app-release',
  templateUrl: './release.component.html',
  styleUrls: ['./release.component.css'],
  providers: [ReleaseJobService],
  animations: [flyIn]
})
export class ReleaseComponent implements OnInit {

  public currentUser: User;
  public company: Company = new Company;
  public login = false;
  public haveCompanyInfo = false;
  constructor(
    public router: Router,
    public releaseJobService: ReleaseJobService
  ) { }

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.login = true;

      this.getCompany();
    } else {
      this.login = false;
    }

  }

  getCompany() {
    this.releaseJobService.getCompany(this.currentUser._id).subscribe(res => {
      this.company = res[0];
      if (this.company) {
        this.haveCompanyInfo = true;
      }
      return this.haveCompanyInfo;
    });
  }


  releaseJobAsk(): void {

    console.log(this.login);
    console.log(this.haveCompanyInfo);

    if (this.login === false) {
      toastr.info('请先登录并填写公司信息，才能发布职位！', '系统提示');
      this.router.navigateByUrl('signin');
      console.log('需要去登陆！');
    }

    if ( this.login === true && this.haveCompanyInfo === true ) {
      this.router.navigateByUrl('release/form');
      console.log('可以发布信息了');
    }

    if ( this.login === true && this.haveCompanyInfo === false ) {
      toastr.info('请先完善公司信息，才能发布职位！', '系统提示');
      this.router.navigateByUrl('center/company');
      console.log('需要完善公司信息！');
    }
  }

  seeResumeAsk(): void {

    if (this.login === false) {
      toastr.info('请先登录并填写公司信息，才能查看他人简历！', '系统提示');
      this.router.navigateByUrl('signin');
      console.log('需要去登陆！');
    }

    if ( this.login === true && this.haveCompanyInfo === true ) {
      this.router.navigateByUrl('searchResume');
    }

    if ( this.login === true && this.haveCompanyInfo === false ) {
      toastr.info('请先完善公司信息，才能查看简历！', '系统提示');
      this.router.navigateByUrl('center/company');
    }
  }

}
