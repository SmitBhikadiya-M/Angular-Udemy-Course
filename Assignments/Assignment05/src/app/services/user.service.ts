import { Injectable } from "@angular/core";
import { CounterService } from "./count.service";

@Injectable()
export class UserService{
    activeUser = ['mark', 'jukerberg'];
    inactiveUser = ['rock', 'bill'];

    constructor(private counterService: CounterService){}

    setToActive(id: number){
        this.activeUser.push(this.inactiveUser[id]);
        this.inactiveUser.splice(id,1);
        this.counterService.incrementInactiveToActive();
    }

    setToInactive(id: number){
        this.inactiveUser.push(this.activeUser[id]);
        this.activeUser.splice(id, 1);
        this.counterService.incrementActiveToInactive();
    }
}