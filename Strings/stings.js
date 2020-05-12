// strings (common methods)

let fruit = 'Banana';
let moreFruits = 'Banana\napple\norange'; //we can use \n to add a new line

console.log(fruit.length);   //returns the lenght of the string

console.log(fruit.indexOf('na')); //returns the starting index position of part of the string in the main string 
console.log(fruit.indexOf('p')); //return -1 becuase the string is not found in the main string called fruit 

console.log(fruit.slice(3,6)); //returns a slice of a string 
console.log(fruit.slice(5,89)); //if the ending position is invalid it will fetch only the valid characters from the starting psotion
console.log(fruit.slice(9,15)); //this will return nothing because the slice for this range is not found in the string

console.log(fruit.replace('Ban','Naz')); //this is used to replace a set of characters from a string with a new set of characters 

console.log(fruit.toLowerCase());  //converts the entire string into lowercase
console.log(fruit.toUpperCase()); //converts the entire string into uppercase

console.log(fruit.charAt(2)); //we can get the character at a given position
console.log(fruit[2]);  //this is also used to get the character at a given position just like in Python

console.log(fruit.split('')); //this is splits each and every character into a list
console.log(fruit.split('a')); //this splits by the character 'a' into a list



