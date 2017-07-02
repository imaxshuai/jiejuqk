import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/filter';

import { Job } from '../model/job';
import { Company } from '../model/company';

@Injectable()
export class JobService {
  private releaseJobsApi = '/api/releaseJob';
  // private releaseJobsApi = '/src/app/mock-data/jobinfo.json';
  private companyInfoApi = '/api/company';
  // private companyInfoApi = '/src/app/mock-data/companyInfo.json';

  constructor(private http: Http) { }

  getJobs(jobType): Observable<Job[]> {
    return this.http.get(this.releaseJobsApi)
      .map(jobes => jobes.json().filter(job => {
        if (job.jobType === jobType) {
          console.log('该职位类型出现了！！！！');
          return job;
        }
      }));
  }
  getJob( id: string): Observable<Job> {
    return this.http.get(this.releaseJobsApi)
      .map(jobes => jobes.json()
      .filter(job => {
        if (job._id === id) {
          return job;
        }
      }));
  }

  getCompany( id: string): Observable<Job> {
    return this.http.get(this.companyInfoApi)
      .map(companys => companys.json()
        .filter(company => {
          if (company._id === id) {
            return company;
          }
        }));
  }

}
