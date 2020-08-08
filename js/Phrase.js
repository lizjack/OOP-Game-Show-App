/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay() {
        const phraseSection = document.getElementById("phrase");
        const ul = phraseSection.firstElementChild;
        // console.log(ul)
        for(let i = 1; i < this.phrase.length; i += 1) {
            const phraseList = phraseSection.firstElementChild;
            const letter = document.createElement("LI");
            letter.innerHTML = this.phrase[i]
            console.log(letter)
            if (letter.innerHTML !== ' ') {
                letter.classList.add("letter");
            } else  {
                letter.classList.add("space");
            }
            ul.appendChild(letter);
        }
    }
    checkLetter() {     
    }
    showMatchedLetter() {     
    }
 }

 /** 

**/