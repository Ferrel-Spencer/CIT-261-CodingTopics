/** Arrays and associative arrays
 * Arrays are prtty simple to understand its just a folder with data.
 * Associative arrays are more like filing cabinets.
 * There are labels, and inside those labels there is some information. Arrays use indexes
 * much in the same way. You can reference and index to get that value. For example the below
 * array has the value 3 in the index 2. The reason for this is a bit confusing, but it counts
 * starting from 0.
 *
 * For the most part associative arrays are what are used, as an array can be an associative array as long as there is
 * a chance data will be pulled.
 */
//----Declaration

//index IDs  0 1 2 3 4
var Array1 =[1,2,3,4,5];

//--------Built in functionality and functions
/**
 * Javascript has some built in funtions that can be useful. Here are a few examples
 */
Array1[0]; //this will return the value of the index 0, in this case 1 in in that spot, so it will return 1

Array1.indexOf(1); //this works like a search. It looks for 1 in the array and returns the index for it, in this case 0

Array1.length; //returns how many items are in that array. 5 in this case

Array1.push(5); //this adds to our array, so it will be {1,2,3,4,5]

Array1.pop(); //this remove the last entry returning us to [1,2,3,4]

Array1.shift(); // this removes the first entry, so now [2,3,4}

Array1.reverse(); // reverses the entries, so now [4,3,2]

Array1.splice(1,0,5); //Depending on how you enter this it changes the array
//first argument selects the entry, second (0/1) will either insert or replace with the third argument. In this case 5
//[5,4,3,2]

var newArray = Array1.concat([1,5]); //this will create a new array with the additional data at the end

newArray = Array1.slice(1,4); // this will select before or after the specified indexes, in this case anything before 1 and after 4

newArray = Array1.join("@"); // this will add a @ or other specified separation between each entry of the array





