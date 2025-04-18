import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './first-task.component.html',
  styleUrl: './first-task.component.css'
})
export class FirstTaskComponent {
  fname = "";
  current = 0;
  interval: any;

  images = [
    'Images/1.jpeg',
    'Images/2.jpeg',
    'Images/3.jpeg',
    'Images/4.jpeg',
    'Images/5.jpeg'
  ];

  get srcImag(): string {
    return this.images[this.current];
  }

  reset(e: any) {
    this.fname = "";
  }

  Next() {
    if (this.current < this.images.length - 1) {
      this.current++;
    }
  }

  Prev() {
    if (this.current > 0) {
      this.current--;
    }
  }

  Slide() {
    this.interval = setInterval(() => {
      if (this.current < this.images.length - 1) {
        this.current++;
      } else {
        this.current = 0;
      }
    }, 1000);
  }

  Stop() {
    clearInterval(this.interval);
  }
}
