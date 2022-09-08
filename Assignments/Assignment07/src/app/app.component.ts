import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Assignment07';
  projectForm!: FormGroup;

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, { validators: [Validators.required], asyncValidators: [this.asyncCustomProjectNameValidator] }),
      'email': new FormControl(null, { validators: [Validators.required, Validators.email] }),
      'status': new FormControl(null, { validators: [Validators.required] }),
    })
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }

  customProjectNameValidator(control: FormControl): { [s: string]: boolean } | null {
    if (control.value === "Test") {
      return {
        isNameForbidden: true
      }
    }
    return null;
  }

  asyncCustomProjectNameValidator(control: FormControl): Promise<{ 'isNameForbidden': boolean } | null> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "Test") {
          resolve({
            isNameForbidden: true
          })
        } else {
          resolve(null);
        }
      }, 1500)
    });
    return promise;
  }

}
