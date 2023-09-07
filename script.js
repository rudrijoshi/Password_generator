var generateBtn = document.querySelector("#generate");//line28

// Assignment Code
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var character = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "[", "{", "}", "]", ":", ";", "'", '"', "<", ",", ".", ">", "?", "/", "|"];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var alphabetUppercase = alphabet.map(char => char.toUpperCase());

function getRequirements() {
  var length = prompt("How many characters of password you would like to generate? Please choose between 8 and 128 character");
  var selectedLength = parseInt(length);
  if (!selectedLength) {
    window.alert("This needs a value!");
  } else if (selectedLength < 8 || selectedLength > 128) {
    window.alert("Please enter a valid input");
    return;
  }
  var includeNumber = prompt("How many numbers to be included?");
  var includeLowercase = confirm("Do you want to include lowercase character?");
  var includeUppercase = confirm("Do you want to include uppercase?");
  var specialChar = confirm("If you want to include special character?");

  return {
    selectedLength: selectedLength,
    includeNumber: includeNumber,
    includeLowercase: includeLowercase,
    includeUppercase: includeUppercase,
    specialChar: specialChar
  };
};
function generatePasswordWithRequirements(selectedLength, includeNumber, includeLowercase, includeUppercase, specialChar) {
  var selectAll = [];
  var finalPassword = "";

  if (includeNumber > 0) {
    selectAll = selectAll.concat(number);
  }
  if (includeLowercase) {
    selectAll = selectAll.concat(alphabet);
  }
  if (includeUppercase) {
    selectAll = selectAll.concat(alphabetUppercase);
  }
  if (specialChar) {
    selectAll = selectAll.concat(character);
  }
  for (var i = 0; i < selectedLength; i++) {
    var randomIndex = Math.floor(Math.random() * selectAll.length);
    finalPassword += selectAll[randomIndex];
  }
  return finalPassword;
}



function writePassword() {
  var requirements = getRequirements();
  var password = generatePasswordWithRequirements(requirements.selectedLength, requirements.includeNumber, requirements.includeLowercase, requirements.includeUppercase, requirements.specialChar);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
