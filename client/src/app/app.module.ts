import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {routes} from './routes';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';


import { AuthService } from './services/auth.service';
import { CauseService } from './services/cause.service'
import { IsLoggedInService } from './guard/isLoggedIn.canactivate.service';
// import { CreatorService } from './services/creator.service';
import { AdminService } from './services/admin.service';
import { DonationService } from './services/donation.service';

import { EmbedVideo } from 'ngx-embed-video';
import { Select2Module } from 'ng2-select2';


import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { CauseListComponent } from './causeList/causeList.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { SignupformComponent } from './signupform/signupform.component';
import { CauseDetailsComponent } from './cause-details/cause-details.component';
import { NewCauseComponent } from './new-cause/new-cause.component';
import { EditCauseComponent } from './edit-cause/edit-cause.component';
import { TableComponent } from './table/table.component';
import { ListComponent } from './list/list.component';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { DonationsComponent } from './donations/donations.component';
import { ListDonationsComponent } from './list-donations/list-donations.component';
import { DonationModalComponent } from './donation-modal/donation-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    CauseListComponent,
    UserprofileComponent,
    SignupformComponent,
    CauseDetailsComponent,
    NewCauseComponent,
    EditCauseComponent,
    TableComponent,
    ListComponent,
    AuthModalComponent,
    DonationsComponent,
    ListDonationsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Select2Module,
    ModalModule.forRoot(),
    EmbedVideo.forRoot(),
    RouterModule.forRoot(routes)
  ],
  entryComponents: [
    AuthModalComponent
  ],
  providers: [
    AuthService,
    IsLoggedInService,
    CauseService,
    AdminService,
    DonationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
