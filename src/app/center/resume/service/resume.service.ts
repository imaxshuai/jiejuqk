import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

import { User } from '../../../sign/model/user';
import { UserInfo } from '../../model/userInfo';
import { ThinkJob } from '../../model/thinkJob';
import { Job } from '../../../model/job';
import { Experience } from '../../model/experience';
import { Education } from '../../model/education';

@Injectable()
export class ResumeService {
  private headers = new Headers({'Content-Type': 'application/json'});

  private userInfoApiUrl = '/api/userInfo';  // URL to web api
  private thinkJobApiUrl = '/api/thinkJob';  // URL to web api
  private experienceApiUrl = '/api/experience';  // URL to web api
  private educationApiUrl = '/api/education';  // URL to web api
  private releaseJobApi = '/api/releaseJob';  // URL to web api


  public subject: Subject<User> = new Subject<User>();

  constructor(private http: Http) { }

  public get currentUser(): Observable<User> {
    return this.subject.asObservable();
  }

  public getUserInfo( userId: string): Observable<UserInfo> {
    return this.http.get(this.userInfoApiUrl)
      .map(userInfos => userInfos.json()
        .filter(userinfo => {
          if (userinfo.userId === userId) {
            return userinfo;
          }
        }));
  }

  public getThinkJob( userId: string): Observable<ThinkJob> {
    return this.http.get(this.thinkJobApiUrl)
      .map(thinkJobs => thinkJobs.json()
        .filter(thinkJob => {
          if (thinkJob.userId === userId) {
            return thinkJob;
          }
        }));
  }

  public getExperience( userId: string): Observable<Experience> {
    return this.http.get(this.experienceApiUrl)
      .map(experiences => experiences.json()
        .filter(experience => {
          if (experience.userId === userId) {
            return experience;
          }
        }));
  }

  public getEducation( userId: string): Observable<Education> {
    return this.http.get(this.educationApiUrl)
      .map(educations => educations.json()
        .filter(education => {
          if (education.userId === userId) {
            return education;
          }
        }));
  }

  public getReleaseJobNotes(userId: string): Observable<Job[]> {
    return this.http.get(this.releaseJobApi)
      .map(jobs => jobs.json()
        .filter(job => job.userId === userId));
  }


  public postUserInfo(userInfo: any): Observable<UserInfo> {
    return this.http
      .post('/center/userInfo', JSON.stringify(userInfo), {headers: this.headers})
      .map(res => res.json()as UserInfo);
  }

  public postThinkJob(thinkJob: any): Observable<ThinkJob> {
    return this.http
      .post('/center/thinkJob', JSON.stringify(thinkJob), {headers: this.headers})
      .map(res => res.json()as ThinkJob);
  }

  public postExperience(experience: any): Observable<Experience> {
    return this.http
      .post('/center/experience', JSON.stringify(experience), {headers: this.headers})
      .map(res => res.json()as Experience);
  }

  public postEducation(education: any): Observable<Education> {
    return this.http
      .post('/center/education', JSON.stringify(education), {headers: this.headers})
      .map(res => res.json()as Education);
  }

}
