import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-guessing-game',
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './guessing-game.component.html',
  standalone: true,
  styleUrl: './guessing-game.component.css'
})
export class GuessingGameComponent {
  upperBound: number = 100;
  gameOver: boolean = false;
  guessedNumber: number = 0;
  displayMessage: string = '';
  guesses: number[] = [];
  guessesRemaining: number = 5;
  initialGuessAmount: number = 5;
  numberToGuess: number = 0;
  controlsAreSet: boolean = false;

  ngOnInit()
  {
    this.initializeGame();
  }
  initializeGame()
  {
    this.controlsAreSet = false;
    this.displayMessage = '';
    this.gameOver = false;
    this.guesses = [];
    this.guessesRemaining = this.initialGuessAmount;
    this.generateNumber();
  }
  checkNumber(): void
  {
    if (this.numberToGuess === this.guessedNumber)
    {
      this.displayMessage = 'You got it!';
      this.gameOver = true;
    }
    if (this.guessesRemaining === 1)
    {
      this.displayMessage = `You ran out of guesses! The number was ${this.numberToGuess}`;

      this.gameOver = true;
      this.disableInput('guess-input');
    }
    if (this.gameOver)
    {
      this.disableInput('guess-btn');
      this.disableInput('confirm-guesses-btn')
    }
    else if (this.guessedNumber > this.numberToGuess)
    {
      this.displayMessage = 'Too high!';
    }
    else if (this.guessedNumber < this.numberToGuess)
    {
      this.displayMessage = 'Too low!';
    }
    this.guessesRemaining--;
    this.guesses.push(this.guessedNumber);
  }

  confirmNumberOfGuesses()
  {
    this.controlsAreSet = true;

    //* Store initial guesses to reset to after clicking play again
    let element: HTMLInputElement = document.getElementById('guesses-remaining') as HTMLInputElement;
    this.initialGuessAmount = parseInt(element.value);

    //* Disable controls during gameplay
    document.querySelectorAll('.controls')
      .forEach(e => this.disableInput(e.id));
  }

  //// Generate a random number for the user to guess
  generateNumber()
  {
    this.numberToGuess = Math.floor(Math.random() * (this.upperBound + 1));
    console.log(this.numberToGuess);
  }

  //// Prevent the user from interacting with input elements after the game has been started
  disableInput(elementId:string )
  {
    document.getElementById(elementId)!
      .setAttribute('disabled', 'true');
  }

  resize(): void
  {
    let remaining = Math.round(this.upperBound / 20) - this.guesses.length;
    if (remaining < 0) this.guessesRemaining = 0;
    this.guessesRemaining = remaining;

    this.generateNumber();
  }
}
