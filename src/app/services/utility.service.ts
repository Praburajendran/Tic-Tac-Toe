import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  /** Function for Creating the Squares */
  createSquares() {
    const sqrArr = [];
    for (let i = 0; i < 9; i++) {
      sqrArr[i] = i;
    }
    return sqrArr;
  }

  /** Function for triggering playing again */
  playAgain(squareElems) {
    const liElems = squareElems;
    for (let i = 0; i < liElems.length; i++) {
        liElems[i].innerHTML = '';
        liElems[i].style.background = 'none';
    }
  }
}
