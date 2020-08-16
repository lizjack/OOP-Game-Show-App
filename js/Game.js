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
    handleInteraction(button) {
      if (this.activePhrase.checkLetter(button.innerHTML) === true) {
        this.activePhrase.showMatchedLetter(button.innerHTML);
          button.className = "win";
          this.checkForWin();
        } 
        if (this.activePhrase.checkLetter(button.innerHTML) === false) {
            this.removeLife();
            button.className = "fail";
            //(consider showing the corect letter)
          } if (this.checkForWin() === true) {
            this.gameOver();
          }
        }
    removeLife() {
      //create variable for lives displayed as hearts
      const hearts = document.querySelector(".tries img");
      //Check to add a lostHeart if user loses a life, adds to lost life tally
      if (this.activePhrase.checkLetter(this.letter) === false) {
        this.missed += 1;
        //lost life displays on game display
        hearts.src = 'images/lostHeart.png';
      }
      //if user loses 5 lives the game is over
      if (this.missed >= 5) {
        this.gameOver();
      }
    }
    checkForWin() {
      let win = false;
         if (this.activePhrase.style.display = 'block') {
           win = true;
           return win;
         } else {
           win = false;
           return win;
         }
      }
    gameOver(gameWon) {
      const overlay = document.getElementById('overlay');
      const heading = document.getElementById('game-over-message');
      overlay.style.display = '';
      //Win message is displayed if checkForWin is true
      if (this.checkForWin(true)) {
        heading.innerHTML = 'Congratulations, you won! Thanks for playing.';
        overlay.className = 'win';
        overlay.style.display = 'block';
      } else {
        //Loss message is displayed if checkForWin is not true
        heading.innerHTML = 'You ran out of lives. Thanks for playing!';
        overlay.className = 'lose'; 
        overlay.style.display = 'block';
      }
    }
  }