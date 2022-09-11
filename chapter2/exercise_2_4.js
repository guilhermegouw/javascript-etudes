/*
Create variables for 3 numbers: a, b, and c. Update these variable with the
following actions using the assignment operators:
- Add b to a
- Divide a by c
- Replace the value of c  with the modulus of c and b
- Print all 3 numbers to the console. 
*/

let a = 5;
let b = 10;
let c = 15;

a += b;
a /= c;
c = c % b;
console.log('a: ' + a);
console.log('b: ' + b);
console.log('c: ' + c);