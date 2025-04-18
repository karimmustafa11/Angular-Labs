import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


interface IStudent {
  name: string
  age: string
}

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Input() students: IStudent[] = [];

}
