import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { AuthService } from './services/auth.service';
import { CauseListComponent } from './causeList/causeList.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { RouterModule } from '@angular/router';
import { IsLoggedInService } from './guard/isLoggedIn.canactivate.service';
import { CauseService } from './services/cause.service'
import {routes} from './routes';
import { SignupformComponent } from './signupform/signupform.component';
import { CauseDetailsComponent } from './cause-details/cause-details.component';
import { NewCauseComponent } from './new-cause/new-cause.component';
import { EditCauseComponent } from './edit-cause/edit-cause.component';
import { Select2Module } from 'ng2-select2';
import { TableComponent } from './table/table.component';


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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Select2Module,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, IsLoggedInService, CauseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
