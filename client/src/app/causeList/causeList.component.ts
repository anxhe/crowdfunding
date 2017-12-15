import { Component, OnInit } from '@angular/core';
import { CauseService } from '../services/cause.service';
import { AuthService } from '../services/auth.service';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-CauseList',
  templateUrl: './causeList.component.html',
  styleUrls: ['./causeList.component.css']
})

export class CauseListComponent implements OnInit {

  causeList: Array<any> = [];
  user: Object;
  currentPage: number = 0;

  constructor(public cause: CauseService,
              public auth: AuthService,
              public videoService: EmbedVideoService) {
     this.loadCauses();
   }

  causeVideo(cause) {
    return this.videoService.embed(cause.videourl, { attr: { class: 'embed-responsive-item'}});
  }

  loadCauses() {
    this.cause.getCauseList(this.currentPage).subscribe(data => {
      data.causes.forEach(cause => this.causeList.push(cause));
      this.currentPage++;
    })
  }

  ngOnInit() {
  }

}
