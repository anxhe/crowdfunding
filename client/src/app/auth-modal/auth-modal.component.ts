import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { AuthService } from '../services/auth.service';

interface LoginForm {
  name?: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css']
})

export class AuthModalComponent implements OnInit {

  action: string;
  error: string;

  formInfo: LoginForm = {
    email: '',
    password: ''
  };

  constructor(public modal: BsModalRef, public router: Router, public auth: AuthService) {
  }

  ngOnInit() {
  }

  toggleAuthModal() {
    this.action = this.action === 'login' ? 'signup' : 'login';
  }

  login() {
    const { email, password } = this.formInfo;

    if ([email, password].every(f => f !== '')) {
      this.auth.login(email, password).subscribe(
        success => {
          this.modal.hide();
          this.router.navigate(['/causes']);
        },
        failure => this.error = failure
      );
    } else {
      this.error = 'There are missing or invalid fields.';
    }
  }

  signup() {
    const { name, email, password } = this.formInfo;

    if ([name, email, password].every(f => f !== '')) {
      this.auth.signup(name, email, password).subscribe(
        success => {
          this.modal.hide();
          this.router.navigate(['profile']);
        },
        failure => this.error = failure
      );
    } else {
      this.error = 'There are missing or invalid fields.';
    }
  }

  submit(event: KeyboardEvent): void {
    if (event.keyCode === 13) {
      this.action === 'login' ? this.login() : this.signup();
    }
  }

}
