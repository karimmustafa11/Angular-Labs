import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../Services/users.service';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { UserItemComponent } from "../student-item/student-item.component";


@Component({
  selector: 'app-users',
  providers: [UsersService],
  imports: [RouterModule, UserItemComponent],
  templateUrl: './users.component.html',
  styles: ``
})
export class UsersComponent implements OnInit {
  AllData: any = [];

  constructor(public userservice: UsersService, private router: Router) { }

  ngOnInit() {
    this.getUsers();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.getUsers();
      });
  }

  getUsers() {
    this.userservice.getAllUsers().subscribe({
      next: (data) => {
        this.AllData = data;
      },
      error: (err) => console.log(err)
    });
  }
}
