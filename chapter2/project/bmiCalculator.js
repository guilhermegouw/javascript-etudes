/*
Set values for height in inches and weight in pounds, then convert the values
to centimeters and kilos, outputting the results to the console:
- 1 inch is equal to 2.54 cm
- 2.2046 pounds is equal to 1 kilo

Output the results. 
Then, calculate and log the BMI: this is equal to weight (in kilos) divided by squared height (in meters). 
Output the results to the console.
*/
let heightInches = 68.8976;
let weightPounds = 176.37;
let heightCentimeters = heightInches * 2.54;
let weightKilos = weightPounds / 2.2046;
let bmi = weightKilos / (heightCentimeters/100) ** 2;
console.log('The BMI of a person with ' + heightCentimeters/100 + ' meters height and ' + weightKilos + ' kilos of weight is: ' + bmi);