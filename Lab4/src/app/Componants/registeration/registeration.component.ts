import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registeration',
  imports: [ReactiveFormsModule],
  templateUrl: './registeration.component.html',
  styles: ``
})
export class RegisterationComponent {
  @Output() myEvent = new EventEmitter();



  myForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    age: new FormControl("", [Validators.min(15), Validators.max(30)])
  });

  get Name() {
    return this.myForm.controls["name"].valid;
  }

  get Age() {
    return this.myForm.controls["age"].valid;
  }

  get touched() {
    return this.myForm.touched
  }



  Add() {
    if (this.myForm.status == "VALID") {
      const name = this.myForm.controls["name"].value;
      const age = this.myForm.controls["age"].value;
      this.myEvent.emit({ name, age });
      console.log(this.myForm)
    }
  }
}
