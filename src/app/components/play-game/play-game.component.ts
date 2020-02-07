import { Component, OnInit, ElementRef } from '@angular/core';

import { UtilityService } from '../../services/utility.service';


@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css']
})
export class PlayGameComponent implements OnInit {

  constructor(private elemRef: ElementRef, private utilsrvc: UtilityService) {}

  public sign: boolean;
  public count: number;
  public squareArr: Array<Number> = [];
  public cube: any;
  public message: any;
  public gameClickSignObj: object;
  public squareElems: Array<any> = [];
  public gameWon: boolean;
  public winProbability: Array<any>;


  ngOnInit() {
    const currRef = this.elemRef.nativeElement;
    this.squareArr = this.utilsrvc.createSquares();
    this.cube = currRef.querySelector('#page ul');
    this.message = currRef.querySelector('#infobar');
    this.initializeValues();
  }

  /** Initializing required variables */
  initializeValues(){
    this.gameWon = false;
    this.count = 0;
    this.sign = true;
    this.gameClickSignObj = {};
    this.winProbability = [
        [1, 2, 3],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [4, 5, 6],
        [7, 8, 9],
        [3, 5, 7],
        [1, 5, 9]
    ];
    this.message.innerHTML = '';
    this.message.style.background = 'transparent';
    this.message.style.opacity = '0';
  }

  /** Click function when triggers on player action */
  clickHandler(e) {
    if (!this.gameWon) { this.playGame(e); }
    if (!this.gameWon) { this.computerMove(); }
  }

  /** Play Again Click Handler Function */
  playAgainHandler(e) {
    this.initializeValues();
    this.utilsrvc.playAgain(this.squareElems);
  }

  /** For Updating the selected squares */
  markSquare(e) {
    const gameObject = this.gameClickSignObj;
    const cube = e;
    if (!cube.innerHTML && cube.tagName === 'LI') {
            const cubeIndex = parseInt(e.id);
            this.count++;

            // Updating Dom
            if (this.sign) {
                cube.innerHTML = 'X';
                gameObject[cubeIndex + 1] = 'X';
                this.sign = false;
            } else {
                cube.innerHTML = 'O';
                gameObject[cubeIndex + 1] = 'O';
                this.sign = true;
            }
        }
    return gameObject;
  }

   /** Function checking winning conditions */
  playGame(e) {
    const ulSelector = this.cube;
    const messageSelector = this.message;
    this.squareElems = this.elemRef.nativeElement.querySelectorAll('li');
    let gameObject = this.markSquare(e);

    if (this.count > 4) {
        // Check if Game won
        this.winProbability.forEach((element) => {
            const arr = [];
            const pos = [];
            element.forEach(function(elem) {
                if (gameObject[elem]) {
                    arr.push(gameObject[elem]);
                    pos.push(elem);
                }
            });
            let xsignal = false,
                osignal = false;
            if (arr.length === 3) {
                if (arr[0] === 'X' && arr[1] === 'X' && arr[2] === 'X') {
                    xsignal = true;
                }
                if (arr[0] === 'O' && arr[1] === 'O' && arr[2] === 'O') {
                    osignal = true;
                }
            }
            if (xsignal === true) {
                // Player have won
                this.gameWon = true;
                pos.forEach((element) => {
                    ulSelector.children[element - 1].children[0]['style']['background'] = '#808000';
                })
                messageSelector.innerHTML = 'You won! Want to play Again, <span style="text-decoration:underline">Click me</span>';
                messageSelector.style.background = '#808000';
                messageSelector.style.opacity = '1';
                gameObject = {};
            } else if (osignal === true) {
                // Player have won
                this.gameWon = true;
                pos.forEach((element) => {
                    ulSelector.children[element - 1].children[0]['style']['background'] = '#1E90FF';
                })
                messageSelector.innerHTML =
                'Computer Have won.. You lost.. Want to play Again, <span style="text-decoration:underline">Click me</span>';
                messageSelector.style.background = '#1E90FF';
                messageSelector.style.opacity = '1';
                gameObject = {};
            } else if (this.count === 9 && !osignal && !xsignal ) {
                // Match Tied
                this.gameWon = true;
                messageSelector.innerHTML = 'Match Tied... Want to play Again, <span style="text-decoration:underline">Click me</span>';
                messageSelector.style.background = 'Brown';
                messageSelector.style.opacity = '1';
            }
        })
        }
    }

    /** Function triggering Computer Move */
    computerMove() {
        const emptySquares = [];
        let randomVal;
        this.squareElems.forEach(function(cell){
          if (cell.textContent === '') {
            emptySquares.push(cell);
          }
        });
        randomVal = Math.ceil(Math.random() * emptySquares.length) - 1;
        if (emptySquares[randomVal]) { this.playGame(emptySquares[randomVal]); }
    }
}

