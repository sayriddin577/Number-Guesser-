let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
  const randomNum=Math.floor(Math.random()*10);
  return randomNum;

}
const compareGuesses=(humanGuess,computerGuess,targetNumber)=>{
  if (humanGuess===targetNumber){
    return true;
  }
  if (computerGuess===targetNumber){
    return false;
  }
  if (humanGuess===computerGuess){
    return true;
  }
}

function updateScore(score){
  if(score==="human"){
    humanScore++;
  }
  if(score==="computer"){
    computerScore++;
  }
}
function advanceRound(){
  currentRoundNumber++;
}




