import { Component, HostListener, ElementRef, Renderer, ViewContainerRef, AfterContentInit } from '@angular/core';
import { User } from './sign/model/user';
import { SignService } from './sign/sign.service';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';

import 'rxjs/add/operator/merge';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import {Job} from './model/job';
import {flyIn} from './animations/fly-in';

declare var $: any;
declare var toastr: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SignService],
  animations: [flyIn]
})
export class AppComponent {
  public user: User = new User();
  public currentUser: User;
  private activityJobs: Job[];
  private partJobs: Job[];

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public signService: SignService,
    public toastsManager: ToastsManager,
    public vcr: ViewContainerRef
  ) {
    this.toastsManager.setRootViewContainerRef(vcr);
  }


  ngDoCheck() {

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log('6666666');
	console.log('6666666');
  }

  public doLogin(): void {
    this.signService.login(this.user);
    this.router.navigateByUrl('index');
  }

  public doLogout(): void {
    this.signService.logout();
    toastr.success('您已成功退出捷居招聘网！', '系统提示');
    this.router.navigateByUrl('/index');
  }

}
