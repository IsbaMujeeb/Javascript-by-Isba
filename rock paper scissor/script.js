let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"]; 
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

const playGame = (userChoice, compChoice) => { 
    if(userChoice === compChoice) {
        document.getElementById("msg").textContent = "It's a tie!";
    } 
    else if((userChoice === "rock" && compChoice === "scissors") ||
            (userChoice === "paper" && compChoice === "rock") ||
            (userChoice === "scissors" && compChoice === "paper")) {
        document.getElementById("msg").textContent = "You win!";
        userScore++;
        document.getElementById("user-score").textContent = userScore;
        msg.style.backgroundColor = "#086e11";

    } else {
        document.getElementById("msg").textContent = "Computer wins!";
        comScore++;
        document.getElementById("comp-score").textContent = comScore;
        msg.style.backgroundColor = "#c0392b";
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("user choice =", userChoice);
        const compChoice = genCompChoice();
        console.log("compuetr choice=", compChoice);
        playGame(userChoice, compChoice);
    });
});