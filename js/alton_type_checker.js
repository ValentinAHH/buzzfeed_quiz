function checkIt() {
  // Initialize scores
  var evil = 0;
  var good = 0;
  var crazy = 0;
  var mystery = 0;
  var killer = 0;
  var animal = 0;
  var badmanimg = "<img src='img/bad man alton.jpg'>"
  var doctorimg = "<img src='img/doctor alton.jpg'>"
  var zanyimg = "<img src='img/zany alton.jpg'>"
  var killerimg = "<img src='img/killer alton.jpg'>"
  var animalloverimg = "<img src='img/animal lover alton.jpg'>"

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'evil') {
        evil++;
      }
      else if (e.value == 'good') {
        good++;
      }
      else if (e.value == 'crazy') {
        crazy++;
      }
      else if (e.value == 'mystery') {
        mystery++;
      }
      else if (e.value == 'killer') {
        killer++;
      }
      else if (e.value == 'animal') {
        animal++;
      }
    }

  }

  // Determine result
  var counts = "Evil: " + evil + ", " +
               "Good: " + good  + ", " +
               "Crazy: " + crazy  + ", " +
               "Mystery: " + mystery  + ", " +
               "Killer: " + killer  + ", " +
               "Animal: " + animal;

  // What is the highest value?
  var max = Math.max(evil, good, crazy, mystery, killer, animal);

  // Form a message
  var message;

  if (max == evil) {
    message = "What Kind of Alton Brown Are You?";
    message2 = "You got: Evil Genius Alton Brown";
    message3 = "Slicing a warm slab of bacon is a lot like giving a ferret a shave. No matter how careful you are, somebody’s going to get hurt. - Alton Brown";
    message4 = badmanimg;
  }
  else if (max == good) {
    message = "What Kind of Alton Brown Are You?";
    message2 = "You got: Good Doctor Alton Brown";
    message3 = "Although I don’t take myself very seriously, I do take my work extraordinarily seriously. - Alton Brown";
    message4 = doctorimg;
  }
  else if (max == crazy) {
    message = "What Kind of Alton Brown Are You?";
    message2 = "You got: Crazy Alton Brown";
    message3 = "Listen to your appetite… and play with your food. -Alton Brown";
    message4 = zanyimg;
  }
  else if (max == mystery) {
    message = "What Kind of Alton Brown Are You?";
    message2 = "You got: Mysterious Alton Brown";
    message3 = "I grill, therefore, I am. - Alton Brown";
    message4 = mysteriousimg;
  }
  else if (max == killer) {
    message = "What Kind of Alton Brown Are You?";
    message2 = "You got: Killer Alton Brown";
    message3 = "The worst food you'll ever eat will probably be prepared by a 'cook' who calls himself a 'chef.' Mark my words. - Alton Brown";
    message4 = killerimg;
  }
  else if (max == animal) {
    message = "What Kind of Alton Brown Are You?";
    message2 = "You got: Animal Lover Alton Brown";
    message3 = "Stuffing is evil. Stuffing adds mass, so it slows the cooking. That’s evil because the longer the bird cooks, the drier it will be. -Alton Brown";
    message4 = animalloverimg;
  }



  // Display result
  //document.getElementById('result').innerHTML = counts;
  document.getElementById('result-title').innerHTML = message;
  document.getElementById('result-heading').innerHTML = message2;
  document.getElementById('result-text').innerHTML = message3;
  document.getElementById('result-img').innerHTML = message4;
}
