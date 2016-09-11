
var computer = {
    name: ‘computer’,
    score: 0,
    pick: ’’
};
var player = {
    name: ‘’,
    score: 0,
    pick: ’’
};
player.name = prompt("Jak się nazywasz?", "Jan Kowalski");
document.getElementById("playerName").innerHTML = player.name;
var newGame = function () {
  computer.score = 0;
  computer.pick = "";
  player.score = 0;
  player.pick = "";
  round = 0;
};
var playerPick = function(pick) {
  player.pick = pick; 
}
var buttons = document.getElementsByClassName("pick-button");
  for(var i = 0; i < buttons.length; i++) {
    buttons[i].style.visibility = 'visible';
};

var computerPick = function () {
  switch (Math.floor(Math.random()*3)) {
    case 0:
    computer.pick = "rock";
    break;
    case 1:
    computer.pick = "paper";
    break;
    case 2:
    computer.pick = "scissors";
    break;
  }
}
var checkResult = function() {
	if (player.pick === computer.pick) {
  gameResult = "tie!"
} else if (player.pick === "rock") {

  if (computer.pick === "scissors") { player.score++; gameResult = "Player wins!" } 
  else if (computer.pick === "paper") { computer.score++; gameResult = "Computer wins!" }

} else if (player.pick === "paper") {

  if  (computer.pick === "rock") { player.score++; gameResult = "Player wins!" }
  else if (computer.pick === "scissors") { computer.score++; gameResult = "Computer wins!" }

} else if (player.pick === "scissors") { 
  if  (computer.pick === "paper") { player.score++; gameResult = "Player wins!" }
  else if (computer.pick === "rock") { computer.score++; gameResult = "Computer wins!" }
}
}
document.getElementById("computerPick").innerHTML = computer.pick
document.getElementById("playerPick").innerHTML = player.pick
document.getElementById("gameResult").innerHTML = gameResult;
