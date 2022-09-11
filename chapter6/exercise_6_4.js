/**
 * Modify the calculator that you made in Practice exercise 6.2 to return added 
 * values instead of printing them. Then, call the function 10 or more times in 
 * a loop, and store the results in an array. Once the loop finishes, output 
 * the final array into the console.
 * 
 * 1. Set up an empty array to store the values that will be calculated within 
 * the loop.
 * 
 * 2. Create a loop that runs 10 times, incrementing by 1 each time, creating 
 * two values each iteration. For the first value, multiply the value of the 
 * loop count by 5. For the second value, multiply the value of the loop 
 * counter by itself.
 * 
 * 3. Create a function that returns the value of the two parameters passed 
 * into the function when it is called. Add the values together, returning the 
 * result.
 * 
 * 4. Within the loop, call the calculation function, passing in the two values 
 * as arguments into the function and storing the returned result in a response
 * variable.
 * 
 * 5. Still within the loop, push the result values into the array as it 
 * iterates through the loop.
 * 
 * 6. After the loop is complete, output the value of the array into the 
 * console.
 * 
 * 7. You should see the values [0, 6, 14, 24, 36, 50, 66, 84, 104, 126] for
 * the array in the console.
 */
let arr = [];

 function calculator(num1, num2, operation='add') {
    if (operation === 'add') {
        return num1 + num2;
    } else if (operation === 'subtract') {
        return num1 - num2;
    }
}

for (let i = 0; i<10; i++) {
    arr.push(calculator(i*5, i*i));
}

console.log(arr);