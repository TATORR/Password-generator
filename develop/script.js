let generateBtn = document.querySelector("#Generate");

const randomFunc = {
  upper: getRandomUpper,
  lower: getRandomLower,
  number: getRandomNumber,
  specialCharacter: getRandomCharacter,
};

// Generate Password
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomCharacter() {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}

function generatePassword(length, upper, lower, number, specialCharacter) {
  let pw = "";

  const typeCounter = upper + lower + number + specialCharacter;

  const typeArr = [{ upper }, { lower }, { number }, { specialCharacter }].filter(
    (item) => Object.values(item)[0]
  );

  // if they only press false 
  if (typeCounter === 0) {
    return "Can't Generate. Try Again";
  }


  for (let i = 0; i < length; i += typeCounter) {
    typeArr.forEach((type) => {
      let funcName = Object.keys(type)[0];
      pw += randomFunc[funcName]();
    });
  }
  const newPw = pw.slice(0, length);
  
  return newPw;
}

// Password Setup
function writePassword() {

  let length = 0;
  let isLowerCase;
  let isUpperCase;
  let isNumeric;
  let isSpecialCha;

// Length 
  do {
    length = prompt(
      "How many characters would you like in your password? (Choose between 8-128 characters)"
    );
    length = parseInt(length);
  } while (length < 8 || length > 128 || isNaN(length));

  // Prompts

  alert("Please select at least ONE character");

  isUpperCase = confirm("Would you like an upper-case letter in your password?");
  isLowerCase = confirm("Would you like a lower-case letter in your password?");
  isNumeric = confirm("Would you like a number in your password?");
  isSpecialCha = confirm("Would you like a special character in your password?");

  let password = generatePassword(
    length,
    isUpperCase,
    isLowerCase,
    isNumeric,
    isSpecialCha
  );
  let passwordText = document.querySelector("#Password");

  passwordText.value = password;
}

// Generate the PW
generateBtn.addEventListener("click", writePassword);