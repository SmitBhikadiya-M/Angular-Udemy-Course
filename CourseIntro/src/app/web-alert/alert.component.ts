import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-web-alert',
  template: `<div>Thisi is an alert. {{ message }}</div>`,
  styles: [`
    div{
      color: white;
      background-color: black;
      padding: 10px 20px;
      borderRadius: 10px;
    }
  `]
})
export class WebAlertComponent{
  @Input() message!:string;
}
