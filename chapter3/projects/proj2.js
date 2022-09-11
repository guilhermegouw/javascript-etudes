/**
 * COMPANY PRODUCT CATALOG
 * 
 * In this project, you will implement a data structure for a product catalog 
 * and create queries to retrieve data.
 * 
 * 1. Create an array to hold an inventory of store items.
 * 2. Create three items, each having the properties of name, model, cost, and quantity.
 * 3. Add all three objects to the main array method, and then log the inventory array
 * to the console.
 * 4. Access the quantity element of your third item, and log it to the console.
 * Experiment by adding and accessing more elements within your data structure.
 */

let inventory = [];

let obj1 = {
    name: "item 1",
    model: "model 1",
    cost: 5,
    quantity: 10,
};

let obj2 = {
    name: "item 2",
    model: "model 2",
    cost: 10,
    quantity: 5,
};

let obj3 = {
    name: "item 3",
    model: "model 3",
    cost: 15,
    quantity: 2,
};

inventory.push(obj1, obj2, obj3);
console.log(inventory);

console.log(inventory[2]['quantity']);