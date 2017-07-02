import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/filter';

import { Job } from '../../../model/job';

@Injectable()
export class PreachJobService {
  private releaseJobsApi = '/api/releaseJob';
  // private releaseJobsApi = '/src/app/mock-data/jobinfo.json';

  constructor(private http: Http) { }

  getJobs(jobType): Observable<Job[]> {
    return this.http.get(this.releaseJobsApi)
      .map(jobes => jobes.json().filter(job => {
        if ((job.jobType === jobType) && (job.indexShow === 'true')) {
          console.log('该职位类型出现了！！！！');
          return job;
        }
      }));
  }

}
