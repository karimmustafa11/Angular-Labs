import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';


interface IStudent {
  name: string
  age: number
}

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnChanges {
  students: IStudent[] = [];
  @Input("studentObj") onestudent: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["onestudent"].firstChange === false) {
      this.students.push(this.onestudent)
    }
  }




}
