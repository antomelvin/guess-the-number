let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return (Math.floor(Math.random() * 10));
}

function compareGuesses(humanGuess, compGuess, targetNumber) {
if(humanGuess == targetNumber) return true;
if(compGuess == targetNumber) return false;
if((humanGuess - targetNumber) == (compGuess - targetNumber)) return true;

if(targetNumber > humanGuess && targetNumber > compGuess) {
    if((humanGuess - targetNumber) > (compGuess - targetNumber)) {
        return true;
    } else if((humanGuess - targetNumber) < (compGuess - targetNumber)) {
        return false;
    } 
}
if(targetNumber < humanGuess && targetNumber < compGuess) {
    if((humanGuess - targetNumber) > (compGuess - targetNumber)) {
        return false;
    } else if((humanGuess - targetNumber) < (compGuess - targetNumber)) {
        return true;
    } 
}

if(targetNumber > humanGuess && targetNumber < compGuess) {
    if((humanGuess - targetNumber) > (compGuess - targetNumber)) {
        return false;
    } else if((humanGuess - targetNumber) < (compGuess - targetNumber)) {
        return true;
    } 
}

if(targetNumber < humanGuess && targetNumber > compGuess) {
    if((humanGuess - targetNumber) > (compGuess - targetNumber)) {
        return true;
    } else if((humanGuess - targetNumber) < (compGuess - targetNumber)) {
        return false;
    } 
}

}

function updateScore(winner) {
  switch(winner) {
    case 'human':
      humanScore++;
      break;
    case 'computer':
      computerScore++;
      break;
    default:
      break;
  }
}

function advanceRound() {
  currentRoundNumber++;
}

