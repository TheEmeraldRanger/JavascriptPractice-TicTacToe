var currentPlayer = "X";
var nextPlayer = "O";

var playerXSelections = new Array();
var playerOSelections = new Array();
var playerSelections = [];

const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]

handleClick = function(event) {

    var cell = event.target;

    console.log("selected: " + cell.id)
  
    cell.innerHTML = currentPlayer;
  
    if(currentPlayer === "X" ) {
      playerSelections = playerXSelections;
      nextPlayer = "O";
    } else {
      playerSelections = playerOSelections;
      nextPlayer = "X";
    }
  
    playerSelections.push(parseInt(cell.id));

    alert("Player " + nextPlayer + "'s turn!")

    if(checkWinner(playerSelections)) {
        alert("Player " + currentPlayer + " wins!")
        resetGame();
      }
    
    if(checkDraw()) {
        alert("Draw!");
        resetGame();
      }
  
    // Swap players
    currentPlayer = nextPlayer;
  }
  
  var cells = document.querySelectorAll("td");
  
  for(var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', handleClick)
  }

function checkWinner() {
    // Check if player has all values of each combination
    for(var w = 0;w < winningCombinations.length; w++){ //for each winning conbination
      var matches = 0
      for(var c = 0; c < winningCombinations[w].length; c++)//for each cell in combination
        for(var p = 0; p < playerSelections.length; p++){
            if(playerSelections[p] === winningCombinations[w][c]){ //if player has cell
              matches++
            }
        }
        console.log("matches : " + matches)
        if(matches>= 3){ //if there are 3 matches
          console.log("true")
          return true
        }
         // else break
         // go to the next combination
    }
    // if we made it through each combo without returning true,
    // then there were no matches and player did not win
    console.log("false")
    return false
}

function checkDraw() {
    return playerOSelections.length + playerXSelections.length >= cells.length
  }

function resetGame() {
    playerXSelections = new Array();
    playerOSelections = new Array();
    for(var i = 0; i < cells.length; i++) {
      cells[i].innerHTML = ""
    }
  }