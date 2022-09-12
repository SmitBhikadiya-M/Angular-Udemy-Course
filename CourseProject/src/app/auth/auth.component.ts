import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {
    isLoggingMode = true;
    @ViewChild('authForm') authForm: NgForm;

    onSwitchMode() {
        this.isLoggingMode = !this.isLoggingMode;
    }

    onSubmit(){
        console.log(this.authForm.value);
        
    }
}