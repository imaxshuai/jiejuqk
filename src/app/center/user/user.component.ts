import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../sign/model/user';
import {UserService} from './service/user.service';
import {flyIn} from '../../animations/fly-in';
import {SignService} from '../../sign/sign.service';

declare var $: any;
declare var toastr: any;

@Component ({
  selector: 'app-center-resume',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService, SignService],
  animations: [flyIn]
})

export class CenterUserComponent implements OnInit {

  public currentUser: User;
  public user: User;

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  constructor(
    public userService: UserService,
    public router: Router,
    public signService: SignService
  ) {}

  submitUser(user) {
    console.log(user);
    return this.userService.postUser(user)
      .subscribe(res => {
        if (res.userExist) {
          toastr.error('用户名、邮箱或手机号已存在，请修改', '系统提示');
          return ;
        } else {
          this.user = res;
          console.log('修改成功，要重新登录喽！！');
          this.signService.logout();
          toastr.success('修改成功，请重新登录!', '系统提示');
          this.router.navigateByUrl('signin');
          return this.user;
        }
      });
  }

}
