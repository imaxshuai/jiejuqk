import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

import {SearchInfo} from '../../../model/searchInfo';

declare var toastr: any;

@Injectable()
export class SearchService {

  private searchUrl = '/api/search/fullJob';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(
    private http: Http,
  ) { }

  search(searchInfo) {
    return this.http
      .post(this.searchUrl, JSON.stringify(searchInfo), {headers: this.headers})
      .map(res => res.json());
  }

}
