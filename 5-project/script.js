// // // // // // // // // // // // // // // // // // // // // // //
//                                                                //
// Open the JavaScript console of your browser to see the results //
//                                                                //
// // // // // // // // // // // // // // // // // // // // // // //


// You own a small store and want to better manage it with your new JavaScript skills.

// First create an array containing the items you have;

// each item type will be an object with properties: name, price, quantity
function itemType (name, price, quantity){
   this.name = name;
   this.price = price;
   this.quantity = quantity;
}

// your store is small, you have only three types of items...
// you create a new object for each item type
var apples = new itemType("apple", 1, 25);
var oranges = new itemType("orange", 1.5, 32);
var watermelons = new itemType("watermelon", 5, 5);

// add the items to your inventory array
var inventory = [apples, oranges, watermelons]; // note, this is an array of objects

// Loop through your inventory array to get an inventory report
for (var i = 0; i < inventory.length; i++){
   console.log("item name:", inventory[i].name);
   console.log("item price:", inventory[i].price);
   console.log("item quantity:", inventory[i].quantity);
   console.log('- - -');
}

// You write a function to get better inventory report, which tells you total quatity and value
function report(){
   var q = 0; //will hold quantity
   var v = 0; //will hold value

   // loops through the inventory array (3 times)
   for (var i = 0; i < inventory.length; i++){
      // loops the quantity of each item (25xapples, 32xoranges, 5xwatermelons)
      for (var j = 0; j < inventory[i].quantity; j++){
         q += 1; // increase total quatity by 1
         v += inventory[i].price; // increase total value by the price of the item
      }
   }
   console.log('-- inventory report --')
   console.log("total quantity:",q);
   console.log("total value: $",v);
   console.log('-- -- -- -- -- -- -- --');
}

// Call the function to get the report
report();

// A customer comes to the register! He has 4 apples, 6 oranges and 1 watermelon
var basket = [];
   basket.push(new itemType("apple", 1, 4));
   basket.push(new itemType("orange", 1.5, 6));
   basket.push(new itemType("watermelon", 5, 1));


console.log(basket); // shows what's in the basket

// this variable contains the value of local sales tax (8.5%).
var tax = 8.5;

// You write a function to handle the checkout process.
function checkout(basket, tax){
   // Creating variables
   var sum = 0;
   var taxAmout = 0;
   var total = 0;

   // loop through the basket (3 times)
   for (var i = 0; i < basket.length; i++){
      // Loops the quantity of each itemType (4xapples, 6xoranges, 1xwatermelon)
      for (var j = 0; j < basket[i].quantity; j++){
         sum += basket[i].price; // add price of each item to sum

         // We must delete each sold item from the inventory!
         inventory[i].quantity -=1;

         // Option: let's log this opperation to make sure it's computing properly:
         // console.log(inventory[i].name, "left in inventory", inventory[i].quantity);
      }
   }

   taxAmout = tax / 100 * sum; // compute taxAmout
   total = sum + taxAmout;

   return total;
}

console.log(checkout(basket, tax));

// You now run a new inventory report to see its updated state
report(); // You inventory is up to date! Amazing!






// Easy peasy!
