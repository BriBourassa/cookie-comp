
var cardFront = document.querySelector('.front');
var cardBack = document.querySelector('.back')
var card = document.querySelector('.card')

card.addEventListener('click', flipCard);

function flipCard(){
    card.classList.toggle("flipCard")
};
