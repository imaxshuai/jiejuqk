import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { User } from '../../sign/model/user';
import { ReleaseJobService } from './service/release-job.service';
import {Company} from '../../model/company';
import {flyIn} from '../../animations/fly-in';
import {fadeIn} from '../../animations/fade-in';

declare var toastr: any;

@Component({
  selector: 'app-release-form',
  templateUrl: './release-form.component.html',
  styleUrls: ['./release-form.component.css'],
  providers: [ReleaseJobService],
  animations: [flyIn, fadeIn]
})
export class ReleaseFormComponent implements OnInit {

  public currentUser: User;
  public company: Company = new Company;

  constructor(
    public releaseJobService: ReleaseJobService,
    public router: Router
  ) {}

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.getCompany();
  }

  getCompany() {
    this.releaseJobService.getCompany(this.currentUser._id).subscribe(res => {
      this.company = res[0];
      return this.company;
    });
  }

  releaseJobSubmit(releaseJob) {
    this.releaseJobService.postReleaseJob(releaseJob).subscribe(res => {
      return res;
    });
    toastr.success('恭喜你，职位发布成功！', '系统提示');
    this.router.navigateByUrl('/release');
  }

}
