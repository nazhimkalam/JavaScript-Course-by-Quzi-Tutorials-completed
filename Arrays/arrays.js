//arrays in javascript
//arrays are just like list but in JAVASCRIPT they are called as arrys not list
//There are two ways of creating an array in javascript

let fruitsOne = ['banana','orange','pineapple','avacado','woodapple'];
let fruitsTwo = new Array('banana','orange','pineapple','avacado','woodapple');

console.log(fruitsOne); //displaying the array 
console.log(fruitsTwo); //displaying the array

console.log(fruitsOne[1]); //this is how you access values from an array
console.log(fruitsTwo[2]); //this is how you access values from an array

//you also can change a value in an array
fruitsOne[1] = 'pears';
console.log(fruitsOne); //orange will be replaced with 'pear' permenantly

//if you need to display the content from an array then we have to loop through the array and display it's content one by one
//we can use a for loop for this process

for(let i = 0; i<fruitsOne.length; i++){
    console.log(fruitsOne[i]);
}

//array common methods

//we can covert an array into a string, actually the oppsoite of splitting
console.log('This is the string version of the array',fruitsOne.toString());

//I can join each element from the array with a character, and this returns a string 
console.log(fruitsOne.join(' * '));

//I can pop an item from the array or list, which pops the last element from the list or array
//Once you pop an item from a list/array its gone completly from the array
//pop function removes the item and returns the popped item
console.log(fruitsOne.pop(),fruitsOne); //you will able to see that 'woodapple' is no longer available

//what push does is it appends items into the list/array from the end or rear position
console.log(fruitsOne.push('blackberry'),fruitsOne);

//we can also add items into the array by the position index it self
fruitsOne[fruitsOne.length] = 'grapes';
console.log(fruitsOne);

//we can remove and add the first element in the array, opposite to the direction of pop
console.log(fruitsOne.shift());
fruitsOne.unshift('kiwi')
console.log(fruitsOne);

console.log(fruitsOne.indexOf('kiwi')); //like this we also can get the position of the item in the array

//concatinanting two arrays into one array
let vegetable = ['carrot','potatoes','pumpkin','beetroot','cumumber'];
console.log(fruitsOne.concat(vegetable));

//slcing items from an array
console.log(fruitsOne.slice(1,4));

//we also can reverse the order of the array items 
console.log(fruitsOne.reverse());  //reverses the items 
console.log(fruitsOne); //you will be able to see that the items are completly reversed or permenantly reversed

//we can sort the items of a string array alphabetically 
console.log(fruitsOne.sort());

//sorting numbers in an array 
let numbers = [514,26,1,89,99,2,45,65,3,7,18];
//using the function below we can sort numbers in ascending order
console.log(numbers.sort(function(a,b){return a-b}));
//using the function below we can sort numbers in descending order
console.log(numbers.sort(function(a,b){return b-a}));

//we can add elements into an array using a loop
let emptyArray = [];
for (let index = 0; index < 10; index++){
    emptyArray.push(index);
}
console.log(emptyArray);


