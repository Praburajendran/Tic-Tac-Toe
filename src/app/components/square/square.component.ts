import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  @Input() clickedIndex: string;
  @Output() clickEvent = new EventEmitter<any>();

  ngOnInit() {}

  /** Event handler emitting selected li element */
  clickingHandler(event) {
    this.clickEvent.emit(event.target);
  }
}
