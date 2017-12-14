import { Component, OnInit } from '@angular/core';
import { CauseService } from '../services/cause.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  budget: Array<any> = [];
  newItem: any = {};
  cause: any = {};

  constructor( public CauseService: CauseService, public route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.CauseService.getCreatorCause(params['id']).subscribe(data => {
        this.cause = data.cause;
        this.budget = data.cause.budget;
      });
    })

  }

  ngOnInit() {
  }

  deleteFieldValue(index) {
    let item = this.budget.splice(index, 1)[0];

    this.CauseService.deleteItem(this.cause._id, item ).subscribe(data => {
      this.cause = data.cause;
      this.budget = data.cause.budget;
    });
  }

  addBudget() {
    this.CauseService.addBudget(this.cause._id, this.newItem).subscribe(data => {
      console.log({data});
      this.cause = data.cause;
      this.budget = data.cause.budget;
      this.newItem = {};
    })
  }

}
