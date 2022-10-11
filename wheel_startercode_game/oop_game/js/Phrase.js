const hiddenPhrase = document.querySelectorAll('.hide');
const phraseHTML = document.getElementById('phrase'); 
const qwerty = document.getElementById("qwerty");

class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay(){
        this.phrase.split('').forEach(letter => {
            phraseHTML.innerHTML += `<span class="hide letter">${letter}</span>`;
    })
    }
    checkLetter(){
        qwerty.addEventListener('click', (e) => {
            for (let i = 0; i < phraseHTML.children.length; i++){
                // console.log(e.target.innerHTML);     
                if (e.target.innerHTML === phraseHTML.children[i].innerHTML) { 
                    console.log('match');
                    phraseHTML.children[i].classList.add('show')
                }}})
    }
    showMatchLetter(){

    }
}

let phraseDisplay = new Phrase('hello world');
phraseDisplay.addPhraseToDisplay();
phraseDisplay.checkLetter();