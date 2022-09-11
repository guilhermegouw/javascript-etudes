/**
 * We are going to create a program that will randomly describe an inputted 
 * name.
 * 
 * 1. Create an array of descriptive words.
 * 
 * 2. Create a function that contains a prompt asking the user for a name.
 * 
 * 3. Select a random value from the array using Math.random.
 * 
 * 4. Output into the console the prompt value and the randomly selected array
 * value.
 * 
 * 5. Invoke the function.
 */

let descriptiveWords = ["good", "bad", "beautiful", "ugly", "smart", "dumb"];

function getName() {
    let name = prompt("Enter you name: ");
    return name
}

let randomIndex = Math.random();
randomIndex *= descriptiveWords.length;
randomIndex = Math.floor(randomIndex);

console.log(`${getName()} is ${descriptiveWords[randomIndex]}`);