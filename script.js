 
//COMPUTER PLAY FUNCTION THAT RETURNS COMPUTER CHOICE
function computerPlay(){
    const issues = ["Rock","Paper","Scissors"];

const random = Math.floor(Math.random() * issues.length);
return issues[random];
  }


//   ROUND FUNCTION: Prints the result of the round with details and returns the winner of the round: computer/player/equality
  
  function round(playerSelection,computerSelection) {
    if (playerSelection.toUpperCase() === "rock".toUpperCase()) {
      if (computerSelection.toUpperCase() === "rock".toUpperCase()) {
        console.log("Equality!")
        return "Equality"
      } else if (computerSelection.toUpperCase() === "paper".toUpperCase()) {
        console.log("Computer wins: Paper beats Rock!")
        return "Computer"
      } else if (computerSelection.toUpperCase() === "scissors".toUpperCase()) {
        console.log("Player wins: Rock beats Scissors!")
        return "Player"
      }
      
    } else if (playerSelection.toUpperCase() === "paper".toUpperCase()) {
      if (computerSelection.toUpperCase() === "rock".toUpperCase()) {
        console.log("Player wins: Paper beats Rock!")
        return "Player"
      } else if (computerSelection.toUpperCase() === "paper".toUpperCase()) {
        console.log("Equality")
        return "Equality"
      } else if (computerSelection.toUpperCase() === "scissors".toUpperCase()) {
        console.log("Computer wins: Scissors beat Paper!")
        return "Computer"
      }    
    }    
      else if (playerSelection.toUpperCase() === "scissors".toUpperCase()) {
      if (computerSelection.toUpperCase() === "rock".toUpperCase()) {
        console.log("Computer wins: Rock beats Scissors!")
        return "Computer"
      } else if (computerSelection.toUpperCase() === "paper".toUpperCase()) {
        console.log("Player wins: Scissors beat Paper!")
        return "Player"
      } else if (computerSelection.toUpperCase() === "scissors".toUpperCase()) {
        console.log("Equality")
        return "Equality"
      }
  }} 
  // END OF THE ROUND FUNCTION



// GAME FUNCTION: Asks how many round and for each round asks the player an input. At the end gives the overall winner
  
  function game() {
    
    let rounds=prompt(`You are playing Rock Paper Scissors against the computer! How many rounds do you want to play?`)  //ask how many rounds
    
    //score variables
    let computer=0 
    let player=0
    let equality=0
    
    // for loop: each iteration is a round
    for (let j=0; j<rounds; j++){
    let computerSelection=computerPlay()   //computer choses with computerPlay fonction
    let playerSelection=prompt(`Round ${j+1}! Rock, Paper, Scissors??`)   //player choses with a prompt
    console.log(`ROUND ${j+1}: You have chosen ${playerSelection.toUpperCase()} and the computer plays ${computerSelection.toUpperCase()}`)   //prints who chose what
    let winner=round(playerSelection,computerSelection)  //saves the winner of the round in a new variable
    winner  //prints the winner thanks to the print inside the round function
    
    
    // counts points for overall winner  
    if (winner==="Computer") {
      computer++
    } else if (winner==="Player") {
      player++
    } else {
      equality++
    }
      
    }
    
    //end of the loop and prints final score
    if (computer>player){
      console.log(`Final score: Computer wins! Player has ${player} points and Computer has ${computer} points. There were ${equality} equalities.`)
    } else if (player>computer){
      console.log(`Final score: Player wins! Player has ${player} points and Computer has ${computer} points. There were ${equality} equalities.`)
    } else {
      console.log(`Final score: Equality! Player has ${player} points and Computer has ${computer} points. There were ${equality} equalities.`)
    }
  }
  // END OF THE GAME FUNCTION



























  //  OLD ROUND FUNCTION 
  /*
  function round(playerSelection,computerSelection) {
    if (playerSelection.toUpperCase() === "rock".toUpperCase()) {
      if (computerSelection.toUpperCase() === "rock".toUpperCase()) {
        return "Equality"
      } else if (computerSelection.toUpperCase() === "paper".toUpperCase()) {
        return "Computer wins!"
      } else if (computerSelection.toUpperCase() === "scissors".toUpperCase()) {
        return "Player wins!"
      }
      
    } else if (playerSelection.toUpperCase() === "paper".toUpperCase()) {
      if (computerSelection.toUpperCase() === "rock".toUpperCase()) {
        return "Player wins!"
      } else if (computerSelection.toUpperCase() === "paper".toUpperCase()) {
        return "Equality"
      } else if (computerSelection.toUpperCase() === "scissors".toUpperCase()) {
        return "Computer wins!"
      }    
    }    
      else if (playerSelection.toUpperCase() === "scissors".toUpperCase()) {
      if (computerSelection.toUpperCase() === "rock".toUpperCase()) {
        return "Computer wins!"
      } else if (computerSelection.toUpperCase() === "paper".toUpperCase()) {
        return "Player wins!"
      } else if (computerSelection.toUpperCase() === "scissors".toUpperCase()) {
        return "Equality"
      }
  }} */