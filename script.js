

function writePassword() {
  let charset1 = "";

  let charset = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "~`!@#$%^&*()_-+={[}]|\:"
  };

  let prompt0 = prompt("Choose a character length between 8-128");
  if (prompt0 <= 7 || prompt0 >= 129) {
    alert("Invalid input for password length. Please choose between 8-128 characters");
    return;
  }
  let prompt1 = confirm("Would you like to Add Uppercase in your password?");
  let prompt2 = confirm("Would you like to add lowercase in your password? ");
  let prompt3 = confirm("Would you like  to add numbers in your password?");
  let prompt4 = confirm("Would you like  to add any special symbol?");




  if (prompt1 === true) {
    charset1 += charset.upperCase;
  }

  if (prompt2 === true) {
    charset1 += charset.lowerCase;
  }

  if (prompt3 === true) {
    charset1 += charset.numbers;
  }

  if (prompt4 === true) {
    charset1 += charset.symbols;
  }
  var password = "";

  for (let i = 0; i < prompt0; i++) {
    var randomNumber = Math.floor(Math.random() * charset1.length);
    password += charset1.substring(randomNumber, randomNumber + 1);
  }







  var passwordText = document.querySelector("#password");

  passwordText.value = ("Your New secured Password is :  " + password);

}



