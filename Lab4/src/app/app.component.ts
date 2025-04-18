import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./Componants/home/home.component";
import { RegisterationComponent } from "./Componants/registeration/registeration.component";
import { CommonModule } from '@angular/common';

interface IStudent {
  name: string
  age: string
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, RegisterationComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lab3';
  // students: IStudent[] = [];
  studentObj: any

  GetData(data: any) {
    // console.log(data[0])
    // const lastStudent = data[data.length - 1];
    this.studentObj = data;

  }


}
