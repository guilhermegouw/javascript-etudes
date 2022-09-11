/**
 * EVALUATIONG A NUMBER GAME
 * 
 * Ask the user to enter a number and check whether it's greater than, 
 * equal to, or less than a dynamic number value in your code. Output the result to the user. 
 */

let randomNumber = Math.random();
randomNumber *= 100;
randomNumber = Math.floor(randomNumber);

let usersNumber = prompt("Enter a number between 0-100: ")

if (usersNumber > randomNumber) {
    console.log("Your number is higher than the one I am thinking.");
} else if (usersNumber === randomNumber) {
    console.log(`Congratulations! ${usersNumber} is the number I was thinking.`);
}
else if (usersNumber < randomNumber) {
    console.log("Your number is lower than the one I am thinking.");
}
