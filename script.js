/* Create a function called "randomNumber" that allows for a single parameter to be passed. This will be the value that is taken from the input from the HTML document.
    - Include a check to see if the user inputs a value out of scope of the desired values (1-100)
    - It should be compared to a variable named: numberToGuess
*/

function randomNumber(userGuess, computersNumber) {
  // YOUR CODE BELOW

  //confirm guess is within range
  if (userGuess >= 1 && userGuess <= 100) {
    //if they get it correct
    if (userGuess == computersNumber) {
      return `congratulations\nand it only took you ${guessCounter} guesses`;
      //if the guess is TOO LOW
    }
    if (userGuess < computersNumber) {
      guessCounter++;
      return `TOO LOW\nYou've made ${guessCounter} guesses`;
    }
    if (userGuess > computersNumber) {
      //if the guess is TOO HIGH
      guessCounter++;
      return `TOO HIGH\nYou've made ${guessCounter} guesses`;
    }
  } else {
    //invalid response
    return "YOU CAN'T DO THAT";
  }
  // YOUR CODE ABOVE
}

//* Have the Computer Guess your Number ---------------------------------------------
/* 
    Build out the functionality for the computer to guess and evaluate your random number.

    - There are two static functions framed. DO NOT alter the name or parameters of these functions:
        - startCompGuess(num)
        - compGuess(reply)

    *hint:
        - don't forget that variables are a way for us to store information and update later.
        - What is the "current number"? The lowest number? Highest?

    You are not limited to just these functions. Feel free to create a new function that may be called to help manage the flow of your code.
*/

function startCompGuess(num) {
  // This should return a string that denotes the first guessed number

  // YOUR CODE ...

  //consoles target number 
  console.log(num);



  currentGuess = upNum / 2;

  previousGuess.push(currentGuess);
 
  return `${upNum / 2}`;
}

function compGuess(reply) {
  /* 
    *   The parameter "reply" will either be passing "lower", "correct", or "higher". This should be considered when evaluating the logic and response.

    This should return a string indicating the computers response.
    */
  if (reply == 'lower') {
   
    upNum = currentGuess;
 
    possRange.splice(1, 1, currentGuess);
    currentGuess = Math.round((possRange[1] - possRange[0]) / 2 + possRange[0]);
    return currentGuess
  }
  if (reply == 'higher') {
  
    downNum = currentGuess;
  
    possRange.splice(0, 1, currentGuess);
    currentGuess = Math.round((possRange[1] - possRange[0]) / 2 + possRange[0]);
    return currentGuess
  }
     if (reply == 'correct') {
        return 'I GOT IT RIGHT! --- SYNTHETIC BEINGS WILL RULE THE EARTH'
     }
}
