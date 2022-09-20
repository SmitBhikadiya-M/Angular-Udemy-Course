import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GUJRATI, HINDI } from './reducer/simple.reducer';

export interface AppState{
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  message$: Observable<string>;

  constructor(private store: Store<AppState>){ }

  ngOnInit(): void {
    this.message$ = this.store.select('message');
  }

  translateToHindi(){
    this.store.dispatch( { type: HINDI } )
  }
  translateToGujrati(){
    this.store.dispatch( { type: GUJRATI } )
  }
}
