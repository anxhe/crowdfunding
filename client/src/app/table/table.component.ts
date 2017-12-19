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

  @Output() onBudgetUpdate = new EventEmitter<any>();

  newItem: any = {};

  constructor( public CauseService: CauseService, public route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  deleteFieldValue(index) {
    let item = this.cause.budget.splice(index, 1)[0];

    this.CauseService.deleteItem(this.cause._id, item).subscribe(data => {
      this.onBudgetUpdate.emit(this.cause)
    });
  }

  addBudget() {
    this.CauseService.addBudget(this.cause._id, this.newItem).subscribe(data => {
      this.cause.budget = data.cause.budget;
      this.newItem = {};
      this.onBudgetUpdate.emit(this.cause);
    })
  }

}
