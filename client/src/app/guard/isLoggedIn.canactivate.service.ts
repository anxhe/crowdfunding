import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable }  from '@angular/core';
import { Observable }  from 'rxjs/Rx';
import {AuthService} from '../services/auth.service';


// const timeout = (nS) => new Promise((resolve) => setTimeout(resolve,nS * 1000));

@Injectable()
export class IsLoggedInService implements CanActivate {

  constructor(private auth:AuthService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log("Checking can activate");

    const isAuth = this.auth.getUser() ? true : false

    if(!isAuth){
      this.router.navigate(['login']);
    }
    return isAuth

  }
}
