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
    containerCssClass: 'form-control',
    width: '85%',
    multiple: true,
    placeholder: 'Type emails here pepita@example.com',
    tags: true,
    theme: 'bootstrap',
    tokenSeparators: [',', ' '],
  };

  public cause: any = {};
  public newMembers: Array<string> = [];

  constructor(private route:ActivatedRoute,
              private router:Router,
              private causeService:CauseService) {
    this.route.params.subscribe(params => {
      this.loadCause(params['id']);
    })
  }

  loadCause(id) {
    this.causeService.getCauseByID(id).subscribe(data => {
      this.cause = data.cause
    })
  }

  addMembers() {
    this.causeService.addMembers(this.cause._id, this.newMembers).subscribe(data => {
      this.cause.members = data.members;
      this.newMembers = [];
    })
  }

  userAdded(data: {value: string[]}) {
     this.newMembers = data.value;
  }

  refreshCauseTotals(cause) {
    this.loadCause(cause._id);
  }

  submit(){
    this.causeService.updateCauseStatus(this.cause._id, "pending").subscribe(status => {
      this.router.navigate([`causes/${this.cause._id}`]);
    });
  }

  ngOnInit() { }
}
