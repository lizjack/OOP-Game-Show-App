/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay() {
        //create phraseContainer element and create element for the first element child, (ul)
        const phraseContainer = document.getElementById("phrase");
        const ul = phraseContainer.firstElementChild;
        // console.log(ul)
        for(let i = 0; i < this.phrase.length; i += 1) {
            //create list element to store phrase
            const letter = document.createElement("LI");
            //employ innerHTML to display letters and spaces in this.phrase
            letter.innerHTML = this.phrase[i];
            console.log(letter)
            //add letter class if character is not space
            if (letter.innerHTML !== ' ') {
                letter.classList.add("letter");
            //add space class if character is not a letter
            } else  {
                letter.classList.add("space");
            }
            //append the letter element to the ul
            ul.appendChild(letter);
        }
    }
    //Add letter parameter to check and see if parameter is included in the active phrase
    checkLetter(letter) {    
        if (this.phrase.includes(letter)) {
            return true;
        } else {
            return false;
        }
    }
    showMatchedLetter() {    
    }
 }

