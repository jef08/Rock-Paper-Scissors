//Dom variables//
const buttons = document.querySelectorAll(".bttn");
const printScores = document.querySelector(".printScores");
const printHuman = document.querySelector("#printHuman");
const printWinner = document.querySelector("#printWinner");
const playAgain = document.querySelector("#playAgain");
const choose = document.querySelector(".choose")

//scores//
let humanScore = 0;
let computerScore = 0;

//to later disable buttons//
function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

//function for playAgain button to refresh page//
function refreshPage () {
    location.reload()
}
playAgain.addEventListener('click', refreshPage)

//Code for button and text within button// 
//code for button to appear is with the winner code at the bottom//
let refreshButton = document.createElement('button');
refreshButton.classList.add('refreshButton');
let buttonText = document.createTextNode("Play again?");
refreshButton.appendChild(buttonText);



//function through eventlistener on each click//
buttons.forEach((button) => {
    button.addEventListener("click", () => {
    getComputerChoice();
    getHumanChoice();
    playRound();

    //function for human choice//
    function getHumanChoice() {
        let humanChoice = button.dataset.humanChoice;
        return humanChoice
    }
    
    //function for computer choice
    function getComputerChoice() {
        let choices = ['rock', 'paper', 'scissors']
        let computerChoice = choices[Math.floor(Math.random() * choices.length)]
        return computerChoice;
    }
    
    //function for playing a round//
    function playRound() {
        
        //variables//
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        
        //Logic for scores and printing//
        if (humanChoice === computerChoice) {
            computerScore++;
            humanScore++;
            printScores.innerHTML = humanScore + "-" + computerScore ;
            printHuman.innerHTML = "You chose: " + humanChoice + "   |   " + "The computer chose: " + computerChoice;
            printWinner.innerHTML = "Draw - one point each"
        } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
                    (humanChoice === "paper" && computerChoice === "rock") ||
                    (humanChoice === "scissors" && computerChoice === "paper")) {
                        humanScore++;
                        printScores.innerHTML = humanScore + "-" + computerScore ;
                        printHuman.innerHTML = "You chose: " + humanChoice + "   |   " + "The computer chose: " + computerChoice;
                        printWinner.innerHTML = humanChoice + " beats " + computerChoice + "!"
        } else {
            computerScore++;
            printScores.innerHTML = humanScore + "-" + computerScore ;
            printHuman.innerHTML = "You chose: " + humanChoice + "   |   " + "The computer chose: " + computerChoice;
            printWinner.innerHTML = computerChoice + " beats " + humanChoice + "!"
        }
        
        //print overall winner and disable buttons (window settimeout for later versions)//
        if (humanScore === 5 && computerScore != 5) {
            choose.remove();
            printHuman.remove();
            printWinner.style.fontSize = "40px"
            printWinner.innerHTML = "You won! :)"
            disableButtons();
            playAgain.appendChild(refreshButton);
        } else if (computerScore === 5 && humanScore != 5) {
            choose.remove();
            printHuman.remove();
            printWinner.style.fontSize = "40px"
            printWinner.innerHTML = "You lost! :("
            disableButtons();
            playAgain.appendChild(refreshButton);
        } else if (humanScore === 5 && computerScore === 5) {
            choose.remove();
            printHuman.remove();
            printWinner.style.fontSize = "4px"
            printWinner.innerHTML = "It's a tie!"
            disableButtons();
            playAgain.appendChild(refreshButton);
        }
    }
    })
})
