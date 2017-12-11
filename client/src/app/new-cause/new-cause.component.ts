import { Component, OnInit } from '@angular/core';
import { CauseService } from '../services/cause.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-cause',
  templateUrl: './new-cause.component.html',
  styleUrls: ['./new-cause.component.css']
})
export class NewCauseComponent implements OnInit {

  cause: Object = {};
  newObjective: String;
  objectives: Array<object> = [];

  constructor( public service: CauseService, private router: Router) {

   }

  ngOnInit() {
  }

  addObjectives(){
    this.objectives.push(this.newObjective);
    this.newObjective = '';

  }

  newCause(cause){
    cause.objectives = this.objectives;
    this.service.createCause(cause)
      .subscribe(
        (data) => {
          this.router.navigate([`causes/${data.cause._id}`])
        }
      )
  }

}
