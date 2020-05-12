// functions in javascript

//creating a  function
function myFucntion(){
    console.log("This is a function");
}

//call the function
myFucntion();

/*Let's create a function that takes in a name and says 
hello followed bt your name

For example

Name: "Nazhim"
Return: "Hello Nazhim"
*/

function name(){
    var name = prompt('Whats your name: ');
    var result = 'Hello ' + name;   //string concatination
    console.log(result);
}

// name();

/* How do arguments work in function or how to we send parameters
into a function */

var name = prompt('Enter your name: ')
function greeting(name){
    return 'Hello ' + name;
}
// alert(greeting(name));
console.log(greeting(name))
  






















