import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import {Job} from '../../../model/job';
import {Company} from '../../../model/company';



@Injectable()
export class ReleaseJobService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private releaseUrl = '/release/form';  // URL to web api

  constructor(private http: Http) { }

  public getCompany( userId: string): Observable<Company> {
    return this.http.get('/api/company')
      .map(companys => companys.json()
        .filter(company => {
          if (company.userId === userId) {
            return company;
          }
        }));
  }

  public postReleaseJob(releaseJob: any): Observable<Job> {
    return this.http
      .post(this.releaseUrl, JSON.stringify(releaseJob), {headers: this.headers})
      .map(res => res.json()as Job);
  }
}
