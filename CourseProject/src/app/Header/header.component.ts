import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { User } from "../auth/user.model";
import { DataStorageService } from "../shared/services/data-storage.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit{
    collapsed = true;
    isUserLoggin = false;

    constructor( 
        private dataStorageService: DataStorageService,
        private authService: AuthService
     ){ }

    ngOnInit(): void {
        this.authService.userSubject.subscribe((user)=>{
           this.isUserLoggin = !!user;
        })
    }

    saveData(){
        this.dataStorageService.storeRecipes();
    }

    fetchData(){
        this.dataStorageService.fetchRecipes().subscribe();
    }

    onLogout(){
        this.authService.logut();
    }
}