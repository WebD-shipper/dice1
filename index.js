var randomNumber1=Math.floor(Math.random() * 6)+1;
var randomNumber2=Math.floor(Math.random() * 6)+1;
var r1="./images/dice"+randomNumber1+".png";
var r2="./images/dice"+randomNumber2+".png";

var dice1=document.querySelector("#dice1");
dice1.setAttribute("src",r1);

var dice2=document.querySelector("#dice2");
dice2.setAttribute("src",r2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="player 1 wins";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="player 2 wins";
}
else{
   document.querySelector("h1").innerHTML="Draw";
}