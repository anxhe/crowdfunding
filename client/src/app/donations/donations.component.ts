import { Component, OnInit } from '@angular/core';
import { CauseService } from '../services/cause.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent implements OnInit {

  donations:any;
  user:any;

  constructor(public causeservice: CauseService, public route: ActivatedRoute) {
      route.params.subscribe(params => {
        this.causeservice.getCauseByID(params['id'])
          .subscribe(data => {
            console.log(data.cause.donations[10]._user)
            this.donations = data.cause.donations;
          });

      });
  }

  ngOnInit() {}

}
