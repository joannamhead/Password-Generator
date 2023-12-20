
const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
let passwordLength = parseInt(prompt("How long would you like your password to be? (Between 8 and 128 characters)"));

if (Number.isNaN(passwordLength)) {
  alert("Password length invalid. Please enter numbers only.");
  return getPasswordOptions();
}

if (passwordLength < 8 || passwordLength > 128) {
  alert("Password length invalid. Please enter a password between 8 and 128 characters.");
  return getPasswordOptions();
}

let includeLower = confirm("Do you want to include lowercase characters?");
let includeUpper = confirm("Do you want to include uppercase characters?");
let includeSpecial = confirm("Do you want to include special characters?");
let includeNumeric = confirm("Do you want to include numeric characters?");

if (!includeLower && !includeUpper && !includeSpecial && !includeNumeric) { 
  alert("Invalid selection. Please choose at least one character type to include.");
return getPasswordOptions;
}

let passwordOptions = {
  length: passwordLength,
  includeLower: includeLower,
  includeUpper: includeUpper,
  includeSpecial: includeSpecial,
  includeNumeric: includeNumeric,
}

return passwordOptions;

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
let options = getPasswordOptions()
}

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);