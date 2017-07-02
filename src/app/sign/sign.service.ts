import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

import { User } from './model/user';
import {Router} from '@angular/router';

declare var toastr: any;

@Injectable()
export class SignService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private signupUrl = '/signup';  // URL to web api
  // private signinUrl = '/src/app/mock-data/user-login.json';
  private signinUrl = '/api/user';
  public subject: Subject<User> = new Subject<User>();

  constructor(
    private http: Http,
    private router: Router
  ) { }

  public get currentUser(): Observable<User> {
    return this.subject.asObservable();
  }

  getUserToValid(): Observable<User[]> {
    return this.http.get(this.signinUrl).map(users => users.json());
  }

  register(user: any) {
    return this.http
      .post(this.signupUrl, JSON.stringify(user), {headers: this.headers})
      .map(res => res.json());
  }

  public login(userInfo: User) {
    return this.http
      .get(this.signinUrl)
      .map((response: Response) => {
        let user = response.json().filter(user => (user.username === userInfo.username || user.tel === userInfo.username) && user.password === userInfo.password);
        if (user && typeof(user[0]) !== 'undefined') {
          localStorage.setItem('currentUser', JSON.stringify(user[0]));
          this.subject.next(Object.assign({}, user));
          this.router.navigateByUrl('index');
          toastr.success('您已成功登录捷居招聘网!', '系统提示');

        }else {
          toastr.error('用户名或密码错误，请重新输入!', '错误提示');
        }
        return response;
      })
      .subscribe(
        data => {
          console.log('login success>');
        },
        error => {
          console.error(error);
        }
      );
  }

  public logout(): void {
    localStorage.removeItem('currentUser');
    this.subject.next(Object.assign({}));
  }

}
