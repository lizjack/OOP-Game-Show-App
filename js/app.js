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
    keys[i].addEventListener("click", (event) => {
  game.handleInteraction(event.target);
  console.log(event.target);
    });
}; 

const overlay = document.getElementById("overlay");
document.addEventListener('keydown', (e) => {
  if (overlay.style.display === 'none') {
      for (let i = 0; i < keys.length; i++) {
          if (e.key === keys[i].textContent ) {
              game.handleInteraction(keys[i])
              keys[i].disabled = false;
          }
      }
  }
})

