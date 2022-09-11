/**
 * FRIEND CHECKER GAME
 * 
 * Ask the user to enter a name, using the switch statement to return a 
 * confirmation that the user is a friend if the name selected is known in the 
 * case statements. You can add a default response that you don't know the 
 * person if it's a unknown name.
 * Output the result into the console.
 */

let name = prompt("Enter a name: ");

switch(name) {
    case 'Guilherme':
        console.log('Guilherme is my friend!')
            break
        case 'Guilherme':
            console.log('Guilherme is my friend!')
            break
        case 'Bruno':
            console.log('Bruno is my friend!')
            break
        case 'Igor':
            console.log('Igor is my friend!')
            break
        case 'Gustavo':
            console.log('Gustavo is my friend!')
            break
        case 'Luciana':
            console.log('Luciana is my friend!')
            break
        default:
            console.log(`I don't Know ${name}`);
}