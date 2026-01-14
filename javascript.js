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
let body = document.querySelector('body');



function playGame(){
    let gameOver = false;
    let humanScore = 0;
    let computerScore = 0;
    let display = document.createElement('div');
    body.appendChild(display);

    function playRound(humanChoice, computerChoice){
        if (humanChoice == 'rock' && computerChoice == 'scissors' ||
            humanChoice == 'scissors' && computerChoice == 'paper' ||
            humanChoice == 'paper' && computerChoice == 'rock' 
        ){
            ++humanScore;
            if (humanScore == 5){
                console.log(humanScore)
                display.textContent = 'GAME OVER, human is the ultimate winner,'+ ` human score is ${humanScore} 
                and computer score is ${computerScore}`
                gameOver = true;
                console.log(gameOver)
                
            } 
            else {
                display.textContent = `human wins with ${humanChoice} over computers ${computerChoice},
                human score is ${humanScore} and computer score is ${computerScore}`;
            }
            
        } else if (
            computerChoice == 'rock' && humanChoice == 'scissors' ||
            computerChoice == 'scissors' && humanChoice == 'paper' ||
            computerChoice == 'paper' && humanChoice == 'rock' 
        ){
            ++computerScore;
            if (computerScore == 5){
                console.log(computerScore)
                display.textContent = 'GAME OVER, computer is the ultimate winner,'+ ` human score is ${humanScore}
                and computer score is ${computerScore}`
                gameOver = true;
                console.log(gameOver)
            } 
            else {
                display.textContent = `computer wins with ${computerChoice} over humans ${humanChoice},
                human score is ${humanScore} and computer score is ${computerScore}`;
            }

            
        } else {
            display.textContent = `Tie, human score is ${humanScore} and computer score is ${computerScore}`;
        }
    }

    // button setup
    body.addEventListener('click', (event) => {
        let target = event.target;
        if (!gameOver){
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
        } 
        
    })

    }

playGame();