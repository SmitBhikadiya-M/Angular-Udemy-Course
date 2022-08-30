import { Component } from "@angular/core";

@Component({
    selector: 'app-warning-alert',
    template: `
        <div>This is a warning message!!</div>
    `,
    styles: [`
        div{
            width: 100%;
            padding: 10px 15px;
            color: #721c24;
            border-radius: 5px;
            background-color: #f8d7da;
        }
    `]
})
export class WarningAlertComponent{

}