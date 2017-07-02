import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../model/user';
import { SignService } from '../sign.service';
import { flyIn } from '../../animations/fly-in';

declare var $: any;
declare var toastr: any;

@Component ({
  selector: 'app-sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [SignService],
  animations: [flyIn]
})

export class SignupComponent implements OnInit {
  public user: User = new User;
  public validUser: boolean;

  constructor(
    public signService: SignService,
    public router: Router
  ) {}

  ngOnInit() {
  }

  onSubmit(user) {
    this.signService.register(user)
      .subscribe(res => {
        if (res.userExist) {
          toastr.error('用户名、邮箱或手机号已存在，请修改', '系统提示');
          return ;
        } else {
          this.user = res;
          console.log('验证成功，即将注册喽！');
          toastr.success('您已成功加入捷居招聘网，请登录!', '系统提示');
          this.router.navigateByUrl('signin');
          return this.user;
        }
      });

  }

}
