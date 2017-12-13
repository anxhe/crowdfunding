import { Component, OnInit } from '@angular/core';
import { CauseService } from '../services/cause.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-CauseList',
  templateUrl: './causeList.component.html',
  styleUrls: ['./causeList.component.css']
})

export class CauseListComponent implements OnInit {

  causeList:Array<any> = [];
  user: Object;

  constructor(public cause: CauseService, public auth: AuthService) {
      this.cause.getCauseList().subscribe(data => {
        this.causeList = data.causes;
      })
   }

  ngOnInit() {
  }

}
