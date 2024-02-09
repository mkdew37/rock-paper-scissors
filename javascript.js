//const intro = alert("Hey! Are you ready to challenge the computer?");
//const intro2 = alert("Don't worry, my code will keep track of the score. Just enjoy the game!");

// Randomize the computers choice from 3 different choices
function getComputerChoice() {

        const pick = ['rock', 'paper', 'scissor'];

        return pick[Math.floor(Math.random() * pick.length)];
}

// Prompts for the player to choose hand. Generates computers choice from function.



// This function plays a single round of Rock, Paper, Scissors
function playRound()  {
        
        const playerSelection = prompt("Rock, paper or scissor?");
        const computerSelection = getComputerChoice();

        if (playerSelection.toLowerCase() === computerSelection)    {
                return `It's a tie! You both picked ${playerSelection.toLowerCase()}.`;
        }
        else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissor")    {
                return "You win! Rock beats scissors.";
        }
        else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper")   {
                return "You loose! Paper beats rock.";
        }
        else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock")   {
                return "You win! Paper beats rock.";
        }
        else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissor")   {
                return "You loose! Scissors beats paper.";
        }
        else if (playerSelection.toLowerCase() === "scissor" && computerSelection === "paper")    {
                return "You win! Scissors beats paper.";
        }
        else if (playerSelection.toLowerCase() === "scissor" && computerSelection === "rock")    {
                return "You loose! Rock beats scissors.";
        }
}

function playGame()     {

        console.log(playRound());
        console.log(playRound());
        console.log(playRound());
        console.log(playRound());
        console.log(playRound());

}

playGame();






