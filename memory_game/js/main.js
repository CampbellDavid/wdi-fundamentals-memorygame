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

function checkForMatch () {
		if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
		  console.log("You found a match!");
		} else {
		  console.log("Sorry, try again.");
		}
	}
}

function flipCard(cardId) {
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank);
	console.log("User flipped " + cards[cardId].suit);
	console.log("User flipped " + cards[cardId].image);
	checkForMatch();
}

flipCard(0);
flipCard(2);