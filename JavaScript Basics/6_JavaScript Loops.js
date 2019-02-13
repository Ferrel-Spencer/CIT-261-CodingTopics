/**Loops
 * Loops are great for repeated actions or if waiting for input. They are typically used with conditional statements.
 * There are two basic types of loops do/while and for
 */

//-------do while
/**
 * The do while loop, will only work as long as the while condition is true, in this case as long as the length of the array is below 5
 * it will add
 */

var array=[];
var min= 1;
var max= 100;


do{
    array.push(Math.trunc(Math.random()*(max - min) + min));
}
while (array.length < 5);


//----for
/**
 * The for loop will run for only a set amount of times, in this case 9 times
 */

var array2 = [];
for (i = 0; i<10; i++){
  array2.push(i);
}
