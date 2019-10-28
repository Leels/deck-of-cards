//Deck of Cards

// $(document).ready(function() {
  //   var cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
  //   var suits = ["spades", "clubs", "hearts", "diamonds"];
  //   cards.forEach(function(card) {
    //     suits.forEach(function(suit) {
      //       $(card + " of " + suit).text();
      //       console.log(card + " of " + suit);
      //     })
      //   });
      // });



      $(document).ready(function() {
        $("form#deck ").submit(function(event) {
          var text = $("input#userInput").val()

          // console.log(text);

          var wordArr = text.split(' ');

          // console.log(wordArr);

          // var words = $(wordArr.toString());

          // console.log(words)

          var result = {};

          wordArr.forEach(function(string) {
          if (result[string]){
          result[string] += 1
          } else {
            result[string] = 1

          }
           // result = (result + 1);
           //
           //  console.log(wordArr);
           //
           //  // console.log(string)
           //
           //  console.log(result)

         }); console.log(result)
          // text.forEach(function(word) {
            //
            //   $(".result").text(text);
            // });
            event.preventDefault();

          });
        });
