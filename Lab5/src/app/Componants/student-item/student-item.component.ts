import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  imports: [RouterModule]
})
export class UserItemComponent {
  @Input() student: any;
}
