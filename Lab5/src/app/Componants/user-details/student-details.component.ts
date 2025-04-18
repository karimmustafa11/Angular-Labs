import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../Services/users.service';

@Component({
  selector: 'app-student-details',
  imports: [],
  templateUrl: './student-details.component.html',
  styles: ``
})
export class UserDetailsComponent {
  Id = 0
  student: any
  constructor(myActivated: ActivatedRoute, private userServise: UsersService) {
    this.Id = myActivated.snapshot.params['id'];
  }

  ngOnInit() {
    this.userServise.getUser(this.Id).subscribe({
      next: (data) => {
        console.log(data)
        this.student = data
      },
      error: (err) => { console.log(err) }

    })
  }

}
