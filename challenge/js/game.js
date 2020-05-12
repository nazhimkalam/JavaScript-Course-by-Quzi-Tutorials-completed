//Challenge 01: Your age in days
function challenge01(){
    function getDateFromUser(){
        var enteredDate = prompt("Enter the year you were born on: ");
        if(enteredDate<1){
            alert("You have entered an invaild year, please re-enter...")
            getDateFromUser();
        }
        else{
            validYearEntered = enteredDate;
        }
        return validYearEntered;
    }
    let enteredYear = getDateFromUser();
    console.log(enteredYear);
    let date = new Date();      //this returns the current date (day,month,year,second,hour,milli-second etc....)
    let numberOfYears = date.getFullYear() - enteredYear;
    var h1 = document.createElement('h1');
    var textString = document.createTextNode('You are ' + numberOfYears + ' years old or ' + (numberOfYears * 365) + ' days old.');
    h1.setAttribute('id','age'); //what happens in this is that we are setting an id for the <h1> element like this <h1 id = 'age'>
    h1.appendChild(textString);  //I add the result into the h1 tag created as the child becuase now h1 is the outer tag which is the parent tag and the result is the child going inside the h1 tag
    document.getElementById('flex-box-result').appendChild(h1); //we append the created h1 tag as the child for the main or parent div tag called the flex-box-result
    
}

function reset(){
    document.getElementById('age').remove();
}

//Challenge 02: Marvel Generator

function marvelGenerator(){
    var gifImage = document.createElement('img');
    var div = document.getElementById('flex-marvel-container');
    gifImage.src = 'images/marvel.gif';
    gifImage.width = 280;
    gifImage.height = 120;
    div.appendChild(gifImage);
}

//Challenge 03: Rock, Paper and Sissors

function rpsGame(yourChoice){
    var humanChoice, botChoice;
    humanChoice = yourChoice.id
    botChoice = numberToChoice(randToRpsInt());
    results = decideWinner(humanChoice, botChoice);
    message = finalMessage(results);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt(){
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
    return['rock','paper','scissor'][number];
}

function decideWinner(yourChoice, computerChoice){
    var rspDatabase = {
        'rock' : {'scissors':1, 'rock':0.5, 'paper':0},
        'paper': {'rock':1, 'paper':0.5, 'scissors':0},
        'scissors': {'paper':1, 'scissors': 0.5, 'rock': 0}
    }

    var yourScore = rspDatabase[yourChoice][computerChoice];
    var computerScore = rspDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
};

function finalMessage([yourScore, computerScore]){
    if(yourScore === 0){
        return {'message':'You lost!', 'color':'red'};
    }else if (yourScore === 0.5){
        return {'message': 'It is a draw!', 'color':'yellow'};
    }else{
        return {'message':'You won!', 'color':'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    //let's remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src = '" + imagesDatabase[humanImageChoice] + "' height='150' width = '150' style = 'box-shadow: 0px 10px 50px rgba(43, 255, 0,1);'>";
    messageDiv.innerHTML = "<h1 style = 'color : " + finalMessage['color'] + "; font-size: 60px; padding: 30px;'>" + finalMessage['message'] + "</h1>";
    botDiv.innerHTML = "<img src = '" + imagesDatabase[botImageChoice] + "' height = '150' width = '150' style = 'box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}



// Challenge 04: Change the colour of the Buttons
let allButtons = document.getElementsByTagName('button');

let collectPreviousData = []; //this is an empty array to collect data about the buttons available

for(let i = 0; i < allButtons.length; i++){
    collectPreviousData.push(allButtons[i].classList[1]);
}

function buttonColorChange(selectedOption){
    if (selectedOption.value === 'random'){
        randomOption();
    }else if (selectedOption.value === 'red'){
        redOption();
    }else if (selectedOption.value === 'green'){
        greenOption();
    }else{
        resetOption();
    }
}

function resetOption(){
    for(let i=0; i<allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(collectPreviousData[i]);
    }
}

function randomOption(){
    let buttonsAvailable = ['btn-primary','btn-warning','btn-success','btn-danger'];
    for(let i=0; i<allButtons.length; i++){
        let random = Math.floor(Math.random() * 4); //used to get a integer random value between to 0 to 3 (0 and 3 inclusive)
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(buttonsAvailable[random]);
    }
}

function redOption(){
    for(let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]); //we have to firstly remove that class item then only we can add
        allButtons[i].classList.add('btn-danger');
    }
}

function greenOption(){
    for(let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]); //we have to firstly remove that class item then only we can add
        allButtons[i].classList.add('btn-success');
    }
}































































