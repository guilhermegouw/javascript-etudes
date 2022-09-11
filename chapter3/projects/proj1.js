/**
 * MANIPULATING AN ARRAY
 * 
 * Take the following array:
 * 
 * const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score:55}, ['one', 'two']];
 * 
 * Manipulate your array using various methods, such as pop(), push(), shift(), and unshift(), and transform it into the following:
 * 
 * ["FIRST", 'Svekis', 'MIDDLE', 'hello world', 'LAST']
 *
 * You can take the following steps, or adopt your own approach:
 * 
 * 1. Remove the first and the last items.
 * 2. Add FIRST to the start of the array.
 * 3. Assign hello world to the fourth item value.
 * 4. Assign MIDDLE to the third index value.
 * 5. Add LAST to the last position in the array.
 * 6. Output it to the console.
 */


const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score:55}, ['one', 'two']];

theList[0] = "FIRST";
theList.splice(2, 7, 'MIDDLE', 'hello world', 'LAST')

console.log(theList);
