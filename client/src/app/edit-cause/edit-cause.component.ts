import { Component, OnInit } from '@angular/core';
import { CauseService } from '../services/cause.service'
import { Select2OptionData } from 'ng2-select2';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-edit-cause',
  templateUrl: './edit-cause.component.html',
  styleUrls: ['./edit-cause.component.css']
})

export class EditCauseComponent implements OnInit {

  public options: Select2Options = {
    allowClear: true,
    dropdownCssClass: 'hidden',
    multiple: true,
    placeholder: 'Type emails here pepita@example.com',
    tags: true,
    theme: 'bootstrap',
    tokenSeparators: [',', ' '],
  };

  public cause: any = {};
  public members:Array<string> = [];

  constructor(private route:ActivatedRoute,
              private router:Router,
              private causeService:CauseService) {
    this.route.params.subscribe(params => {
      this.causeService.getCreatorCause(params['id']).subscribe(data => {
        this.cause = data.cause
        // this.members = data.cause.members.map(m => { return { id: m.email, text: m.email } });
        // this.emails = data.cause.members.map(m => m.email);
        // this.members.push({ id: data.cause._creator.email , text: data.cause._creator.email });
      });
    })
  }

  addMembers() {
    this.causeService.addMembers(this.cause._id, this.members).subscribe(data => {
      this.cause = data.cause
    })
  }

  added(data: {value: string[]}) {
     this.members = data.value;
   }

   submit(){
     this.causeService.updateCauseStatus(this.cause._id, "pending").subscribe(status => {
       this.router.navigate([`causes/${this.cause._id}`]);
     });
   }

  ngOnInit() {

  }

}
