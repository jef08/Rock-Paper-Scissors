//Dom variables//
const buttons = document.querySelectorAll(".bttn");
const printHumanScore = document.querySelector("#printHumanScore");
const printComputerScore = document.querySelector("#printComputerScore");
const printHuman = document.querySelector("#printHuman");
const printComputer = document.querySelector("#printComputer");
const printWinner = document.querySelector("#printWinner");

//scores//
let humanScore = 0;
let computerScore = 0;

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
        
        if (humanChoice === computerChoice) {
            computerScore++;
            humanScore++;
            printHumanScore.innerHTML = "You: " + humanScore;
            printComputerScore.innerHTML = "Computer: " + computerScore;
            printHuman.innerHTML = "you chose: " + humanChoice;
            printComputer.innerHTML = "The computer chose: " + computerChoice;
        } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
                    (humanChoice === "paper" && computerChoice === "rock") ||
                    (humanChoice === "scissors" && computerChoice === "paper")) {
                        humanScore++;
                        printHumanScore.innerHTML = "You: " + humanScore;
                        printComputerScore.innerHTML = "Computer: " + computerScore;
                        printHuman.innerHTML = "you chose: " + humanChoice;
                        printComputer.innerHTML = "The computer chose: " + computerChoice;
        } else {
            computerScore++;
            printHumanScore.innerHTML = "You: " + humanScore;
            printComputerScore.innerHTML = "Computer: " + computerScore;
            printHuman.innerHTML = "you chose: " + humanChoice;
            printComputer.innerHTML = "The computer chose: " + computerChoice;
        }
        
        if (humanScore === 5) {
            printWinner.innerHTML = "You win! :)"
            button.disabled = true;
        } else if (computerScore === 5) {
            printWinner.innerHTML = "You lose! :("
            button.disabled = true;
        } else if (humanScore === 5 && computerScore === 5) {
            printWinner.innerHTML = "It's a tie!"
            button.disabled = true;
        }
    }
    })
})
