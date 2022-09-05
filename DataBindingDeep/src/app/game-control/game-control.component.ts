import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  gameState:number = 0;
  eventInterval;
  @Output() intervalFired = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  startGame(){
    this.eventInterval = setInterval(()=>{
      this.intervalFired.emit(this.gameState++);
    },1000)
  }

  stopGame(){
   clearInterval(this.eventInterval);
  }

}
