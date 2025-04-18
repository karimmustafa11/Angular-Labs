import { Component } from '@angular/core';
import { UsersService } from '../../Services/users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-user',
  imports: [],
  providers: [UsersService],
  templateUrl: './add-user.component.html',
  styles: ``
})
export class AddUserComponent {
  constructor(private serv: UsersService, private router: Router) { }

  Add(name: string, age: number, email: string, phone: string) {
    let newStudent = { name, age, email, phone }
    this.serv.addUser(newStudent).subscribe();
    this.router.navigate(['/']);

  }
}
