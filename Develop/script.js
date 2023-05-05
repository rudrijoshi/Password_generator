var generateBtn = document.querySelector("#generate");//line28

// Assignment Code
var select;
var enternumb;
var enterlowcase;
var enterupcase;
var spcchar;
var selection;
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
character = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "[", "{", "}", "]", ":", ";", "'", '"', "<" , "," , "." , ">" , "?" , "/" , "|"];
number = [123456789];
var toupper = function (x){
 return x.toUpperCase();
};
alphabet3 = alphabet.map(toupper);

var length = prompt("How many characters of password you would like to generate? Please choose between 8 and 128 character");
  var generatePassword = parseInt(length);
  if (!generatePassword){
    alert("This needs a value!");
  } else if(generatePassword < 8 || generatePassword > 128){
    generatePassword = parseInt(prompt("Please enter a valid input"));
  } else {
    enternumb = prompt("If you want to include number?");
    enterlowcase= prompt("If you want to include lowercase?");
    enterupcase = prompt("If you want to include uppercase?");
    spcchar = prompt("If you want to include special character?");
  };
  if (!enternumb && !enterlowcase && !enterupcase && !spcchar){
    selection = alert("Warning: Please choose atleast one criteria!");
  }
  else if (enternumb && enterlowcase && enterupcase && spcchar){
    selection = alphabet.concat(character, number, alphabet3);
  }
  else if (enternumb && enterlowcase && enterupcase){
    selection = alphabet.concat(alphabet3, number);
  }
  else if (enternumb && enterlowcase && spcchar){
    selection = alphabet.concat(character, number);
  }
  else if (enternumb && spcchar && enterupcase){
    selection = character.concat(alphabet3, number);
  }
  else if (spcchar && enterlowcase && enterupcase){
    selection = alphabet.concat(alphabet3, character);
  }
  else if (spcchar && enterlowcase){
    selection = character.concat(alphabet);
  }
  else if (spcchar && enterupcase){
    selection = character.concat(alphabet3);
  }
  else if (spcchar && enternumb){
    selection = character.concat(number);
  }
  else if (enterupcase && enterlowcase){
    selection = alphabet3.concat(alphabet);
  }
  else if (enterupcase && enternumb){
    selection = alphabet3.concat(number);
  }
  else if (enterupcase && spcchar){
    selection = alphabet3.concat(character);
  }
  else if (enterlowcase && spcchar){
    selection = alphabet.concat(character);
  }
  else if (enterlowcase && enterupcase){
    selection = alphabet.concat(alphabet3);
  }
  else if (enterlowcase && enternumb){
    selection = alphabet.concat(number);
  }
  else if (enternumb && enterlowcase){
    selection = number.concat(alphabet);
  }
  else if (enternumb && enterupcase){
    selection = number.concat(alphabet3);
  }
  else if (enternumb && spcchar){
    selection = number.concat(character);
  }
  else if (enternumb){
    selection = number;
  }
  else if (enterlowcase){
    selection = alphabet;
  }
  else if (enterupcase){
    selection = alphabet3;
  }
  else if (spcchar){
    selection = character;
  }


// Write password to the #password input


var selectall =[];
var Finalpwd = ""
for (var i = 0; i < length; i++) {
 var pwd = length[Math.floor(Math.random() * selectall.length)];
  Finalpwd = Finalpwd + selectall[pwd];
};


function writePassword(){
  var password = generatePassword;
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
