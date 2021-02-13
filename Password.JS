
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

function passwordlength(){
    var length = parseInt(
        prompt("how long would you like your password to be?"));
    }

if (length < 8){
    alert("password most be 8 digits long");
}

    var YesLowerCase = confirm("can I interest you in some lower case letters")

    var YesCapitalLetters = confirm("Capital Letters are important want some?")

    var YesSymbols = confirm("would you like symbols?");

    var YesNumbers = confirm("would you like some numbers?");

    var digits = {
        length: length,
        YesCapitalLetters: YesCapitalLetters,
        YesLowerCase: YesLowerCase,
        YesNumbers: YesNumbers,
        YesSymbols: YesSymbols,

    };
    

    function newPassword(arr){
        var index = Math.floor(Manth.random()* arrays.length);

        return random;

    }
    function generatePassword() {
        var options = getdigits(); 
        var results = [];
        var possible = [];
        var gauaranteedcharcaters = [];

        if (options. lowerCase) {
            possible = possible.concat(lowerCase);
            gauaranteedcharcaters.push(newPassword(lowerCase))
        }


    }



passwordlength()


    
       
