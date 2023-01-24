const getUserChoice=userInput=>{
    userInput = userInput.toLowerCase();
    if(userInput==='rock'||userInput==='paper'||userInput==='scissors'||userInput==='bomb'){
        return userInput;
    }
    else{
        console.log('Error!');
    }

};
const getComputerChoice=()=>{
    let randomNumber=Math.floor(Math.random()*3);
    switch(randomNumber){
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
        default:
            return 'Will never log to the console';
            break;
    }
};
const determineWinner=(userChoice,computerChoice)=>{
    if(userChoice==='bomb'){
        return 'The User Won';
    }
    if(userChoice===computerChoice){
        return 'Game was a tie';
    }
    if(userChoice==='rock'){
        if(computerChoice==='paper'){
            return 'Computer Won';
        }
        else{
            return 'User Won';
        }
    }
    if(userChoice==='paper'){
        if(computerChoice==='scissors'){
            return 'Computer Won';
        }
        else{
            return 'User Won';
        }
    }
    if(userChoice==='scissors'){
        if(computerChoice==='rock'){
            return 'Computer Won';
        }
        else{
            return 'User Won';
        }
    }
};
const playGame=()=>{
    const userChoice=getUserChoice('bomb');
    console.log(`The user Choice is ${userChoice}`);
    const computerChoice=getComputerChoice(); 
    console.log(`The Computer choice is ${computerChoice}`);
    console.log(determineWinner(userChoice,computerChoice));
};
playGame();


