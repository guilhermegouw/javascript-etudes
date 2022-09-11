/**
 * MAGIC 8-BALL
 * 
 * 1. Start by setting a variable that get a random value assigned to it. The
 * value is assigned by generating a random number 0-5, for 6 possible results. 
 * You can increase this number as you add more results.
 * 2. Create a prompt that can get a string value input from a user that you 
 * can repeat back in the final output.
 * 3. Create 6 responses using the switch statement, each assigned to a 
 * different value from the random number generator.
 * 4. Create a variable to hold the end response, which should be a sentence
 * printed for the user. You can assign different string values for each case,
 * assigning new values depending on the results from the random value.
 * 5. Output the user's original question, plus the randonly selected case
 * response, to the console after the user enters their question.
 */

let randomNumber = Math.random();
randomNumber *= 6;
randomNumber = Math.floor(randomNumber);

let userQuestion = prompt("Your question: ");

switch(randomNumber) {
    case 0:
        msg = "No way!";
        break
    case 1:
        msg = "Probably Not";
        break
    case 2:
        msg = "Maybe";
        break
    case 3:
        msg = "It's possible.";
        break
    case 4:
        msg = "Yes";
        break
    case 5:
        msg = "For sure!";             
        break
    }

finalMsg = userQuestion + " " + msg;
console.log(finalMsg);