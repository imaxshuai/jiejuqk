import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

import { User } from '../../../sign/model/user';

@Injectable()
export class UserService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private companyApiUrl = '/api/company';  // URL to web api
  private userUrl = '/center/user';  // URL to web api

  public subject: Subject<User> = new Subject<User>();

  constructor(private http: Http) { }

  public postUser(user): Observable<any> {
    return this.http
      .post(this.userUrl, JSON.stringify(user), {headers: this.headers})
      .map(res => res.json());
  }
}
