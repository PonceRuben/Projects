let btnNew = document.getElementById("btn-new");
let btnRoll = document.getElementById("btn-roll");
let btnHold = document.getElementById("btn-hold");
let player1Container = document.getElementById("player-1")
let player2Container = document.getElementById("player-2")
let player1Number = document.getElementById("player-1-number");
let player2Number = document.getElementById("player-2-number");
let player1Score = document.getElementById("player-1-score");
let player2Score = document.getElementById("player-2-score");
let player1Text = document.getElementById("player-1-text")
let player2Text = document.getElementById("player-2-text")
let dice1 = document.querySelector(".dice1")
let dice2 = document.querySelector(".dice2")
let dice3 = document.querySelector(".dice3")
let dice4 = document.querySelector(".dice4")
let dice5 = document.querySelector(".dice5")
let dice6 = document.querySelector(".dice6")



function rollDice() {
   let number = Math.random() *6;
   let diceNumber = Math.floor(number+1);
   let currentPlayer1Number = parseInt(player1Number.textContent);
   if (diceNumber > 1) {
      player1Number.textContent = currentPlayer1Number + diceNumber;
      player1Number.style.marginTop = "45px";
      if (diceNumber == 2) {
         dice2.style.display = "block"; 
         dice1.style.display = "none";
         dice3.style.display = "none";
         dice4.style.display = "none";
         dice5.style.display = "none";
         dice6.style.display = "none";
      } else if (diceNumber == 3){
         dice3.style.display = "block";
         dice1.style.display = "none";
         dice2.style.display = "none";
         dice4.style.display = "none";
         dice5.style.display = "none";
         dice6.style.display = "none";
      } else if (diceNumber == 4){
         dice4.style.display = "block";
         dice1.style.display = "none";
         dice2.style.display = "none";
         dice3.style.display = "none";
         dice5.style.display = "none";
         dice6.style.display = "none";
      } else if (diceNumber == 5){
         dice5.style.display = "block"; 
         dice1.style.display = "none";
         dice2.style.display = "none";
         dice3.style.display = "none";
         dice4.style.display = "none";
         dice6.style.display = "none"; 
      } else if (diceNumber == 6){
         dice6.style.display = "block"; 
         dice1.style.display = "none";
         dice2.style.display = "none";
         dice3.style.display = "none";
         dice4.style.display = "none";
         dice5.style.display = "none";
      }
   } else {
      dice1.style.display = "block";
      dice2.style.display = "none";
      dice3.style.display = "none";
      dice4.style.display = "none";
      dice5.style.display = "none";
      dice6.style.display = "none";
      player1Number.textContent = 0;
      btnRoll.className = "btn-roll-2";
      player1Container.style.backgroundColor = "#b97a99";
      player2Container.style.backgroundColor = "#dbafbd";
      player1Text.style.fontWeight = "normal";
      player2Text.style.fontWeight = "bold";
      player1Number.style.marginTop = "45px";

   }
   
}

function rollDice2() {
   let number = Math.random() *6;
   let diceNumber = Math.floor(number+1);
   let currentPlayer2Number = parseInt(player2Number.textContent);
   if (diceNumber > 1) {
      player2Number.textContent = currentPlayer2Number + diceNumber
      player2Number.style.marginTop = "45px";
      if (diceNumber == 2) {
         dice2.style.display = "block"; 
         dice1.style.display = "none";
         dice3.style.display = "none";
         dice4.style.display = "none";
         dice5.style.display = "none";
         dice6.style.display = "none";
      } else if (diceNumber == 3){
         dice3.style.display = "block";
         dice1.style.display = "none";
         dice2.style.display = "none";
         dice4.style.display = "none";
         dice5.style.display = "none";
         dice6.style.display = "none";
      } else if (diceNumber == 4){
         dice4.style.display = "block";
         dice1.style.display = "none";
         dice2.style.display = "none";
         dice3.style.display = "none";
         dice5.style.display = "none";
         dice6.style.display = "none";
      } else if (diceNumber == 5){
         dice5.style.display = "block"; 
         dice1.style.display = "none";
         dice2.style.display = "none";
         dice3.style.display = "none";
         dice4.style.display = "none";
         dice6.style.display = "none"; 
      } else if (diceNumber == 6){
         dice6.style.display = "block"; 
         dice1.style.display = "none";
         dice2.style.display = "none";
         dice3.style.display = "none";
         dice4.style.display = "none";
         dice5.style.display = "none";
      }
   } else {
   	 dice1.style.display = "block";
       dice2.style.display = "none";
       dice3.style.display = "none";
       dice4.style.display = "none";
       dice5.style.display = "none";
       dice6.style.display = "none";
       player2Number.textContent = 0;
       btnRoll.className = "btn-roll-1";
       player1Container.style.backgroundColor = "#dbafbd";
       player2Container.style.backgroundColor = "#b97a99";
       player1Text.style.fontWeight = "bold";
       player2Text.style.fontWeight = "normal";
       player2Number.style.marginTop = "45px";
   }
}

function ganador1() {
   let player1FinalScore = parseInt(player1Score.textContent);
   if (player1FinalScore >= 100) {
      player1Container.style.backgroundColor = " #3d3a3b";
      player1Text.style.color = "#c7365f";
      btnRoll.disabled = true;
      btnHold.disabled = true;
   }
}

function ganador2() {
   let player2FinalScore = parseInt(player2Score.textContent);
   if (player2FinalScore >= 100) {
      player2Container.style.backgroundColor = " #3d3a3b";
      player2Text.style.color = "#c7365f";
      btnRoll.disabled = true;
      btnHold.disabled = true;
   }
}


btnRoll.addEventListener("click", function(e){
   if (btnRoll.classList.contains("btn-roll-1")){
      rollDice()
   } else {
      rollDice2()
   }
});


btnHold.addEventListener("click", function(e){
   if (btnRoll.classList.contains("btn-roll-1")){
      player1Score.textContent = parseInt(player1Number.textContent) + parseInt(player1Score.textContent);
      player1Number.textContent = "0";
      btnRoll.className = "btn-roll-2";;
      player1Container.style.backgroundColor = "#b97a99";
      player2Container.style.backgroundColor = "#dbafbd";
      player1Text.style.fontWeight = "normal";
      player2Text.style.fontWeight = "bold";
      player1Number.style.marginTop = "45px";
      ganador1();

   } else {
      player2Score.textContent = parseInt(player2Number.textContent) + parseInt(player2Score.textContent);
      player2Number.textContent = "0";
      btnRoll.className = "btn-roll-1";
      player1Container.style.backgroundColor = "#dbafbd";
      player2Container.style.backgroundColor = "#b97a99";
      player1Text.style.fontWeight = "bold";
      player2Text.style.fontWeight = "normal";
      player2Number.style.marginTop = "45px";
      ganador2();
   }
})


btnNew.addEventListener("click", function(e){
   player1Container.style.backgroundColor = "#dbafbd";
   player2Container.style.backgroundColor = "#b97a99";
   player1Text.style.color = "#3d3a3b";
   player2Text.style.color = "#3d3a3b";
   btnRoll.disabled = false;
   btnHold.disabled = false;
   player1Score.textContent = "0";
   player2Score.textContent = "0";
   btnRoll.className = "btn-roll-1";
   dice1.style.display = "none";
   dice2.style.display = "none";
   dice3.style.display = "none";
   dice4.style.display = "none";
   dice5.style.display = "none";
   dice6.style.display = "none";
   player1Text.style.fontWeight = "bold";
   player2Text.style.fontWeight = "normal";
})