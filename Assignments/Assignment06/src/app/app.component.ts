import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('myForm') myForm: NgForm;
  title = 'Assigment06';

  onSubmit(){
    console.log(this.myForm.value);
  }
}
