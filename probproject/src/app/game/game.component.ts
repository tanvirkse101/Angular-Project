import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();

  // @ts-ignore
  interval;
  lastNumber = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }
  // tslint:disable-next-line:typedef
 onPauseGame() {
    clearInterval(this.interval);
 }
}
