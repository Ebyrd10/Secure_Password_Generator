// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Defines the generatePassword functionality
function generatePassword(){
  //Gets the user preferences
  //continues to loop until it recieves data that is not all invalid, ie. the password length must be the proper length and it must contain at least 1 kind of character (special, numeric, uppercase, lowercase, etc.)
  do {
    //Sets default values for each variable
    passLength = 0;
    var passLowerCase, passUpperCase, passNumbers, passSpecial = true;
    // Asks for Length
    while ((passLength < 8) || (passLength > 128)){
      passLength = prompt("How long do you want your password to be?\n It must be between 8 and 128 characters long.");
      if ((passLength < 8) && (passLength > 128)){
        alert("password length must be between 8 and 128 characters long.");
      };
    }
    // Lowercase?
    passLowerCase = confirm("Do you want to allow lowercase characters?");
    // Uppercase?
    passUpperCase = confirm("Do you want to allow uppercase characters?");
    //Numbers?
    passNumbers = confirm("Do you want to allow numbers?");
    //Special Characters?
    passSpecial = confirm("Do you want to allow special characters?");
    if (!passLowerCase && !passUpperCase && !passNumbers && !passSpecial){
      alert("You must select at least one valid option")
      }  
  } while (!passLowerCase && !passUpperCase && !passNumbers && !passSpecial);

  //Sets the new password to blank
  var newPass = "";
  //Initializes the character strings used for chosing characters in the password
  var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberChar = "1234567890";
  var specialChar = "!@#$%^&*()_+~`|}{[]\:;?><,./-="
  // Defines Variables and then steps thourgh all the conditions asked of the user to determine the conditions that should be met in the new password (lowercase, uppercase, etc.)
  var totalPossibleString = "";
  var conditionPossible = [passLowerCase, passUpperCase, passNumbers, passSpecial];
  var conditionPossibleString = [lowerCaseChar, upperCaseChar, numberChar, specialChar]
  for (i = 0; i < conditionPossible.length; i ++){
    if (conditionPossible[i]){
      totalPossibleString = totalPossibleString + conditionPossibleString[i];
      console.log(totalPossibleString);
    }
  }
  
  // loops through the possible chars to create a new password
  for (i = Math.floor((Math.random() * (totalPossibleString.length-1))); newPass.length < passLength; i = Math.floor((Math.random() * (totalPossibleString.length-1)))){
    newPass = newPass + totalPossibleString.charAt(i);
  }
  return newPass;
}