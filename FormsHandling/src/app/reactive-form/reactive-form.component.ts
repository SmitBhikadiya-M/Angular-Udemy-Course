import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm!: FormGroup;
  
  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [ Validators.required ]),
        'email': new FormControl(null, [ Validators.email, Validators.required ]),
      }),
      'gender': new FormControl('male', [ Validators.required ]),
      'hobbies': new FormArray([])
    });
  }

  onSubmit(){
    console.log(this.signupForm.value);
  }

  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray> this.signupForm.get('hobbies')).push(control);
  }
 get hobbyControls(){
    return (<FormArray> this.signupForm.get('hobbies')).controls;
  }

}
