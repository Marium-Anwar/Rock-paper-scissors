let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice"); //selecting all 3 divs
const msg = document.querySelector("#msg"); //access msg

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3); // generate a random number and take it as an index of our array.
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Draw. Play again!";
    msg.style.backgroundColor = "#FFBC0A";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore; 
        msg.innerText = `YOU WIN! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#138A36";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `YOU LOST! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "#A8201A";
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true; //to track either user wins or not
        if(userChoice === "rock") {
            //comp can only choose paper, scissors
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper") {
            //comp can only choose rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            //comp can only choose rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => { 
        const userChoice = choice.getAttribute("id"); //access id of each div
        playGame(userChoice) //call playGame function and pass userChoice in it so that comp knows what user choosed.
    })
})




