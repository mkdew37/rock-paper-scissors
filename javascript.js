//const intro = alert("Hey! Are you ready to challenge the computer?");
//const intro2 = alert("Don't worry, my code will keep track of the score. Just enjoy the game!");

// Randomize the computers choice from 3 different choices
function getComputerChoice() {

        const pick = ['rock', 'paper', 'scissor'];

        return pick[Math.floor(Math.random() * pick.length)];
}

let userScore = 0;
let computerScore = 0;

// This function plays a single round of Rock, Paper, Scissors
function playRound()  {
        
        const playerSelection = prompt("Choose your weapon: Rock, paper or scissor?");
        const computerSelection = getComputerChoice();

        if (playerSelection.toLowerCase() === computerSelection)    {
                return `It's a tie! You both picked ${playerSelection.toLowerCase()}.`;
        }
        else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissor")    {
                return "You win! Rock beats scissors.";
                userScore++;
        }
        else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper")   {
                return "You loose! Paper beats rock.";
                computerScore++;
        }
        else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock")   {
                return "You win! Paper beats rock.";
                userScore++;
        }
        else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissor")   {
                return "You loose! Scissors beats paper.";
                computerScore++;
        }
        else if (playerSelection.toLowerCase() === "scissor" && computerSelection === "paper")    {
                return "You win! Scissors beats paper.";
                userScore++;
        }
        else if (playerSelection.toLowerCase() === "scissor" && computerSelection === "rock")    {
                return "You loose! Rock beats scissors.";
                computerScore++;
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

playGame();






