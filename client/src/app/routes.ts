import { Routes } from '@angular/router';

import {CauseListComponent} from './causeList/causeList.component';
import {CauseDetailsComponent} from './cause-details/cause-details.component';
import {NewCauseComponent} from './new-cause/new-cause.component';
import {EditCauseComponent} from './edit-cause/edit-cause.component';
import {ListComponent} from './list/list.component';

import {UserprofileComponent} from './userprofile/userprofile.component';
import {LoginformComponent} from './loginform/loginform.component';
import {SignupformComponent} from './signupform/signupform.component';

import {IsLoggedInService} from './guard/isLoggedIn.canactivate.service';

export const routes: Routes = [
    { path: 'causes', component: CauseListComponent },
    { path: 'causes/new', component: NewCauseComponent, canActivate: [ IsLoggedInService ] },
    { path: 'causes/admin', component: ListComponent },
    { path: 'causes/creator', component: ListComponent },
    { path: 'causes/:id', component: CauseDetailsComponent },
    { path: 'causes/:id/edit', component: EditCauseComponent, canActivate: [ IsLoggedInService ]},
    { path: 'user',  component: UserprofileComponent,canActivate: [ IsLoggedInService ] },
    { path: 'login', component: LoginformComponent },
    { path: 'signup', component: SignupformComponent },
    { path: 'profile', component: UserprofileComponent },
    { path: '**', redirectTo: 'causes' }
];
