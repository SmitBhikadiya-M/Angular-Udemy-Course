import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription, Observable } from 'rxjs';

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
        if(count===5){
          observer.complete();
        }
        if(count > 3){
          observer.error(new Error('Count is greater than 3'));
        }
      },1000);
    });

    this.firstObsSubscription = customIntervalObservable.subscribe((data)=>{
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
