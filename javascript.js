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



function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let display = document.createElement('div');
    body.appendChild(display);

    function playRound(humanChoice, computerChoice){
    
    
    
        if (humanChoice == 'rock' && computerChoice == 'scissors' ||
            humanChoice == 'scissors' && computerChoice == 'paper' ||
            humanChoice == 'paper' && computerChoice == 'rock' 
        ){
            humanScore++;
            display.textContent = `human wins with ${humanChoice} over computers ${computerChoice},
                human score is ${humanScore} and computer score is ${computerScore}`;
        } else if (
            computerChoice == 'rock' && humanChoice == 'scissors' ||
            computerChoice == 'scissors' && humanChoice == 'paper' ||
            computerChoice == 'paper' && humanChoice == 'rock' 
        ){
            computerScore++;
            display.textContent = `computer wins with ${computerChoice} over humans ${humanChoice},
                human score is ${humanScore} and computer score is ${computerScore}`;
        } else {
            display.textContent = `Tie, human score is ${humanScore} and computer score is ${computerScore}`;
        }
    }


    // button setup
    let body = document.querySelector('body');
    body.addEventListener('click', (event) => {
        let target = event.target;

        switch(target.id){
            case 'rock':
                playRound('rock', getComputerChoice());
                // console.log("rock");
                break
                
            case 'paper':
                playRound('paper', getComputerChoice());
                // console.log("paper");
                break
                 
            case 'scissors':
                playRound('scissors', getComputerChoice());
                // console.log("scissors");
                break         
        }
    })

    
    

    

    // if (humanScore > computerScore){
    //     console.log('human is the ultimate winner,'+ ` human score is ${humanScore} and computer score is ${computerScore}`)
    // } else if (computerScore > humanScore){
    //     console.log('computer is the ultimate winner,'+ ` human score is ${humanScore} and computer score is ${computerScore}`)
    // } else {
    //     console.log(`Tie, human score is ${humanScore} and computer score is ${computerScore}XXX`)
    // }

}

playGame();