function getComputerChoice() {
    let words = ['rock' , 'paper' , 'scissors']
    let computerChoice = words[Math.floor(Math.random() * words.length)]
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, or scissors?");
    return humanChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("it's a tie!");
    } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
                (humanChoice === "paper" && computerChoice === "rock") ||
                (humanChoice === "scissors" && computerChoice === "paper")) {
                    humanScore++;
                    console.log('You win!')
    } else {
        computerScore++;
        console.log('You lose :(')
    }
    return playRound;
}

function playGame () {
    for (let rounds=1; rounds<=5; rounds++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        alert("You chose " + `${humanChoice} ` + "and the computer chose " + `${computerChoice}`);
        alert("Score: " + humanScore + "-" + computerScore);
        if (rounds === 5 && (humanScore > computerScore)) {
        alert("You win!");
        } else if (rounds === 5 && (computerScore > humanScore)) {
        alert("You lose :(");
        } else if (rounds === 5) {
        alert("It's a tie!")
        }
    }
}
console.log(playGame());