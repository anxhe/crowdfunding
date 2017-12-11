import { Component, OnInit } from '@angular/core';
import { CauseService } from '../services/cause.service'

@Component({
  selector: 'app-CauseList',
  templateUrl: './causeList.component.html',
  styleUrls: ['./causeList.component.css']
})

export class CauseListComponent implements OnInit {

  causeList:Array<any> = []

  constructor(public cause: CauseService ) {
      this.cause.getCauseList().subscribe(data => {
        this.causeList = data.causes;
      })
   }

  ngOnInit() {
  }

}
