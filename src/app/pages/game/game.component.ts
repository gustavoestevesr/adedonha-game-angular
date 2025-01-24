import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [RouterModule, NgIf],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {
  public categorySelected: string = '';
  public gameStarted: boolean = false;
  public gameFinished: boolean = false;
  private readonly LETTERS: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  public buttonLetters: string[] = [this.pickRandomLetter(), this.pickRandomLetter(), this.pickRandomLetter(), this.pickRandomLetter(), this.pickRandomLetter()];

  route = inject(ActivatedRoute);

  constructor() {
    this.route.params.subscribe((params: Params) => {
      this.categorySelected =  params['category'];
    });

    this.gameStarted = true;
    this.countdown();
  }

  pickRandomLetter() {
    return this.LETTERS[Math.floor(Math.random() * this.LETTERS.length)];
  }

  updateButtonLetter(index: number) {
    this.buttonLetters[index] = this.pickRandomLetter();
  }

  public counter = 5;
  public mainCounter = 10;
  public interval: any;

  public countdown() {
    this.interval = setInterval(() => {
      if (this.counter > 0) {
        this.counter--;
      } else {
        this.gameStarted = true;
        clearInterval(this.interval);
        this.mainCountdown()
      }
    }, 1000);
  }

  public mainCountdown() {
    this.interval = setInterval(() => {
      if (this.mainCounter > 0) {
        this.mainCounter--;
      } else {
        this.gameFinished = true;
        this.gameStarted = false;
        clearInterval(this.interval);
      }
    }, 1000);
  }
}
