import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CauseService } from '../services/cause.service';
import { AdminService } from '../services/admin.service';


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
              public admin: AdminService) {
    this.user = this.auth.user;

    if (this.user.role == "creatorcause") {
      this.causeService.getCauseListCreator().subscribe(cause => {
        this.causeList = cause;
      });
    } else if (this.user.role == "admin") {
      this.causeService.getCauseListAdmin().subscribe(data => {
        this.causeList = data.causes;
      });
    }
  }

  approve(index){
    this.admin.updateCauseStatus(this.causeList[index]._id, "approved")
      .subscribe( data =>this.causeList[index] = data.result )
  }

  reject(index){
    this.admin.updateCauseStatus(this.causeList[index]._id, "reject")
      .subscribe( data =>this.causeList[index] = data.result )
  }
}
