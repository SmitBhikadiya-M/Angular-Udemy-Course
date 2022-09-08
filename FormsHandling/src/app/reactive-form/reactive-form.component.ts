import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm!: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];

  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, { validators: [Validators.email, Validators.required], asyncValidators: [this.forbiddenEmails] }),
      }),
      'gender': new FormControl('male', [Validators.required]),
      'hobbies': new FormArray([])
    });

    // 
    // this.signupForm.valueChanges.subscribe((value)=>{
    //   console.log(value);
    // })

    //
    // this.signupForm.statusChanges.subscribe((status)=>{
    //   console.log(status);
    // })

    // set default value for all the fields
    this.signupForm.setValue({
      'userData': {
        'username': 'Max',
        'email': 'test@test.com'
      },
      'gender': 'male',
      'hobbies': []
    })

    // set default value to a perticuler formControl
    this.signupForm.patchValue({
      'gender': 'female'
    })
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  get hobbyControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  forbiddenNames(control: FormControl): { [s:string]: boolean } | null {
    if(this.forbiddenUsernames.indexOf(control.value) !== -1){
      return {
        'nameIsForbidden': true
      }
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<{ 'emailIsForbidden' : boolean } | null> | Observable<any> {
    const promise = new Promise<any>((resolve, reject)=>{
      setTimeout(()=>{
        if(control.value === 'test@test.com'){
          resolve({ 'emailIsForbidden': true });
        }else{
          resolve(null);
        }
      }, 1500)
    })
    return promise;
  }

}
