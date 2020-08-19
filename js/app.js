/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
const startButton = document.getElementById('btn__reset');
startButton.addEventListener('click', () => {
game.startGame();
});

 const keys = document.getElementsByClassName('key');
 for (let i = 0; i < keys.length; i ++) {
    keys[i].addEventListener('click', (event) => {
  game.handleInteraction(event.target);
  console.log(button);
    }
});

  // startButton.addEventListener('click', () => {
     /***
      * determine what goes here
     })
    **/

    /** const game = new Game();
    game.startGame();
    console.log( `Active Phrase - phrase: ${game.activePhrase.phrase}`);
    **/
   
    //game.getRandomPhrase().addPhraseToDisplay();

    /**add click event listeners to onscreen keyboard buttons
     * and click event listener for start button
     */
