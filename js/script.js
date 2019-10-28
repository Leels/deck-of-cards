$(document).ready(function() {
  var cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
  var suits = ["spades", "clubs", "hearts", "diamonds"];
  cards.forEach(function(card) {
    suits.forEach(function(suit) {
      $(card + " of " + suit).text();
      console.log(card + " of " + suit);
    })
  });
});
