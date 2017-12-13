import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CauseService } from '../services/cause.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  causeList:Array<any> = [];
  user: any;

  constructor(public auth:AuthService,
              public causeService: CauseService,
              public router: Router) {
    this.user = this.auth.user;

    if (this.user.role == "creatorcause") {
      console.log("entra "+ this.user.role );
      this.causeService.getCauseListCreator().subscribe(cause => {
        this.causeList = cause;
        console.log(cause)
      });
    } else if (this.user.role == "admin") {
      this.causeService.getCauseListAdmin().subscribe(cause => {
        this.causeList = cause;
      });
    }
  }
}
