import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError } from "rxjs";
import { environment } from "src/environments/environment";

export interface AuthResponseData {
    kind: string,
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered?: boolean
}

@Injectable({
    providedIn: 'root'
})
export class AuthService{
    private signupEndpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseApiKey}`;
    private singinEndpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseApiKey}`

    constructor( private http: HttpClient ){}

    signUp(email: string, password: string){
        return this.http.post<AuthResponseData>(
            `${this.signupEndpoint}`,
            {
                email, 
                password, 
                returnSecureToken: true
            }
        ).pipe( catchError(this.handleError) )
    }

    login(email:string, password:string){
        return this.http.post<AuthResponseData>(
            `${this.singinEndpoint}`,
            {
                email, 
                password, 
                returnSecureToken: true
            }
        ).pipe( catchError(this.handleError) )
    }

    private handleError(errorRes: HttpErrorResponse){
        let errorMessage = 'An unknown error occured!';
        if(!errorRes.error || !errorRes.error.error){
            return throwError(()=>errorMessage);
        }
        switch( errorRes.error.error.message ){
            case 'EMAIL_EXISTS':
                errorMessage = 'This email is exits already';
                break;
            case 'EMAIL_NOT_FOUND':
            case 'INVALID_PASSWORD':
                errorMessage = 'Incorrect Password or username!!!'
                break;
        } 
        return throwError(()=>errorMessage); 
    }
}