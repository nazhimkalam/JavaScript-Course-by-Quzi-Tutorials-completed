//IF, ELSE, SWITCH IN JAVASCRIPT

//IF STATEMENTS
// && AND
// || OR
var age = prompt('Enter age');
if ((age>0) && (age<18)){
    message = 'You  are a Teenager'; //like this i can create a stirng without declaring it's a String, depending of the data it will adjust its type to a string that's the power of JavaScript
}else if (age >= 18){
    message = 'You are an Adult';
}else{
    message = 'You have entered an incorrect age value';
}
console.log(message);


//SWITCH STATEMENTS
var day = prompt('Enter day:').toUpperCase();
console.log(day);
switch(day){
    case 'MONDAY':
        console.log("It's a beautiful Monday morning ");
        break;
    case 'TUESDAY':
        console.log("It's a beautiful Tuesday morning ");
        break;
    case 'WEDNESDAY':
        console.log("It's a beautiful Wednesday morning ");
        break;
    case 'THURSDAY':
        console.log("It's a beautiful Thursday morning ");
        break;
    case 'FRIDAY':
        console.log("It's a beautiful Friday morning ");
        break;
    case 'SATURDAY':
        console.log("It's a beautiful Saturday morning ");
        break;
    case 'SUNDAY':
        console.log("It's a beautiful Sunday morning ");
        break;
    default:
        console.log('Good morning Nazhim');
} 
