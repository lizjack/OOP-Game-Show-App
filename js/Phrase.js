/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay() {
        for(let i = 1; i < this.phrase.length; i += 1) {
            const phraseSection = document.getElementById("phrase");
            const phraseList = phraseSection.firstElementChild;
            var list = document.createElement("LI");
            if (this.phrase === /(a-z)/) {
                Element.classList.add("letter");
            } if (this.phrase === /(\s)/) {
                Element.classList.add("space");
            }
            phraseList.appendChild(list);
        }
    }
    checkLetter() {     
    }
    showMatchedLetter() {     
    }
 }
