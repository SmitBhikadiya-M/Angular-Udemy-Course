import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedNav:any = 'recipe';

  onNavSelectEvent(e: Event){
   this.selectedNav = e; 
   console.log(this.selectedNav);
   
  }
}
