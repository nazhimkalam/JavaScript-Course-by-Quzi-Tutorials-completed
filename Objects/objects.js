//Basics of objects in javascript

//objects in js is just like dictionaries in python, it's just like using key-value pair 

let student = {           //this is a student object and it contains attributes, or u could also say that it has key-value pair 
    first:'Nazhim',       //just like dictionaries in python do
    last:'Kalam',
    age:18,
    gender:'Male',
    hairColour:'black',
    eyeColour:'dark brown',
};
//this is how I can access the values of the key or attributes of the student object
console.log(student);          //this will display all the attributes with value of the student object
console.log(student.first);    //accessing the first name of the stduent object
console.log(student.last);     //accessing the last name of the student object
console.log(student.age);      //accessing the age of the student object

//you can also change the value of the student object attribute like this
student.first = 'Fatheeha';     //I am changing the first name like this 
student.gender = 'Female';      //I am also changing the gender here
console.log(student);           //this will display the updated student object 
console.log(student.first);     //this will now display 'Fatheeha' not 'Nazhim'
console.log(student.last);      //but this will display 'kalam' because I didn't change that yet

//we can increment or decrement numerical values of an object like this
student.age++;           //increment
console.log(student.age);
student.age--;           //decrement
console.log(student.age);

//we can also make functions inside an object (we call them methods in the JAVA OOP) 
//THIS IS HOW YOU DO OOP IN JAVASCRIPT

let student2 = {
    first:'Nazhim',
    last:'Kalam',
    age:18,
    school:'Royal Institute Havelock Town Colombo',
    myDetails:function(){
        return this.first + ' ' + this.last + ' is ' + this.age + ' years old and he studied at ' + this.school;
    },
};

console.log(student2.myDetails()); //like this I am calling the myDetails() function from the student2 object

//------------------There are two ways of accessing values of an object by using the keys------
let newStudent = {
    'first':'Hashim',
    'last':'Kalam',
    'age':'14',
    'gender':'male',
};

// method 01 ----------similar to accessing elements from an array
console.log('Method 01');
console.log(newStudent['first'] + ' ' +  newStudent['last'] + ' ' +   newStudent['age'] + ' ' +   newStudent['gender']);

// method 02 ----------similar to accessing attributes/methods in Java
console.log('Method 02');
console.log(newStudent.first+ ' ' +  newStudent.last + ' ' +   newStudent.age+ ' ' +   newStudent.gender);