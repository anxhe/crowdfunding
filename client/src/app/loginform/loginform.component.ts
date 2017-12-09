import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';


interface LoginForm{
  email:string;
  password:string;
}

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  formInfo:LoginForm = {
    email: "",
    password: ""
  };
  error: string;

  constructor(public auth:AuthService , public router: Router){}

  ngOnInit() {
  }

  login(){
    const {email, password} = this.formInfo;
    if(email != "" && password != ""){
      this.auth.login(email, password)
      .subscribe(
        (user) => this.router.navigate(['profile']),
        (err) => this.error = err
      );
    }
  }
}
