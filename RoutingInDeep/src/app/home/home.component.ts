import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../aut.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
  }

  loadServer(id: number){
    this.router.navigate(['/servers', id, 'edit'], { queryParams: { 'allowEdit': '1' } });
  }

  doLogin(){
    this.authService.loggedIn = true;
  }


  doLogout(){
    this.authService.loggedIn = false;
  }
}
