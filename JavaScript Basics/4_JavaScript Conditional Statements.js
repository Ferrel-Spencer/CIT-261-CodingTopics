/**Conditional Statments
 * Conditional statemets are those that require a condition to be met. The most common of
 * which are if/else statements. If you have ever used excel you know that this is super important
 */

//---Declaration
/**
 *In this example we are testing if a random value is lower than 100. The Math.random() creates
 * that number between 0 and 150. It it is it will return true, if not it will return false
 */
var max = 150;
var min = 0;
var random = Math.random()*(max - min) + min;
var boolean = null;
if (random > 100){
    boolean = true;
    }else {
    boolean = false;
}
console.log(boolean);

/**
 * These conditional statements are great for loops, which is coming a bit later
 */
