import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

import { User } from '../../../sign/model/user';
import { Company } from '../../model/company';

@Injectable()
export class CompanyService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private companyApiUrl = '/api/company';  // URL to web api
  private companyUrl = '/center/company';  // URL to web api

  public subject: Subject<User> = new Subject<User>();

  constructor(private http: Http) { }

  public get currentUser(): Observable<User> {
      return this.subject.asObservable();
  }

  public getCompany( userId: string): Observable<Company> {
    return this.http.get(this.companyApiUrl)
      .map(companys => companys.json()
        .filter(company => {
          if (company.userId === userId) {
            return company;
          }
        }));
  }

  public postCompany(company: any): Observable<Company> {
    return this.http
      .post(this.companyUrl, JSON.stringify(company), {headers: this.headers})
      .map(res => res.json()as Company);
  }
}
