function checkIt() {
  // Initialize scores
  var loser = 0;
  var winner = 0;
  var second = 0;
  var final = 0;
  var loserimg = "<img src='img/loser.png'>"
  var winnerimg = "<img src='img/winner.png'>"
  var secondimg = "<img src='img/second.png'>"
  var finalimg = "<img src='img/final.png'>"

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'loser') {
        loser++;
      }
      else if (e.value == 'winner') {
        winner++;
      }
      else if (e.value == 'second') {
        second++;
      }
      else if (e.value == 'final') {
        final++;
      }
    }

  }

  // Determine result
  var counts = "Loser: " + loser + ", " +
               "Winner: " + winner  + ", " +
               "Second: " + second  + ", " +
               "Final: " + final;

  // What is the highest value?
  var max = Math.max(loser, winner, second, final);

  // Form a message
  var message;

  if (max == loser) {
    message = "What Kind of Alton Brown Are You?";
    message2 = "You got: Eliminated in the first round";
    message3 = "You kept bragging about your cooking skills the whole time and everyone found you so annoying they all sabotaged you. Have a nice ride back to your second-rate restaurant.";
    message4 = loserimg;
  }
  else if (max == winner) {
    message = "What Kind of Alton Brown Are You?";
    message2 = "You got: $25,000!";
    message3 = "Congratulations! You won! The judges were impressed that you made a killer chicken marsala without using any actual chicken and while strapped to an electric chair.";
    message4 = winnerimg;
  }
  else if (max == second) {
    message = "What Kind of Alton Brown Are You?";
    message2 = "You got: Eliminated in the second round";
    message3 = "Your cooking skills were fine, but this competition is too cutthroat for you. Try Chopped or something.";
    message4 = secondimg;
  }
  else if (max == final) {
    message = "What Kind of Alton Brown Are You?";
    message2 = "You got: Eliminated in the final round";
    message3 = "You were so, so close, but having to cook using only a pair of giant chopsticks really tripped you up.";
    message4 = finalimg;
  }

  // Display result
  //document.getElementById('result').innerHTML = counts;
  document.getElementById('result-title').innerHTML = message;
  document.getElementById('result-heading').innerHTML = message2;
  document.getElementById('result-text').innerHTML = message3;
  document.getElementById('result-img').innerHTML = message4;
}
