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
  questionAnswer = '';
  genders = ['male', 'female'];
  submitted = false;
  user = {
    username: '',
    email: '',
    secretQuetions: '',
    answer: '',
    gender: ''
  }

  suggestUserName() {
    // this.ngForm.setValue({
    //   userData: {
    //     username: 'MyUsername',
    //     email: ''
    //   },
    //   select: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // })
    this.ngForm.form.patchValue({
      userData: {
        username: 'HelloIAmUsername'
      }
    })
  }

  onSubmit(){
    this.user.username = this.ngForm.value.userData.username;
    this.user.email = this.ngForm.value.userData.email;
    this.user.secretQuetions = this.ngForm.value.select;
    this.user.answer = this.ngForm.value.questionAnswer;
    this.user.gender = this.ngForm.value.gender;
    this.submitted = true;

    this.ngForm.reset();
  }

  onReset(){
    this.submitted = false;
  }
}
