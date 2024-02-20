function getComputerChoice() {

        const pick = ['rock', 'paper', 'scissor'];

        return pick[Math.floor(Math.random() * pick.length)];
}

let playerScore = 0;
let computerScore = 0;

function playRound()  {
        
        const playerSelection = prompt("Choose your weapon: Rock, paper or scissor?");
        const computerSelection = getComputerChoice();

        if (playerSelection.toLowerCase() === computerSelection)    {
                return `It's a tie! You both picked ${playerSelection.toLowerCase()}.`;
        }
        else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissor")    {
                playerScore++;
                return "You win! Rock beats scissors.";
        }
        else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper")   {
                computerScore++;
                return "You loose! Paper beats rock.";
        }
        else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock")   {
                playerScore++;
                return "You win! Paper beats rock.";
        }
        else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissor")   {
                computerScore++;
                return "You loose! Scissors beats paper.";
        }
        else if (playerSelection.toLowerCase() === "scissor" && computerSelection === "paper")    {
                playerScore++;
                return "You win! Scissors beats paper.";
        }
        else if (playerSelection.toLowerCase() === "scissor" && computerSelection === "rock")    {
                computerScore++;
                return "You loose! Rock beats scissors.";
        }
}

// Plays 5 rounds of Rock, paper, scissor!
function playGame()     {

        console.log(playRound());
        console.log(playRound());
        console.log(playRound());
        console.log(playRound());
        console.log(playRound());

}

function winGame()      {
        if (playerScore == 5)   {
                return "Not too bad, you managed to beat a computer!";
        }
        else if (computerScore == 5)       {
                return "The computer wins. Are you happy about that?";
        }            
}

playGame();

console.log(`Your managed to get a score of ${playerScore}.`);
console.log(`The dumb computer collected a score of ${computerScore}.`);




