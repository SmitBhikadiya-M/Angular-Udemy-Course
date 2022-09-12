import { HttpErrorResponse } from "@angular/common/http";
import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthResponseData, AuthService } from "./auth.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {
    isLoggingMode = true;
    isLoading = false;
    error = null;
    @ViewChild('authForm') authForm: NgForm;


    constructor( 
        private authService: AuthService,
        private router: Router
        ) { }

    onSwitchMode() {
        this.isLoggingMode = !this.isLoggingMode;
    }

    onSubmit(){
        this.isLoading = true;
        this.error = null;
        if( this.authForm.invalid ){
            this.error = "Form fields must be validated!!!"
            return;
        }

        const formdata = this.authForm.value;
        let authObs = new Observable<AuthResponseData>();
        
        if(this.isLoggingMode){
            authObs = this.authService.login(formdata.email, formdata.password);
        }else{
            authObs = this.authService.signUp(formdata.email, formdata.password);
        }

        authObs.subscribe({
            next: (res)=>{
                console.log(res);
                this.isLoading = false;
                this.router.navigate(['/recipes'])
            },
            error: (err)=>{
                this.error = err; 
                this.isLoading = false;
            }
        });

        this.authForm.reset();
    }
}