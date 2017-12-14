import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
import {CauseService} from '../services/cause.service';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-cause-details',
  templateUrl: './cause-details.component.html',
  styleUrls: ['./cause-details.component.css']
})
export class CauseDetailsComponent implements OnInit {

  cause:any;
  user:any;
  video:any;

  constructor(public auth:AuthService,
              public router:Router,
              public causeservice:CauseService,
              public route:ActivatedRoute,
              private videoService: EmbedVideoService){
    this.user = this.auth.user;
      route.params.subscribe(params => {
        this.causeservice.getCauseByID(params['id'])
          .subscribe( data  => {
            this.cause = data.cause;
            this.video = this.videoService.embed(data.cause.videourl, { attr: { class: 'embed-responsive-item'}});
        },);
      })
  }
  ngOnInit() {
  }

}
