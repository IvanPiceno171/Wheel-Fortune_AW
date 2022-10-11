const startButton = document.getElementById('btn__reset')

class Game{
    constructor(){
        this.missed = 0;
        this.phrases = ['hello world', 'Bulldogs', 'Hamburger', 'you can leave', 'Welcome']
    }
    startGame(){
        let activePhrase = null
        // console.log(this.activePhrase)
        startButton.addEventListener('click', () => {
            document.getElementById('overlay').style.display = 'none'; 
        })
    }
}

const startTheGame = new Game();
startTheGame.startGame();
