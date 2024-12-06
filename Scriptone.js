let carGuess = "Mustang";
let gameStarted = false;  

console.log("Welcome to the Auto Guesser Game!");


for (let i = 1; i <= 3; i++) {
    console.log("Game is ready. Round " + i);
}


let carTypes = ["Mustang", "Charger", "Camaro", "Wrangler"];
console.log("Possible cars to guess: ");
for (let i = 0; i < carTypes.length; i++) {
    console.log(carTypes[i]);
}

if (gameStarted) {
    console.log("Game not started yet. Press 'START' to begin.");
} else {
    console.log("The game has started! Guess the car.");
}

let guessMessage = "You guessed: " + carGuess;
console.log(guessMessage);
carGuess = "Charger";
console.log("New guess: " + carGuess);