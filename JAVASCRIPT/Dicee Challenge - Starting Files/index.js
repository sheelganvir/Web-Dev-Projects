var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImage ="dice" + randomNumber1 +".png";  //dice1.png - dice2.png

var randomImageSource = "./images/" + randomDiceImage;    //.images/dice1png - .images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

