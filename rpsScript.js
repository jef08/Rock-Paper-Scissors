//Dom variables//
const bttn = document.querySelectorAll(".bttn");
const printHumanScore = document.querySelector("#printHumanScore");
const printComputerScore = document.querySelector("#printComputerScore");
const printHuman = document.querySelector("#printHuman");
const printComputer = document.querySelector("#printComputer");
const printWinner = document.querySelector("#printWinner");

//scores//
let humanScore = 0;
let computerScore = 0;

//function through eventlistener on each click//
bttn.forEach((button) => {
    button.addEventListener("click", () => {
    getComputerChoice();
    getHumanChoice();
    playRound();
    playGame();
})
    //variables//
let computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();

    //function for human choice//
function getHumanChoice() {
    let humanChoice = button.value;
    return humanChoice
}
    
    //function for computer choice
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors']
    let computerChoice = choices[Math.floor(Math.random() * choices.length)]
    return computerChoice;
}
    
    //function for playing a round//
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        printHumanScore.innerHTML = "You: " + humanScore;
        printComputerScore.innerHTML = "Computer: " + computerScore;
        printHuman.innerHTML = "You chose: " + humanChoice;
        printComputer.innerHTML = "The computer chose: " + computerChoice;
    } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
                (humanChoice === "paper" && computerChoice === "rock") ||
                (humanChoice === "scissors" && computerChoice === "paper")) {
                    humanScore++;
                    printHumanScore.innerHTML = "You: " + humanScore;
                    printComputerScore.innerHTML = "Computer: " + computerScore;
                    printHuman.innerHTML = "You chose: " + humanChoice;
                    printComputer.innerHTML = "The computer chose: " + computerChoice;
    } else {
        computerScore++;
        printHumanScore.innerHTML = "You: " + humanScore;
        printComputerScore.innerHTML = "Computer: " + computerScore;
        printHuman.innerHTML = "You chose: " + humanChoice;
        printComputer.innerHTML = "The computer chose: " + computerChoice;
    }
    return playRound;
}
    
    //function for playing a whole game//
function playGame () {
    for (let rounds=1; rounds<=5; rounds++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        if (rounds === 5 && (humanScore > computerScore)) {
            printWinner.innerHTML = "You win! :)";
        } else if (rounds === 5 && (computerScore > humanScore)) {
            printWinner.innerHTML = "You lose. :(";
        } else if (rounds === 5) {
            printWinner.innerHTML = "It's a tie!";
        }
    }
    return playGame; 
}    
})








