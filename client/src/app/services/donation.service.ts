import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

const BASEURL = environment.BASEURL + '/api';

@Injectable()
export class DonationService {

  private headers = new Headers({'Content-Type' : 'application/json'});
  private options = new RequestOptions({ headers: this.headers,  withCredentials:true });

  constructor(private http: Http) {
  }

  donateToCause(causeId, donation):Observable<any>{
    return this.http.post(`${BASEURL}/causes/${causeId}/donate`, donation, this.options)
      .map(res => res.json());
  }
}
