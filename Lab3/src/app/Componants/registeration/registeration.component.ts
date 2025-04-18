import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface IStudent {
  name: string
  age: string
}
@Component({
  selector: 'app-registeration',
  imports: [FormsModule,
    CommonModule],
  templateUrl: './registeration.component.html',
  styleUrl: './registeration.component.css'
})
export class RegisterationComponent {
  name = ""
  age = ""
  Students: IStudent[] = [];
  @Output() myEvent = new EventEmitter();

  Add() {
    if ((+this.age >= 10 && +this.age <= 30) && (this.name.length >= 3)) {
      let student: IStudent = { name: this.name, age: this.age };
      this.Students.push(student);
      console.log(this.Students)
      this.myEvent.emit(this.Students);

    }
  }


}
