import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import {CauseService} from '../services/cause.service'

@Component({
  selector: 'app-cause-details',
  templateUrl: './cause-details.component.html',
  styleUrls: ['./cause-details.component.css']
})
export class CauseDetailsComponent implements OnInit {

    cause:any;

  constructor(public router:Router, public causeservice :CauseService, public route:ActivatedRoute) {
        route.params.subscribe(params => {
        this.causeservice.getCauseByID(params['id'])
        .subscribe(data => this.cause = data.cause);
      })
  }
  ngOnInit() {
  }

}