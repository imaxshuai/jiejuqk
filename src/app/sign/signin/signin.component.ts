import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';

import { SignService } from '../sign.service';
import { User } from '../model/user';
import { flyIn } from '../../animations/fly-in';

declare var $: any;
declare var toastr: any;

@Component ({
  selector: 'app-sign-in',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [SignService],
  animations: [ flyIn ]
})

export class SigninComponent implements OnInit {

  public user: User = new User();
  public currentUser: any;
  public error: Error;


  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public signService: SignService
  ) { }

  ngOnInit() {

    let activatedRouteSnapshot: ActivatedRouteSnapshot = this.activatedRoute.snapshot;
    let routerState: RouterState = this.router.routerState;
    let routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;

  }

  public doLogin(): void {
    this.signService.login(this.user);
  }

}
