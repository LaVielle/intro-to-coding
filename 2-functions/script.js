// // // // // // // // // // // // // // // // // // // // // // //
//                                                                //
// Open the JavaScript console of your browser to see the results //
//                                                                //
// // // // // // // // // // // // // // // // // // // // // // //


// declare a function like this:
function functionName(parameters){
   // code to execute
}

// For example, let's write a function that says Hello:
function sayHello(){
      console.log("Hello!")
}

// And now let's call that function:
sayHello();

// Let's make a more personal version:
function sayHi(name){
   console.log("Hey", name + "! How's it going?");
}

sayHi('Sam');

// Let's go shopping!
function calculateBasket(item1, item2, item3, tax){
   var sum = item1 + item2 + item3;
   var taxAmount = tax / 100 * sum;
   var total = sum + tax;
   return total;
}

var tshirt = 10;
var jeans = 20;
var jacket = 70;

console.log(calculateBasket(tshirt, jeans, jacket, 8.5)); // returns 108.5
