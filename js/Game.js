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
         new Phrase('Love on top'),
         new Phrase('who run the world'),
         new Phrase('the beat got sicker')
       ];
       this.activePhrase = null;
     }
    startGame() {
      this.newGame();
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
      //checked the clicked letter against the phrase
      if (this.activePhrase.checkLetter(button.innerHTML) === true) {
        //if it matches, show clicked letter on screen
        this.activePhrase.showMatchedLetter(button.innerHTML);
          button.className = "chosen";
          button.disabled = true;
          //this.checkForWin();
        } 
        if (this.activePhrase.checkLetter(button.innerHTML) === false) {
          //if there's no match, remove a life
            this.removeLife();
            button.className = "wrong";
            button.disabled = true;
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
      //check if the letters is greater than 0
         if (win.length > 0) {
           //boolean returns false if letters is greater than 0
           win = false;
           return win;
         } else {
           win = true;//boolean returns true if user won
           return win;
         }
      }
    gameOver(gameWon) {
      const overlay = document.getElementById('overlay');
      const gameOver = document.getElementById('game-over-message');
      overlay.style.display = '';
      //Win message is displayed if checkForWin is true
      if (this.checkForWin(true)) {
        gameOver.innerHTML = 'Congratulations, you won. You slay, you\'re a star!';
        overlay.className = 'win';
        overlay.style.display = 'block';
      } else {
        //Loss message is displayed if checkForWin is not true
        gameOver.innerHTML = 'You ran out of lives. But like Beyonce says - "I dream it, I work hard, I grind until I own it". You can always try again!';
        overlay.className = 'lose'; 
        overlay.style.display = 'block';
      }
    }
    newGame() {
      this.missed = 0;
      //erases list from phrase ul, found method here: https://stackoverflow.com/questions/18795028/javascript-remove-li-without-removing-ul#:~:text=getElementById('myList')%3B%20element,But%2C%20this%20removes%20the%20ul.
      const listId = document.querySelector("ul");
      listId.innerHTML = "";
      //loop through the chosen and wrong button classes to enable their use and change the class to 'key'
      let chosenButtons = document.querySelectorAll(".chosen");
      for (let i = 0; i < chosenButtons.length; i ++) {
        chosenButtons[i].className = "key";
        chosenButtons[i].disabled = false;
      }
      let wrongButtons = document.querySelectorAll(".wrong");
      for (let i = 0; i < wrongButtons.length; i ++) {
        wrongButtons[i].className = "key";
        wrongButtons[i].disabled = false;
      }
      //reset number of tries
      const resetLoss = document.querySelectorAll(".loss");
      for (let i = 0; i < resetLoss.length; i ++) {
        resetLoss[i].className = "tries";
      }
       //reset the heart images
       const scoreReset = document.querySelectorAll(".tries img");
       for (let i = 0; i < scoreReset.length; i ++) {
         scoreReset[i].src = "images/liveHeart.png";
       }
    }
  }
 