// // // // // // // // // // // // // // // // // // // // // // //
//                                                                //
// Open the JavaScript console of your browser to see the results //
//                                                                //
// // // // // // // // // // // // // // // // // // // // // // //


// Let's declare a variable and call it myVar:
var myVar;

// Now let's initialize it by giving it a value:
myVar = 5;

// We can now access whatever value is stored:
console.log(myVar);

// We can use it in calculations:
console.log(myVar + 5); // will return 10

// We can modify its value:
myVar += 20; // myVar now equals: 5 + 20 = 25

// Let's create another variable var2. We can declare it and initialize it at the same time:
var var2 = 100;

// We can add variables together
console.log(myVar + var2); // Will return: 25 + 100 = 125;

// Variables can also contain other data types:
//   // string
var name = 'Jane';
console.log("My name is", name);

// // booleans
var myBool = 1+1 == 4;
console.log(myBool); // Will return false, because 1 + 1 = 2, not 4.

//   // "lists", we then call this variable an array:
var names = ["Sam", "Clem", "Ben"];
// We access the value of an item in the array by using its index:
console.log("I am",names[0] + ". My sister and brother are", names[1], "and", names[2] + ".");

// An array can contain all data types (integers, strings, objects, etc.)
var randomArray = [1, "you", "Texas", "5", 5];
console.log(randomArray[0]); // 1
console.log(randomArray[2]); // Texas

// // objects! We will take a deeper look at objects later.
var car = {
   brand: "Audi",
   model: "A7",
   maxspeed: 325
}
console.log(car) // will return entire object
console.log(car.brand); // will return value of specific property
