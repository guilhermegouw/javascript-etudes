/**
 * ROCK PAPER AND SCISSORS GAME
 * 
 * This is a game between a player and the computer, where both will make a
 * random selection of either Rock, Paper, Scissors (alternatively, you could 
 * create a version using real player input). Rock will beat out scissors, 
 * Paper will beat out Rock, and Scissors will beat out Paper. You can use
 * Javascript to create your own version of this game, applying the logic with
 * an if statement. Since this project is a little more dificult, here are 
 * some suggested steps:
 * 
 * 1. Create an array that contains the variables Rock, Paper, and Scissors.
 * 2. Set up a variable that generates a random number 0-2 for the player and 
 * then do the same for the computer's selection. The number represents the 
 * index values in the array of the 3 items.
 * 3. Create a variable to hold a response message to the user. This can show 
 * the random results for the player and them also the result for the computer
 * of the matching item from the array.
 * 4. Create a condition to handle the payer and computer selections. If both 
 * are the same, this results in a tie. 
 * 5. Use conditions to apply the game logic and return the correct results.
 * There are several ways to do this with the condition statements, but you
 * could check witch player's index value is bigger and assign the victory 
 * accordingly, with the exception of Rock beating Scissors. 
 * 6. Add a new output message that shows the palyer selection versus the 
 * computer selection and the result of the game.
 */

let options = {
    0: 'Rock',
    1: 'Paper',
    2: 'Scissors'
};

let computerChoice = Math.random();
computerChoice *= 6;
computerChoice = Math.floor(computerChoice);

let playerChoice = prompt("Enter\n0: Rock\n1: Paper\n2: Scissors\n")
playerChoice = Number(playerChoice);

if (computerChoice === playerChoice) {
    console.log('Draw');
} else if (computerChoice === 0 && playerChoice === 1) {
    console.log('Congratulations, you win!');
} else if (computerChoice === 0 && playerChoice === 2) {
    console.log('You lose!');
} else if (computerChoice === 1 && playerChoice === 0) {
    console.log('You lose!');
} else if (computerChoice === 1 && playerChoice === 2) {
    console.log('Congratulations, you win!');
} else if (computerChoice === 2 && playerChoice === 0) {
    console.log('Congratulations, you win!');
} else if (computerChoice === 2 && playerChoice === 1) {
    console.log('You lose!');
}

if (playerChoice < 0 || playerChoice > 2) {
        console.log('Not a valid input.');
    }
