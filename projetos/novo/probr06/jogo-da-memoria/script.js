const FRONT = "card_front" //vao representa a class do elementos
const BACK= "card_back" //vao representa a class do elementos
const CARD = "card"
const ICON = "icon"

 // sao as tecnologias [dentro da erry]



startGame();

function startGame(){          
    initializeCards(game.createCardsFromTechs());
}

function initializeCards(cards){
    let gameBoard = document.getElementById("gameBoard");
    gameBoard.innerHTML = '';

    game.cards.forEach(card=>{
        
        let cardElement = document.createElement('div');
        cardElement.id = card.id;
        cardElement.classList.add(CARD);
        cardElement.dataset.icon = card.icon

        createCardContent(card,cardElement);

        cardElement.addEventListener('click',flipCard)
        gameBoard.appendChild(cardElement);



    })



}

function createCardContent(card,cardElement){

    createCardFace(FRONT, card, cardElement);
    createCardFace(BACK, card, cardElement);

}
function createCardFace(face, card, element){

    let cardElementFace = document.createElement('div');
    cardElementFace.classList.add(face);
    if(face === FRONT){
        let iconElement = document.createElement('img');
        iconElement.classList.add(ICON);
        iconElement.src = "./imagens-do-jogo/" + card.icon + ".png";
        cardElementFace.appendChild(iconElement);
    }else{
        cardElementFace.innerHTML = "&lt/&gt";
    }
    element.appendChild(cardElementFace);
}












function flipCard(){

    if(game.setCard(this.id)){   

    this.classList.add("flip");
    if(game.secondCard){
    if(game.checkMatch()){
        game.clearCards();
        if(game.checkGameOver()){
            let gameOverLayer = document.getElementById("gameOver");
            gameOverLayer.style.display='flex';
        }
    }else{
        setTimeout(()=>{
        let firsCardView = document.getElementById(game.firstCard.id);
        let secondCardView = document.getElementById(game.secondCard.id);

        firsCardView.classList.remove('flip');
        secondCardView.classList.remove('flip');
        game.unflipCards();
        },1000);

    }
    }
     }
}

function restart(){
 game.clearCards();
 startGame();
 let.gameOverLayer = document.getElementById("gameOver");
 gameOverLayer.style.display = 'none';
 }


//proxima aula vai ser a de 12min.