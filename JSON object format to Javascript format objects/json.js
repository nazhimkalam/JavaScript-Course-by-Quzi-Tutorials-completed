/* JSON {Javascript Object Notation},
   this is used to represent data, used for API to carry information
*/


/*   JSON Syntax Rules
        Data is in name/value pairs
        Data is separated by commas
        Curly braces hold objects
        Square brackets hold arrays
*/

// JSON names require double quotes. JavaScript names do not.


/*  JSON Objects
        JSON objects are written inside curly braces.

        Just like in JavaScript, objects can contain multiple name/value pairs:

        {"firstName":"John", "lastName":"Doe"}
 */

 /* 
        JSON Arrays
            JSON arrays are written inside square brackets.

            Just like in JavaScript, an array can contain objects:

                "employees":[
                    {"firstName":"John", "lastName":"Doe"},
                    {"firstName":"Anna", "lastName":"Smith"},
                    {"firstName":"Peter", "lastName":"Jones"}
                ]
            In the example above, the object "employees" is an array. It contains three objects.
            So 'employees is another of array type to stores objects of person type in it'
            Each object is a record of a person (with a first name and a last name).
 */

 /*
    Converting a JSON Text to a JavaScript Object
    A common use of JSON is to read data from a web server, and display the data in a web page.

    For simplicity, this can be demonstrated using a string as input.

    First, create a JavaScript string containing JSON syntax.

    Then, use the JavaScript built-in function JSON.parse() to convert the string into a JavaScript object

    Then after that you can use it as an object 
 */

 //example

 /* This is how a JSON file will look like
            [
                {
                    "name" : "nazhim",
                    "age" : 18,
                    "gender" : "male"
                },
                {
                    "name" : "abilash",
                    "age" : 19,
                    "gender" : "male"
                }
            ]
 */

 // now lets convert this to javascript objects, to do that we have to convert it to a string firstly.
 // then use JSON.parse() to convert it into JavaScript objects

// the code below shows how i converted the JSON file into a string format and assigned it into a variable
 let student = `[                              
                    {
                        "name" : "nazhim",
                        "age" : 18,
                        "gender" : "male"
                    },
                    {
                        "name" : "abilash",
                        "age" : 19,
                        "gender" : "male"
                    }
                ]`

// the code below shows how i used JSON.parse() to convert it to an object
// now this JSON.parse(student) acts just like an array with objects in javascript
// now I can use the index like this JSON.parse(student) [0] to access the first student and so on
// I can get the name of the first student like this JSON.parse(student) [0].name
let convertedArray = JSON.parse(student);
console.log(convertedArray[0].name); //this will give 'nazhim' as the output
console.log(convertedArray[1].name); //this will give 'abilash' as the output
console.log(convertedArray[1].age);  //this will give 19 as the output


