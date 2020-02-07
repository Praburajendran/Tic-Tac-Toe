import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-play-again',
  templateUrl: './play-again.component.html',
  styleUrls: ['./play-again.component.css']
})
export class PlayAgainComponent implements OnInit {

  @Input() gameWon;

  @Output() playAgainEvent = new EventEmitter<any>();

  ngOnInit() {}

  /** Event handler emitting target value */
  clickHandler(event) {
    this.playAgainEvent.emit(event.target);
  }
}
