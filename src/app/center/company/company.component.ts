import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../sign/model/user';
import { CompanyService } from './service/company.service';
import {Company} from '../model/company';
import {flyIn} from '../../animations/fly-in';

declare var $: any;
declare var toastr: any;

@Component ({
  selector: 'app-center-resume',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  providers: [CompanyService],
  animations: [flyIn]
})

export class CenterCompanyComponent implements OnInit {
  public user: User = new User();
  public currentUser: User;
  public companyInfo: Company = new Company;

  moreInfo = '更多展开 ▼';
  hiddenInfo = false;
  reviseInfo = true;
  reviseThink = true;
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

  thinkRevise(): void {
    this.reviseThink = !this.reviseThink;
  }

  constructor(
    public router: Router,
    public companyService: CompanyService
  ) {}


  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.getCompanyInfo();
  }


  getCompanyInfo() {
    this.companyService.getCompany(this.currentUser._id).subscribe(res => {
      this.companyInfo = res[0];
      return this.companyInfo;
    });
  }

  companySubmit(company) {
    console.log(company);
    this.companyService.postCompany(company).subscribe(res => {
      this.companyInfo = res;
      return this.companyInfo;
    });
    this.router.navigateByUrl('center');
    toastr.info('企业资料修改成功!', '系统提示');
  }


}
