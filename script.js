let userchoice = document.querySelector("#userchoice")
let playbtn = document.querySelector("#play")
let message = document.querySelector("#message")
playbtn.addEventListener("click", () => {
    let userinp = userchoice.value.trim().toLowerCase();
    const choices = ["rock", "paper", "scissors"];
    if (!choices.includes(userinp)) {
        message.textContent = `please choose rock or paper or scissors`;
        return;

    }
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";
    if (userinp === computerChoice) {
        result = "Its draw .you want play again";

    } else if ((userinp === "rock" && computerChoice === "scissors") ||
        (userinp === "paper" && computerChoice === "rock") ||
        (userinp === "scissors" && computerChoice === "paper")) {
        result = "Congratulations!. You won the game";
        triggerConfetti();
    } else {
        result = "You lose!";
    }
    message.textContent = `You chose ${userinp.charAt(0).toUpperCase() + userinp.slice(1)}. Computer chose ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}. ${result}`;




});


function triggerConfetti() {
    const confettiCount = 100; // Number of confetti pieces to generate
    const container = document.body; // We will append confetti to the body

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div'); // Create a new div element
        confetti.classList.add('confetti'); // Add the "confetti" class to the div
        container.appendChild(confetti); // Append the confetti element to the body

        // Randomly set a position for each confetti piece
        confetti.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random duration for falling
        confetti.style.animationDelay = `${Math.random() * 2}s`; // Random delay before falling
    }
}