export class CounterService{
    incActiveToInactive = 0;
    incInactiveToActive = 0;

    incrementActiveToInactive(){
        this.incActiveToInactive++;
        console.log(`Active To Inactive: ${this.incActiveToInactive}`);
    }

    incrementInactiveToActive(){
        this.incInactiveToActive++;
        console.log(`Inactive To Active: ${this.incInactiveToActive}`);
    }
}