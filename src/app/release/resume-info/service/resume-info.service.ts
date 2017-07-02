import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/filter';


import {ThinkJob} from '../../../center/model/thinkJob';
import {UserInfo} from '../../../center/model/userInfo';
import {Experience} from '../../../center/model/experience';
import {Education} from '../../../center/model/education';

@Injectable()
export class ResumeInfoService {

  private userInfo = '/api/userInfo';
  private thinkJob = '/api/thinkJob';
  private experience = '/api/experience';
  private education = '/api/education';

  // private userInfo = '/src/app/mock-data/resume/userInfo.json';
  // private thinkJob = '/src/app/mock-data/resume/thinkJob.json';
  // private experience = '/src/app/mock-data/resume/experience.json';
  // private education = '/src/app/mock-data/resume/education.json';


  constructor(private http: Http) { }

  getUserInfo( userId: string): Observable<UserInfo> {
    return this.http.get(this.userInfo)
      .map(userInfos => userInfos.json()
        .filter(userInfo => {
          if (userInfo.userId === userId) {
            return userInfo;
          }
        }));
  }

  getThinkJob( userId: string): Observable<ThinkJob> {
    return this.http.get(this.thinkJob)
      .map(thinkJobs => thinkJobs.json()
        .filter(thinkJob => {
          if (thinkJob.userId === userId) {
            return thinkJob;
          }
        }));
  }
  getExperience( userId: string): Observable<Experience> {
    return this.http.get(this.experience)
      .map(experiences => experiences.json()
        .filter(experience => {
          if (experience.userId === userId) {
            return experience;
          }
        }));
  }
  getEducation( userId: string): Observable<Education> {
    return this.http.get(this.education)
      .map(educations => educations.json()
        .filter(education => {
          if (education.userId === userId) {
            return education;
          }
        }));
  }


}
