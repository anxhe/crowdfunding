import {Injectable, EventEmitter} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

const API = "http://localhost:3000";

@Injectable()
export class CauseService {

  private headers = new Headers({'Content-Type' : 'application/json'});
  private options = new RequestOptions({ headers: this.headers,  withCredentials:true });

  cause: any;

  constructor(private http: Http) { }

  getCauseList():Observable<any>{
    return this.http.get(`${API}/causes`)
      .map(res => res.json());
  }

  getCauseByID(id):Observable<any>{
    return this.http.get(`${API}/causes/${id}`)
      .map(res => res.json());
  }

  createCause(cause){
    return this.http.post(`${API}/causes`, cause, this.options)
      .map(res => res.json())
  }

  getCreatorCause(id) {
    return this.http.get(`${API}/creator/causes/${id}`, this.options)
      .map(res => res.json());
  }

  addMembers(causeId, emails) {
   return this.http.put(`${API}/creator/causes/${causeId}/members`, {members: emails}, this.options)
      .map(res => res.json());
  }

  addBudget(causeId, item) {
   return this.http.post(`${API}/creator/causes/${causeId}/budget_item`, item , this.options)
      .map(res => res.json());
  }

  deleteItem(causeId, item) {
    return this.http.delete(`${API}/creator/causes/${causeId}/budget_item/${item._id}` , this.options)
       .map(res => res.json());

  }

}
