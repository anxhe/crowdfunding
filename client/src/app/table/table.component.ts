import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CauseService } from '../services/cause.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() cause: any = {};
  @Output() onCauseUpdate = new EventEmitter<any>();

  budget: Array<any> = [];
  newItem: any = {};

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
    let item = this.budget.slice(index, 1)[0];

    this.CauseService.deleteItem(this.cause._id, item).subscribe(data => {
      this.budget.slice(index, 1);
      this.cause.budget = this.budget;
      this.onCauseUpdate.emit(this.cause)
    });
  }

  addBudget() {
    this.CauseService.addBudget(this.cause._id, this.newItem).subscribe(data => {
      this.cause = data.cause;
      this.budget = data.cause.budget;
      this.newItem = {};
      this.onCauseUpdate.emit(this.cause);
    })
  }

}
