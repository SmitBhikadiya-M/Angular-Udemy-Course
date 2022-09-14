import { HttpErrorResponse } from "@angular/common/http";
import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { AlertComponent } from "../shared/alert/alert.component";
import { PlaceholderDirective } from "../shared/directives/placeholder.directive";
import { AuthResponseData, AuthService } from "./auth.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent implements OnDestroy {
    isLoggingMode = true;
    isLoading = false;
    error = null;
    @ViewChild('authForm') authForm: NgForm;
    @ViewChild(PlaceholderDirective) alertHost: PlaceholderDirective; 
    private errSubscription: Subscription;

    constructor( 
        private authService: AuthService,
        private router: Router,
        private componentFactoryResolver: ComponentFactoryResolver
        ) { }

    onSwitchMode() {
        this.isLoggingMode = !this.isLoggingMode;
    }

    ngOnDestroy(): void {
        if( this.errSubscription ){
            this.errSubscription.unsubscribe();
        }
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
                //this.error = err; 
                this.onShowError(err);
                this.isLoading = false;
            }
        });

        this.authForm.reset();
    }

    onHandleError(){
        this.error = null;
    }

    onShowError(err: string){
        // const alertCmp = new AlertComponent();
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
        const hostViewContainerRef = this.alertHost.viewContainerRef;
        hostViewContainerRef.clear();
        const componentRef = hostViewContainerRef.createComponent(componentFactory);
        componentRef.instance.message = err;
        this.errSubscription = componentRef.instance.close.subscribe(()=>{
            this.errSubscription.unsubscribe();
            hostViewContainerRef.clear(); 
        });
    }
}