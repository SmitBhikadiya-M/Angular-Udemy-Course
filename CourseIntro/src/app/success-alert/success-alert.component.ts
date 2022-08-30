import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
    template: `
        <div>This is a success message!!</div>
    `,
    styles: [`
        div{
            width: 100%;
            padding: 10px 15px;
            color: #155724;
            border-radius: 5px;
            background-color: #d4edda;
        }
    `]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
