import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription, Observable, map, filter } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription;

  constructor() {
  }

  ngOnInit() {
    const customIntervalObservable = new Observable((observer)=>{
      let count = 0;
      setInterval(()=>{
        observer.next(count++);
        if(count===10){
          observer.complete();
        }
        if(count > 8){
          observer.error(new Error('Count is greater than 3'));
        }
      },1000);
    });

    this.firstObsSubscription = customIntervalObservable.pipe(filter(data => {
      return Number(data)%2===0;
    }),map((data:number)=>{
      return `Round: ${data+1}`;
    })).subscribe((data)=>{
      console.log(data);
    }, error => {
      alert(error);
    }, () => {
      alert('Observed!!');
    })
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }

}
