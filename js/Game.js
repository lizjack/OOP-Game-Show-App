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
      //create variable for first lives displayed as hearts, tally, and tries
      const tally = document.querySelector("ol");
      let heart = document.querySelector(".tries img");
     let tries = document.querySelector(".tries");
      //if the active phrase doesn't not have the letter being tested, lost heart displays
      if (this.activePhrase.checkLetter(this.letter) === false) {
        heart.src = "images/lostHeart.png";
        tries.className = "loss";
        this.missed +=1;
      }
      //if user loses 5 lives the game is over
      if (this.missed === 5) {
        this.gameOver();
      }
    } 
   checkForWin() {
      let win = false;
      win = document.getElementsByClassName("letter");
         if (win.length > 0) {
           win = false;
           return win;
         } else {
           win = true;
           return win;
         }
      }
    gameOver(gameWon) {
      const overlay = document.getElementById('overlay');
      const gameOver = document.getElementById('game-over-message');
      overlay.style.display = '';
      //Win message is displayed if checkForWin is true
      if (this.checkForWin(true)) {
        gameOver.innerHTML = 'Congratulations, you won! Thanks for playing.';
        overlay.className = 'win';
        overlay.style.display = 'block';
      } else {
        //Loss message is displayed if checkForWin is not true
        gameOver.innerHTML = 'You ran out of lives. Thanks for playing!';
        overlay.className = 'lose'; 
        overlay.style.display = 'block';
      }
    }
  }