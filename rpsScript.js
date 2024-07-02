//Dom variables//
const buttons = document.querySelectorAll(".bttn");
const printScores = document.querySelector(".printScores");
const printHuman = document.querySelector("#printHuman");
const printComputer = document.querySelector("#printComputer");
const printWinner = document.querySelector("#printWinner");
const playAgain = document.querySelector("#playAgain");

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
let refreshbutton = document.createElement('button');
let buttonText = document.createTextNode("Play again?");
refreshbutton.appendChild(buttonText);

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
            printHuman.innerHTML = "you chose: " + humanChoice;
            printComputer.innerHTML = "The computer chose: " + computerChoice;
            printWinner.innerHTML = "It's a tie!"
        } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
                    (humanChoice === "paper" && computerChoice === "rock") ||
                    (humanChoice === "scissors" && computerChoice === "paper")) {
                        humanScore++;
                        printScores.innerHTML = humanScore + "-" + computerScore ;
                        printHuman.innerHTML = "you chose: " + humanChoice;
                        printComputer.innerHTML = "The computer chose: " + computerChoice;
                        printWinner.innerHTML = "You win! :)"
        } else {
            computerScore++;
            printScores.innerHTML = humanScore + "-" + computerScore ;
            printHuman.innerHTML = "you chose: " + humanChoice;
            printComputer.innerHTML = "The computer chose: " + computerChoice;
            printWinner.innerHTML = "You lose! :("
        }
        
        //print overall winner and disable buttons (window settimeout for later versions)//
        if (humanScore === 5 && computerScore != 5) {
            printWinner.innerHTML = "You won the game! :)"
            disableButtons();
            playAgain.appendChild(refreshbutton);
        } else if (computerScore === 5 && humanScore != 5) {
            printWinner.innerHTML = "You lost the game! :("
            disableButtons();
            playAgain.appendChild(refreshbutton);
        } else if (humanScore === 5 && computerScore === 5) {
            printWinner.innerHTML = "You tied the game!"
            disableButtons();
            playAgain.appendChild(refreshbutton);
        }
    }
    })
})
