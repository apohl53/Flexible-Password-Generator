// Assignment code here
// create a function that returns "generate password"
// set password length between 8 and 128 characters
// ask if user wants uppercase, lowercase, specials, numbers
// validation checks - alert if it 

var lowercase = 'abcdefghijklmnopqrstuvwxyz'
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var numbers = '0123456789'
var specials = '~!@#$%^&*()_+'
var combined = ''
 

//var wantsLowercase = confirm('Do you want lowercase letters?')
//var wantsUppercase = confirm('Do you want uppercase letters?')
//var wantsNumbers = confirm('Do you want numbers?')
//var wantsSpecials = confirm('Do you want special characters?')
//var passwordLength = prompt("How many characters would you like?")





function generatePassword() {
  
  var password = '';
  var wantsLowercase = confirm('Do you want lowercase letters?')
  var wantsUppercase = confirm('Do you want uppercase letters?')
  var wantsNumbers = confirm('Do you want numbers?')
  var wantsSpecials = confirm('Do you want special characters?')
  var passwordLength = prompt("How many characters would you like?")  

  if (wantsLowercase) {
    combined += lowercase;
  }
  
  if (wantsUppercase) {
    combined += uppercase;
  }
  
  if (wantsNumbers) {
    combined += numbers;
  }
  
  if (wantsSpecials) {
    combined += specials;
  }
  
  if (passwordLength < 8 || passwordLength > 128) {
    alert('You must enter a number between 8 and 128');
    passwordLength = prompt("How many characters would you like?");
  }
  
  if (isNaN(passwordLength)) {
    alert('You must enter a number');
    passwordLength = prompt("How many characters would you like?");
  }

  if (combined === '') {
    alert('You must pick one of the options')
    return password;
  }
  
  for (var count = 0; count < passwordLength; count++) {
    var random = Math.random();
    var index = Math.floor(random * combined.length)
    password += combined[index];
  }
    combined = '';
    return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
