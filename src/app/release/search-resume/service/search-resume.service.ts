import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

import {ThinkJob} from '../../../center/model/thinkJob';


@Injectable()
export class SearchResumeService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private releaseUrl = '/release/form';  // URL to web api
  // private thinkJobsApi = '/src/app/mock-data/resume/thinkJob.json';  // URL to web api
  private thinkJobsApi = '/api/thinkJob';  // URL to web api

  constructor(private http: Http) { }

  getThinkJobs(): Observable<ThinkJob[]> {
    return this.http.get(this.thinkJobsApi)
      .map(thinkJobs => thinkJobs.json() as ThinkJob[]);
  }

}
