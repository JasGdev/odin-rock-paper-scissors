function getComputerChoice(){
    num = Math.random()*100+1
    if (num<33){
        return "rock"
    } else if (num <66){
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice(){
    let choice = prompt("What is your choice?")
    return choice
}




function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice == 'rock' && computerChoice == 'scissors' ||
            humanChoice == 'scissors' && computerChoice == 'paper' ||
            humanChoice == 'paper' && computerChoice == 'rock' 
        ){
            humanScore++;
            console.log(`human wins with ${humanChoice} over computers ${computerChoice},
                human score is ${humanScore} and computer score is ${computerScore}`)
        } else if (
            computerChoice == 'rock' && humanChoice == 'scissors' ||
            computerChoice == 'scissors' && humanChoice == 'paper' ||
            computerChoice == 'paper' && humanChoice == 'rock' 
        ){
            computerScore++;
            console.log(`computer wins with ${computerChoice} over humans ${humanChoice},
                human score is ${humanScore} and computer score is ${computerScore}`)
        } else {
            console.log(`Tie, human score is ${humanScore} and computer score is ${computerScore}`)
        }
    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if (humanScore > computerScore){
        console.log('human is the ultimate winner,'+ ` human score is ${humanScore} and computer score is ${computerScore}`)
    } else if (computerScore > humanScore){
        console.log('computer is the ultimate winner,'+ ` human score is ${humanScore} and computer score is ${computerScore}`)
    } else {
        console.log(`Tie, human score is ${humanScore} and computer score is ${computerScore}`)
    }

}

playGame();