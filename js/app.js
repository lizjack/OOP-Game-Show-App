/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startButton = document.getElementById('btn__reset');
startButton.addEventListener('click', () => {
let game = new Game();
game.startGame();
})

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
