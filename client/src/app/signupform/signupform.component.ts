import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {
  formInfo = {
    username:"",
    password:""
  }
  error: string;

  constructor(public auth:AuthService, public router: Router) { }

  ngOnInit() {
  }

  signup(){
    this.auth.signup(this.formInfo.username, this.formInfo.password)
      .subscribe(
        (user) => this.router.navigate(['profile']),
        (err) => this.error = err
      );
  }
}
