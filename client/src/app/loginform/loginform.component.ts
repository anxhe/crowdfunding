import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';


interface LoginForm{
  username:string;
  password:string;
}

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  formInfo:LoginForm = {
    username: "",
    password: ""
  };
  error: string;

  constructor(public auth:AuthService , public router: Router){}

  ngOnInit() {
  }

  login(){
    const {username, password} = this.formInfo;
    if(username != "" && password != ""){
      this.auth.login(username, password)
      .subscribe(
        (user) => this.router.navigate(['profile']),
        (err) => this.error = err
      );
    }
  }
}
