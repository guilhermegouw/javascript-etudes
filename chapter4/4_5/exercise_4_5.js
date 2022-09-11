/**
 * 1. Create a variable called prize and use a prompt to ask the user to set 
 * the value by selecting a number between 0 and 10.
 * 2. Convert the prompt response to a number data type.
 * 3. Create a variable to use for the output message containing the value "My
 * Selection: "
 * 4. Using the switch statement (and creativity), provide a response back
 * regarding a prize that is awarded depending on what number is selected.
 * 5. Use the switch break to add combined results for prizes.
 * 6. Output the message back to the user by concatenating your prize variable 
 * strings and the output message string. 
 */

let prize = prompt("Select a number between 0-10: ")
prize = Number(prize);

let message = "My Selection: ";

switch (prize) {
    case 0:
        message += "was 0."
        break
    case 1:
        message += "was 1."
        break
    case 2:
        message += "was 2."
        break
    case 3:
        message += "was 3."
        break
    case 4:
        message += "was 4."
        break
    case 5:
        message += "was 5."
        break
    case 6:
        message += "was 6."
        break
    case 7:
        message += "was 7."
        break
    case 8:
        message += "was 8."
        break
    case 9:
        message += "was 9."
        break
    case 10:
        message += "was 10."
        break
    default:
        message = "You need to select a number between 0 - 10."
        break
}
console.log(message);