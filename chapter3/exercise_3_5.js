/*
1. Create an object named people that contains an empty array that is called
friends. 
2. Create three variables, each containing an object, that contain one of your
friend's first names, last names, and an ID value.
3. Add the three friends to the friend array
4. Output to the console.
*/

let people = {
    friends: []
}

let friend1 = {
    firstName: 'Guilherme',
    lastName: 'Gouw',
    id: 001
}

let friend2 = {
    firstName: 'Luciana',
    lastName: 'Coitinho',
    id: 002
}

let friend3 = {
    firstName: 'Pedro',
    lastName: 'Gouw',
    id: 003
}

people.friends.push(friend1, friend2, friend3)

console.log(people);