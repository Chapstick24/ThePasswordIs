
// Create variables for my capital letters, lower case letters, numbers, and symbols//
var capitalLetters;
var lowerCase;
var numbers;
var symbols;

// add value to my arrays variables//
capitalLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
lowerCase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q", "r", "s","t", "u", "v", "w", "x", "y", "z"];
numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
symbols = [ "!","@","#", "$", "%", "^", "&", "*", "(" ,")"];

function getPasswordOption() {
    var length = parseInt(
        prompt ("how long would you like your password to be?")
    );
    // if(isNaN(length)){
    //     alert("Please provide a number");
    //      return;
    }
    // Adding a minimum of 8 charcaters.
    if (length < 8) {
        alert ("Password most be 8 digits long")
    }
    // storing my symbols and letters is numbers for new variables
    var getSymbols = confirm("Would you like some Symbols");

    var getNumbers = confirm("Would you like some numbers?");

    var getCapitalLetters = confirm("Caps are alway nice want some");

    var getLowerCase = confirm("Dont like caps? want some lower case?");

    // Storing all answers from the prompts on the  in same var

    var passwordOptions ={ 
        length: length,
        getCapitalLetters: getCapitalLetters,
        getLowerCase: getLowerCase,
        getNumbers: getNumbers,
        getSymbols: getSymbols,


    };
    // return passwordOption;


// get a random number
function getRandom(arr){
var randomIndex = Math.floor(Math.random()* arr.length);
var randomEl = arr[randomIndex];

return randomEl;

}

// create a password from user data
function createPassword(){
    var options = getPasswordOption();
    var result = [];
    var possibleCharcacters = [];
    var guaranteedCharcters = [];
//.push new random symbols, numbers, capital and loer case charcacters.
if(options.getSymbols){
    possibleCharcacters = possibleCharcacters.concat(symbols)
    guaranteedCharcters.push(getRandom(symbols));
}
if(options.getNumbers){
    possibleCharcacters = possibleCharcacters.concat(numbers);
    guaranteedCharcters.push(getRandom(numbers));
}
if(options.getCapitalLetters){
    possibleCharcacters = possibleCharcacters.concat(capitalLetters);
    guaranteedCharcters.push(getRandom(capitalLetters));
}
if(options.getLowerCase){
    possibleCharcacters = possibleCharcacters.concat(lowerCase);
    guaranteedCharcters.push(getRandom(lowerCase));

}
// create a loop for 
for ( var i = 0; i < options.length; i++) {
    var possibleCharcacters = getRandom(possibleCharcacters);
    result.push(possibleCharcacters);
}

for( var i = 0; i< guaranteedCharcters.length; i++) {
    result[i] = guaranteedCharcters[i];

    return result.join('');
}
var generateBtn = document.querySelector("#generate");

function writePassword(){
    var password = createPassword();
    var passwordText = document.querySelector("#password")

    passwordText.value= password;

}
generateBtn.addEventListener("click", writePassword);}
