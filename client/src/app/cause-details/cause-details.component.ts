import { Component, OnInit, Input } from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
import {CauseService} from '../services/cause.service';
import { EmbedVideoService } from 'ngx-embed-video';
import { DonationService } from '../services/donation.service';

@Component({
  selector: 'app-cause-details',
  templateUrl: './cause-details.component.html',
  styleUrls: ['./cause-details.component.css']
})

export class CauseDetailsComponent implements OnInit {

  currentUser: any;

  @Input() cause: any;
  video: any;

  constructor(public auth:AuthService,
              public router:Router,
              public causeservice:CauseService,
              public route:ActivatedRoute,
              private videoService: EmbedVideoService,
              private donationService: DonationService){
      route.params.subscribe(params => {
        this.causeservice.getCauseByID(params['id'])
          .subscribe(data  => {
            this.cause = data.cause;
            this.video = this.videoService.embed(data.cause.videourl, { attr: { class: 'embed-responsive-item'}});
            this.currentUser = this.auth.user;
        });
      })
  }
  ngOnInit() {
  }

  isCauseEditable() {
    return this.isUserCreator() || this.isUserMember();
  }

  isUserCreator() {
    if (this.currentUser) {
      return this.cause._creator._id == this.currentUser._id;
    }
    return false;
  }

  isUserMember() {
    if (this.currentUser) {
      return this.cause.members.includes(this.currentUser._id);
    }
    return false;
  }

  openDonationModal(amount: any) {
    const handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_rUdHllPXXTLHeP9mrZNFHKII',
      locale: 'auto',
      currency: 'eur',
      token: (token: any) => {
        this.donationService.
          donateToCause(this.cause._id, { amount: amount, isPrivate: false })
          .subscribe(data => this.cause.donations.push(data.donation))
      }
    });

    handler.open({
      name: "Fight x Change",
      description: `Donate to "${this.cause.name}"`,
      amount: amount * 100
    });

  }

}
