import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('formElem') ngForm!: NgForm;
  defaultQuetions = 'pet';
  answer = '';
  genders = ['male', 'female']

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(){
    console.log(this.ngForm.form);
  }
}
