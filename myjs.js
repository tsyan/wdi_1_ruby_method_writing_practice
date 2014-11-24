// # 1. Addition
// Write a program that asks the user to input two numbers via the Terminal, then adds those numbers and prints the result.  
console.log("Please enter two numbers, one at a time.");
var num_1 = readline();
var num_2 = readLine();
console.log(num_1 + num_2);

// # 2. Squaring
// Write a program that asks the user to input one number via the Terminal, then squares it and prints the result. 
console.log("Please enter a number.");
var number = readline();
console.log(number*number);

// # 3. Greeter
// Write a program that asks the user for their name via the Terminal, then prints a greeting with their name (such as "Hello Tom") AND a randomly generated lucky number. 
console.log("Please enter your name.");
var name = readline();
console.log("Hello " + name);

// # 4. Prime or not
// Write a program that asks the user for a number, then determines if it is a prime or not and prints "true" or "false" to the Terminal accordingly. 
// JavaScript doesn't have an inbuilt function to test this, so here's the brute force approach.
function isPrime(num) {
  if (num == 0 || num == 1) {
    return false
  } else {
    for (var i = 2; i < num; i++) {
      if (num%i == 0) {return false;}
    }
  }
  return true;
}
console.log("Please enter a number");
var input = readline();
console.log(isPrime(input))


// # 5. "In WDI"
// Write a program that asks the user for a "fortune," for example, "You will have many adventures." Then the program will add "in WDI" to the end of the entered text and prints the result to the Terminal. 
console.log("Please enter a fortune.");
var fortune = readline();
console.log(fortune + " in WDI");

// # 6. Rock Paper Scissors
// Write a program that plays Rock-Paper-Scissors with the user in the Terminal.
var options = ['rock','paper','scissors']
console.log("Please enter one of the following: " + options.toString())
var player = readline();
var computer = options[Math.floor(Math.random()* options.length);] 
if (player == computer) {
  console.log("Draw!");
} else if ((player == "rock" && computer == "scissors") || (player == "scissors" && computer == "paper") || (player == "paper" && computer == "rock")) {
  console.log("You win!")
} else {
  console.log("You lose!")
}


// # 7. Toonify 
// Write a method called `toonify` that takes two parameters, `accent` and `sentence`. 
// If accent is "daffy", return a modified version of sentence with all "s" replaced with "th". 
// If the accent is "elmer", replace all "r" with "w". Feel free to add your own accents as well! 
// If the accent is not recognized, just return the sentence as-is.
function toonify(accent,sentence) {
  if (accent == "daffy") {
    return sentence.split('').map(function(char) {
      if (char == "s") {return "th"}
      return char;
    }).join('')
  } else if (accent == "elmer") {
    return sentence.split('').map(function(char) {
      if (char == "r") {return "w"}
      return char;
    }).join('')
  } else {
    return sentence;
  }
}

