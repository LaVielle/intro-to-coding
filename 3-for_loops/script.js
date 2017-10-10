// // // // // // // // // // // // // // // // // // // // // // //
//                                                                //
// Open the JavaScript console of your browser to see the results //
//                                                                //
// // // // // // // // // // // // // // // // // // // // // // //


// Let's fill an array with numbers from 1 to 10:
var hardArray = [1,2,3,4,5,6,7,8,9,10];

console.log(hardArray);

// Ok, but what if we want to fill this array with 1-100, or 1-1000... that will take too long!
// We can use a for loop.

var easyArray = [];

for (var i = 0; i < 100; i++){
   // We use the push() JavaScript method to add elements to the end of an array
   easyArray.push(i+1);
}

console.log(easyArray); // easyArray is filled with 100 elements!

// We can also loop through the array and show each element
for (var i = 0; i < easyArray.length; i++){
   console.log("easyArray[" + i + "]: " + easyArray[i]);
}

// Let's loop through easyArray to change the value of each element:
for (var i = 0; i < easyArray.length; i++){
   // We use the Math.random() JS function to generate a random number, and then round it with Math.floor()
   easyArray[i] = Math.floor(Math.random() * 100);
}

// Let's show the new value of each element:
for (var i = 0; i < easyArray.length; i++){
   console.log("easyArray[" + i + "]: " + easyArray[i]);
}

// Easy peasy!
