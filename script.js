//////////////////
//MODEL SECTION//
/////////////////

//initialize correct-answer-id
let correctAnswertId = 0;

//initialize square object
    //object contains true or false, Color
const square = {
    correctId: false,
    red: 0,
    green: 0,
    blue: 0
}

//initialize square array, that will contain square objects. ID = index.
let squareArray = [];

//set up the game!
refreshGame();
hideCorrect();





//////////////////////
//CONTROLLER SECTION//
/////////////////////

//check answer 
    //receives index of sqaure clicked from view section
    //checks if the correct square, using the 'correct' tag in the array 
    //returns true or false
const checkAnswer = (id) => squareArray[id].correctId;


//returns a random RGB value between 0 and 255
function getRandomNum(){
    //console.log('get random number');
    return Math.floor(Math.random()*(255 + 1));
}



//reset/Fill square array 
    //loops through the square array, 
        // sets color by calling generate RGB function
        // sets all index to false.
        // call color-square view function to update the visual colors
function resetArray() {

   // console.log("resetting array");
    let red;
    let green;
    let blue;
    squareArray = [];

    for(let id=0; id < 6; id++){            
        red = getRandomNum();
        green = getRandomNum();
        blue = getRandomNum();

        squareArray.push({correctId: false, red: red, green: green, blue: blue});  //add new instance of square object to the array
        colorSquare(id, red, green, blue);  //colour the square
        clearSquareText(id);
    }
    //console.log(squareArray);
}
    
//set correct answer 
    //generate a random number between 0 and 5 this will be the correct ID 
    //access the RBG at this index and set its truth value to TRUE
    //set the correct-answer-id variable to this squares ID
function setCorrectId(){
    correctAnswertId = Math.floor(Math.random()*(5 + 1));
    squareArray[correctAnswertId].correctId = true; 

    console.log("correct index = "+correctAnswertId);
    console.log("answer key array = ");
    console.log(squareArray);
}
    








/////////////////
//VIEW SECTION///
////////////////

function refreshGame() {
    resetArray();
    setCorrectId();
    displayRgb();
}

//reset board button clicked function
    //call reset/fill square array function
    //call color the squares function
const restart = document.getElementById("restart").onclick = function() {
    console.log("restart pushed");
    refreshGame();
    hideCorrect();
}

//display the correct answer if this button is clicked    
const solution = document.getElementById("solution").onclick = function() {
    console.log("solution square pushed");
    for (let i = 0; i < 6; i ++) {
        if(i != correctAnswertId){
            document.getElementById(`square${i}`).style.background = 'black';
        }
    }
}

function displayRgb() {
    const rgb = 'RGB('+squareArray[correctAnswertId].red+','+squareArray[correctAnswertId].green+','+squareArray[correctAnswertId].blue+')';
    document.getElementById("rgb").innerHTML = rgb;
}




//display correct function
    //display text over the square 
function displayCorrect() {
    (document.getElementById("correct")).innerHTML = "Correct!";
    (document.getElementById("party")).style.display = "inline-block";
    (document.getElementById("firework")).style.display = "inline-block";
}
function hideCorrect() {
    (document.getElementById("correct")).innerHTML = '';
    (document.getElementById("party")).style.display = "none";
    (document.getElementById("firework")).style.display = "none";
}

//display incorrect! function 
    //display text over the square 
function displayIncorrect(squareId) {
    squareId = ('square'+squareId.toString()); 
    document.getElementById(squareId).innerHTML = "Wrong! ";
}
function clearSquareText(squareId) {
    squareId = ('square'+squareId.toString());
    document.getElementById(squareId).innerHTML = "";
}

//square clicked event function
//calls check answer function
//if true, 
    //call display correct function
    //call reset board function
//if false, 
   //call display incorrect function
    //call grey out square function
function squareClicked(id) {

    const correctAnswer = checkAnswer(id);
    console.log("square "+id+" clicked")
    if(correctAnswer==true){
        
        for(let i=0; i<6; i++){
            clearSquareText(i);
        }
        displayCorrect();
        solution();
        setTimeout(hideCorrect, 1000);
        setTimeout(refreshGame, 1000);
        console.log("correct answer" + id + " clicked");
    }
    else{
        displayIncorrect(id);
        greyOut(id);
        console.log("incorrect answer " + id + " clicked");
    }
}



//converts number from 0 to 255
function toHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
//color-square
    //called by controller section. receives ID and RGB value 
    //sets the html square to index color
function colorSquare(id, red, green, blue) {
    const squareId = ('square'+id.toString());
    (document.getElementById(squareId)).style.background = "#" + toHex(red) + toHex(green) + toHex(blue);
}


//Detect when a button is clicked
for (let i = 0; i < 6; i ++) {
    const squareId = `square${i}`;
    const square = document.getElementById(squareId);

    square.onclick = function(){
        squareClicked(i);
        console.log("square pushed "+squareId);   
    }
 
}


    
     



















