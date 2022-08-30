import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        p{
            padding: 5px 10px;
            color: white;
        }
        .online{
            font-weight: 700;
        }
    `]
})
export class ServerComponent{
    serverId = 10;
    serverStatus = ''

    constructor () {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getStatusColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}