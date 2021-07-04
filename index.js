var random = Math.floor( Math.random() *6 )+ 1;
var randomdice = "images/dice" +  random + ".png";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",randomdice);
var random2 = Math.floor(Math.random()*6)+1;
var randice = "images/dice"+ random2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randice);
if(random>random2)
{

  document.querySelector("h1").innerHTML=" !! 🚩 Player1 Wins !!";
  document.querySelector("h3").innerHTML=" Refresh to play again 🗘 🎲";
}
else if (random===random2)
{
  document.querySelector("h1").innerHTML="⛿ DRAW ⛿";
  document.querySelector("h1").fontSize="4rem";
  document.querySelector("h3").innerHTML=" Refresh to play again 🗘 🎲";
}
else{
  document.querySelector("h1").innerHTML=" !! Player2 Wins 🚩!!";
  document.querySelector("h3").innerHTML=" Refresh to play again 🗘 🎲";
}
