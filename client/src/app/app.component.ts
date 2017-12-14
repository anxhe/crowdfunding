import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Router } from '@angular/router';

import { AuthModalComponent } from './auth-modal/auth-modal.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   modal: BsModalRef;
   user: Object;

  constructor(public auth:AuthService,
              public router: Router,
              private modalService: BsModalService) {
  };

  openAuthModal() {
    this.modal = this.modalService.show(AuthModalComponent, { class: 'modal-sm'} );
    this.modal.content.action = 'login';
  }

  logout() {
    this.auth.logout().subscribe(event => {
      this.router.navigate(['/']);
    });
  }
}
