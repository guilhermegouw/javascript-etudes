/*
1. Create an empty array to use as a shopping list.
2. Add Milk, Bread, and Apples to your list.
3. Update "Bread", with Bananas and Eggs.
4.Remove the last item from the array and output it into the console.
5. Sort the list Alphabetically.
6. Find and output the index value of Milk.
7. After Bananas, add Carrots and Lettuce.
8. Create a new list containing Juice and Pop.
9. Combine both lists, adding the new list twice to the end of the first list.
10. Get the last index value of Pop and output it to the console.
11. Your final list hould look like this:
["Bananas", "Carrots", "Lettuce", "Eggs", "Milk", "Juice", "Pop", "Juice", "Pop"]
*/

let shoppingList = ["Milk", "Bread", "Apples"];
shoppingList.splice(1, 1, "Bananas", "Eggs");
console.log(shoppingList);

console.log(shoppingList.pop());

shoppingList.sort();
console.log(shoppingList);

let indexOfMilk = shoppingList.indexOf('Milk');
console.log(indexOfMilk);

shoppingList.splice(1, 0, 'Carrots', 'Lettuce')
console.log(shoppingList);

let newList = ['Juice', 'Pop'];
console.log(newList);

shoppingList = shoppingList.concat(newList);
shoppingList = shoppingList.concat(newList);
console.log(shoppingList);

console.log(shoppingList.lastIndexOf('Pop'));