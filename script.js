// Rock paper scissors
//variables//
const choices = ["rock", "paper", "scissors", "tape", "stapler"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const resetButton = document.getElementById("Reset")
let playerScore = 0;
let computerScore = 0; 

function playGame(playerChoice){
    //allows the computer' decision to work propely//
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
    //allows the statements for the game to function work//
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `computer: ${computerChoice}`;
    resultDisplay.textContent = result;
    //allows the color change depending on the outcome to work, (for win or lose scenarios not TIEs) 
    resultDisplay.classList.remove("greenText", "redText")

    switch(result){
        //this changes the color depedning on the outcome and decision made by the player in this case if the player wins//
        case "YOU WIN!":
            resultDisplay.classList.remove ("darkText");
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            resultDisplay.classList.remove ("darkText");
            resultDisplay.classList.add("greenText");
            resultDisplay.classList.remove("redText");
            break;
            // this changes the color depending on the outcome and decision made by the player in this case if the player loses//
        case "YOU LOSE!":
            resultDisplay.classList.remove ("darkText");
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            resultDisplay.classList.remove ("darkText");
            resultDisplay.classList.add("redText");
            break;
    }
    //this is the reset function and allows the game's score to be reset and refreshes the socre, it also promps up a message to the player that says select  item, this guides the player and adds a customization that makes it cool!//
    function Reset(){
        playerScore = 0;
        computerScore = 0;
        playerScoreDisplay.innerHTML = 0;
        computerScoreDisplay.innerHTML=0;
        resultDisplay.innerHTML= "Select a item!";
        resultDisplay.classList.add ("darkText");
        resultDisplay.classList.remove("greenText");
        resultDisplay.classList.remove("redText");
        console.log (playerScore)
    }
    //even listener that allows the button for the reset function to work//
    resetButton.addEventListener("click", Reset)
}