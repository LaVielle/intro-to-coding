// // // // // // // // // // // // // // // // // // // // // // //
//                                                                //
// Open the JavaScript console of your browser to see the results //
//                                                                //
// // // // // // // // // // // // // // // // // // // // // // //


// Sometimes we want to check if a condition is met in order to execut some code.
// For example, whether a car should go or not based on the color of the light.

// Declare and initiate lightColor variable:
var lightColor = "red";

// Declar drive variable. It will hold a value telling us whether we should drive or not.
var drive;

// Let's nest our conditional statement inside a funtion for better simplicity
function intersection(){

   // Check first condition: is the light "red"
   if (lightColor == "red"){
      // If so, set value of drive to false. Do not go!
      drive = false;
   }
   // If light is not red, check second condition: is the light "orange"
   else if (lightColor == "orange") {
      // still not a go...
      drive = false;
   }
   // If light is not red nor orange, check third condition: if the light is "green", "broken", or anything else...
   else{
      // Set the value of drive to true: you can go ahead!
      drive = true;
   }
}

// Let's run our function to check whether we can drive or not:
intersection();
console.log(drive); // will return false since lightColor is red

// Let's switch the light to green
lightColor = "green";

// Let's check again
intersection();
console.log(drive); // will return true since lightColor is green
