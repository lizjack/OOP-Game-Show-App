/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
//const startButton = document.getElementById('btn__reset');


  // startButton.addEventListener('click', () => {
     /***
      * determine what goes here
     })
    **/

    const game = new Game();
    game.getRandomPhrase().addPhraseToDisplay();

    /**add click event listeners to onscreen keyboard buttons
     * and click event listener for start button
     */
