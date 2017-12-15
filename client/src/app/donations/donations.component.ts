import { Component, OnInit, Input } from '@angular/core';
import { CauseService } from '../services/cause.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})

export class DonationsComponent implements OnInit {

  @Input() donations: any[] = [];

  constructor(public causeservice: CauseService, public route: ActivatedRoute) {
  }

  ngOnInit() {}

}
