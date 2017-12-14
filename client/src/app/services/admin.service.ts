import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

const API = "http://localhost:3000";

@Injectable()
export class AdminService {


  private headers = new Headers({'Content-Type' : 'application/json'});
  private options = new RequestOptions({ headers: this.headers,  withCredentials:true });

  constructor(private http: Http) {
  }

  updateCauseStatus(id, status):Observable<any>{
    return this.http.put(`${API}/admin/causes/${id}/status`, {status}, this.options)
      .map(res => res.json());
  }
}
