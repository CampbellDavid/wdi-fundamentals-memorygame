console.log("Up and running!");

var cards = [
	{
		rank: "Queen",
		suit: "Hearts",
		image: "images/queen-of-hearts.png"
	},
	{	
		rank: "Queen",
		suit: "Diamonds",
		image: "images/queen-of-diamonds.png"
	},
	{	
		rank: "King",
		suit: "Hearts",
		image: "images/king-of-hearts.png"
	},
	{	
		rank: "King",
		suit: "Diamonds",
		image: "images/king-of-diamonds.png"
	}
];

const cardsInPlay = [];

var checkForMatch = function() {
		if (cardsInPlay[0] === cardsInPlay[1]) {
		  console.log("You found a match!");
		  alert("You found a match!");
		} else {
		  console.log("Sorry, try again.");
		  alert("Sorry, try again.");
		}
	}

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank);
	console.log("User flipped " + cards[cardId].suit);
	console.log("User flipped " + cards[cardId].image);
	this.setAttribute('src', cards[cardId].image);
	if (cardsInPlay.length === 2) {
	checkForMatch();
}
}

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement("img")
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('gameboard').appendChild(cardElement);
		};
	};

createBoard();