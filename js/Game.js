/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor() {
       this.missed = 0;
       this.phrases = [
         new Phrase('Always stay gracious'),
         new Phrase('Bring the beat in'),
         new Phrase('get in formation'),
         new Phrase('Houston rock it'),
         new Phrase('Love on top')
       ];
       this.activePhrase = null;
     }
    startGame() {
       //create element for the overlay and hide overlay
      const overlay = document.getElementById('overlay');
      overlay.style.display = 'none';
      //call the getRandomPhrase() to select a phrase object and set it to activePhrase
      this.activePhrase = this.getRandomPhrase();
      //Call the addPhraseToDisplay method on randomPhrase
      this.activePhrase.addPhraseToDisplay();
    }
    getRandomPhrase() {
      let randomNum = Math.floor(Math.random() * this.phrases.length);
       return this.phrases[randomNum];       
    }
    handleInteraction() {

    }
    removeLife() {
      //create variable for live hearts
      const hearts = document.querySelector(".tries img");
     //consider making variable for user fails
      //Check to add a lostHeart if user loses a life, adds to lost life tally
      if (this.activePhrase.checkLetter(this.letter) === false) {
        this.missed += 1;
        hearts.src = 'images/lostHeart.png';
      }
      //if user loses 5 lives the game is over
      if (this.missed >= 5) {
        this.gameOver();
      }
    }
    checkForWin() {
    }
    gameOver() {

    }
 }
