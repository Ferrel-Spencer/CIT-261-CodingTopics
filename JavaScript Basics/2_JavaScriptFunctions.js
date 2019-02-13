/**Functions
 * Functions are relatively easy, they can be as easy or as complex as we need them to be.
 * In essence functions "do", or in other words run calculations or tasks.
 */
//--------Declartation
/**
 * There are two ways to declare a function. The => is easy to understand, but depending
 * on your code it can be difficult to identify and fix. The most traditional way is simply
 * function
 */

//Example 1 local var function
/**
 * This function takes two local variables (the num1 and num2) adds them together and returns
 * the result. As you can see initally result was null, but was over written with 4 after the
 * math was completed
 */
function SimpleAdditionfunction() {
    var num1 = 1;
    var num2 = 3;

    var result = null;

    result = num1+ num2;

    return result;
}

//Example 2 global var function
/**
 * As you can see the vars are declared out side the function, but still run just fine
 */
var num1 =15;
var num2 =30;
var result = null;

function AddGlobal() {
    result= num1+num2;
    return result;
}

//Example 3 arrow function =>
/**
 * This is not very recommended as it can get messy relatively easily, but will allow for quick
 * fixes. This one returns "I am a String"
 */
var ArrowFunction = () => {
                            var String = "I am a string";
                            return String;};
//----------Chaining functions
/**
 * you can run functions inside other functions, which is where the => can make easy funcitons
 */

 var addone = () => {return AddGlobal() +1 };

 /**
  * this one took the function AddGlobal and added a 1 to it, but it's recommended to fix or add
  * to your original to avoid the =>. There a few ways to accomplish this, but as a beginner I would
  * re write that => as this:
  */
function addAnother() {
     return AddGlobal() + 1
 }