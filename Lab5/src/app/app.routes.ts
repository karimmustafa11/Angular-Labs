import { Routes } from '@angular/router';
import { UsersComponent } from './Componants/users/users.component';
import { ErrorComponent } from './Componants/error/error.component';
import { UserDetailsComponent } from './Componants/user-details/student-details.component';
import { AddUserComponent } from './Componants/add-user/add-user.component';

export const routes: Routes = [
    { path: "", component: UsersComponent },
    { path: "students", component: UsersComponent },
    { path: "students/:id", component: UserDetailsComponent },
    { path: "add", component: AddUserComponent },
    { path: "**", component: ErrorComponent },
];
