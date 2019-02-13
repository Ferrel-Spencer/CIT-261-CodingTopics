/** Vars
 * Variables or Vars are pretty simple they basically function as variables in algebra
 * with the exception that they don't always have to be numbers. There are more data types that
 * java script can use.
 */

//-----------------Declaration
/**Declaration
 *  Declarations are really simple as saying "var uniquie name);" adding a "=" assigns a value to that var
 */
var myNum =123; //--example of a number or integer
var myString="Spencer"; //--example of a string
var myBoolean=true; //--example of a boolean, these are striclty logical values. i.e true or false
var myNull=null; //--these are non variables
var myUndefined= undefined; //--these are values that haven't been been defined

//----------------- Uses
/**Example
 * Variables are used for all kinds of things and can be declared locally or globally (inside a function
 * or in the general script, but more on that in the function topic). Here is a quick example of a function
 * that will return the slope of a line: (mx+b=y)
 */
function findSlope() {
    var x = 5; //these vars are used in the calculation
    var b = 2;
    var y = 15;

    var result;//place holder for the solution

    result = (y-b)/x; //is the equation

    return result;// you always need a return in order run the function properly (it will either result in errors or nothing)

}