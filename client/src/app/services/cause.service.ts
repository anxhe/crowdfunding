import {Injectable, EventEmitter} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {environment} from '../../environments/environment';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

const BASEURL = environment.BASEURL;

@Injectable()
export class CauseService {

  private headers = new Headers({'Content-Type' : 'application/json'});
  private options = new RequestOptions({ headers: this.headers,  withCredentials:true });

  cause: any;

  constructor(private http: Http) { }

  getCauseList():Observable<any>{
    return this.http.get(`${BASEURL}/causes`)
      .map(res => res.json());
  }

  getCauseByID(id):Observable<any>{
    return this.http.get(`${BASEURL}/causes/${id}`)
      .map(res => res.json());
  }

  createCause(cause){
    return this.http.post(`${BASEURL}/causes`, cause, this.options)
      .map(res => res.json())
  }

  getCreatorCause(id) {
    return this.http.get(`${BASEURL}/creator/causes/${id}`, this.options)
      .map(res => res.json());
  }

  addMembers(causeId, emails) {
   return this.http.put(`${BASEURL}/creator/causes/${causeId}/members`, {members: emails}, this.options)
      .map(res => res.json());
  }

  addBudget(causeId, item) {
   return this.http.post(`${BASEURL}/creator/causes/${causeId}/budget_item`, item , this.options)
      .map(res => res.json());
  }

  deleteItem(causeId, item) {
    return this.http.delete(`${BASEURL}/creator/causes/${causeId}/budget_item/${item._id}` , this.options)
       .map(res => res.json());

  }

  updateCauseStatus(causeId, status) {
    return this.http.put(`${BASEURL}/creator/causes/${causeId}/status`, {status}, this.options)
       .map(res => res.json());
  }

  getCauseListAdmin():Observable<any>{
    return this.http.get(`${BASEURL}/admin/causes`, this.options)
      .map(res => res.json());
  }

  getCauseListCreator():Observable<any>{
    return this.http.get(`${BASEURL}/creator/causes`, this.options)
      .map(res => res.json());
  }

}
