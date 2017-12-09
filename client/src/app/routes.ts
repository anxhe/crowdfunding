import { Routes } from '@angular/router';
import {CauseListComponent} from './causeList/causeList.component';
import {UserprofileComponent} from './userprofile/userprofile.component';
import {LoginformComponent} from './loginform/loginform.component';
import {SignupformComponent} from './signupform/signupform.component';

import {IsLoggedInService} from './guard/isLoggedIn.canactivate.service';

export const routes: Routes = [
    { path: '', component: CauseListComponent },
    { path: 'user',  component: UserprofileComponent,canActivate: [ IsLoggedInService ]  },
    { path: 'login',  component: LoginformComponent,  },
    { path: 'signup',  component: SignupformComponent, },
    { path: 'profile', component: UserprofileComponent, },
    { path: '**', redirectTo: '' }
];
