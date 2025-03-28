// Rock paper scissors 

const choices = ["rock", "paper", "scissors", "tape", "stapler"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const Reset = document.getElementById("Reset")
let playerScore = 0;
let computerScore = 0; 

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result ="";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE!";
    }
    else{
        //statements to make the game work, each choice has its different things it beats and looses//
        switch(playerChoice){
                case "rock":
                    result = (computerChoice === "scissors" || computerChoice === "stapler") ? "YOU WIN!" : "YOU LOSE!";
                    break;
                case "paper":
                    result = (computerChoice === "rock" || computerChoice === "tape") ? "YOU WIN!" : "YOU LOSE!";
                    break;
                case "scissors":
                    result = (computerChoice === "paper" || computerChoice === "stapler") ? "YOU WIN!" : "YOU LOSE!";
                    break;
                case "stapler":
                    result = (computerChoice === "paper" || computerChoice === "tape") ? "YOU WIN!" : "YOU LOSE!";
                    break;
                case "tape":
                    result = (computerChoice === "scissors" || computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                    break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    

    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            resultDisplay.classList.add("greenText");
            resultDisplay.classList.remove("redText");
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            resultDisplay.classList.add("redText");
            resultDisplay.classList.remove("greenText");
            break;
    }
    function Reset(){
        playerScore = 0;
        computerScore = 0;
        playerScoreDisplay.textContent = 0;
        computerScoreDisplay.textContent=0;
    }
    resetButton.addEventListener("click", Reset)
}