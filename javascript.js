let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function playRound(playerSelection) {
  const playerChoice = playerSelection;
  const computerChoice = getComputerChoice();
  if (playerChoice === computerChoice) {
    console.log(`It was a draw between ${playerChoice} and ${computerChoice}`);
  } else if (playerChoice === 0 && computerChoice === 1) {
    console.log(`Player chose Rock and Computer chose paper, computer wins`);
    computerScore++;
  } else if (playerChoice === 0 && computerChoice === 2) {
    console.log(`Player chose rock and Com chose scissors, player wins wins`);
    playerScore++;
  } else if (playerChoice === 1 && computerChoice === 0) {
    console.log(`Player chose Paper and Computer chose ROck, pLAYER wins`);
    playerScore++;
  } else if (playerChoice === 1 && computerChoice === 2) {
    console.log(
      `Player chose paper and Com chose scissors, COmputer wins wins`
    );
    computerScore++;
  } else if (playerChoice === 2 && computerChoice === 0) {
    console.log(`Player chose scissors and Computer chose rock, computer wins`);
    computerScore++;
  } else if (playerChoice === 2 && computerChoice === 1) {
    console.log(`Player chose scissors and Com chose paper, player wins wins`);
    playerScore++;
  }
}

function game() {
  for (let i = 0; i <= 5; i++) {
    const userInput = prompt("put 0 1 2");
    playRound(parseInt(userInput));
  }
  if (playerScore > computerScore) {
    console.log(
      `The final score is ${playerScore} for the player and ${computerScore} for the computer. Player wins.`
    );
  } else {
    console.log(
      `The final score is ${playerScore} for the player and ${computerScore} for the computer. COmputer wins.`
    );
  }
}

game();
// test
