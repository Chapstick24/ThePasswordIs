// Array of special characters to be included in password
 var symbols = [
    '@','%','+', '/',"'",'!','#','$','^','?',':',',',
    ];
  
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  var lowerCase = [
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
  ];
  
  var upperCase = [
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
  ];
  
  function characters() {
    var length = parseInt(
      prompt('How long do you want your password to be?')
    );
  
  
    if (length < 8) {
      alert('password must be 8 digits long ');
      return;
    }
  
    var getSymbols = confirm(
      'Symbols'
    );
  
    var getNumbers = confirm(
      'Would you like some numbers.'
    );
  
    var getLower = confirm(
      'Lower case letters?.'
    );
  
    var getCap= confirm(
      'Caps are always nice.'
    );
  
  
    // Object to store user input
    var passwordOptions = {
      length: length,
      getSymbols: getSymbols,
      getNumbers: getNumbers,
      getLower: getLower,
      getCap: getCap
    };
  
    return passwordOptions;
  }
  
  function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
  
    return randElement;
  }
  
  function generatePassword() {
    var options = characters();
    var result = [];
  
    var passwordFarm = [];
    var enteredPass = [];
  
    if (options.getSymbols) {
      passwordFarm = passwordFarm.concat(symbols);
      enteredPass.push(getRandom(symbols));
    }
    if (options.getNumbers) {
      passwordFarm = passwordFarm.concat(numbers);
      enteredPass.push(getRandom(numbers));
    }
    if (options.getLower) {
      passwordFarm = passwordFarm.concat(lowerCase);
      enteredPass.push(getRandom(lowerCase));
    }
    if (options.getCap) {
      passwordFarm = passwordFarm.concat(lowerCase);
      enteredPass.push(getRandom(lowerCase));
    }
  
    for (var i = 0; i < options.length; i++) {
      var possibleCharacter = getRandom(passwordFarm);
  
      result.push(possibleCharacter);
    }
  
    for (var i = 0; i < enteredPass.length; i++) {
      result[i] = enteredPass[i];
    }
    return result.join('');
  }
  
  var generateBtn = document.querySelector('#generate');
  
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  
  generateBtn.addEventListener('click', writePassword);
  