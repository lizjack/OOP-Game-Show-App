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
      const overlay = document.getElementById('overlay');
      overlay.style.display === 'none';
      const randomPhrase = getRandomPhrase();
      addPhraseToDisplay(randomPhrase);
      this.activePhrase = this.phrase;
    }
    getRandomPhrase() {
      let randomNum = Math.floor(Math.random() * this.phrases.length);
       return this.phrases[randomNum];       
    }
    handleInteraction() {

    }
    removeLife() {

    }
    checkForWin() {

    }
    gameOver() {

    }
 }
