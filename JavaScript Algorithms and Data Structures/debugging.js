// Use the JavaScript Console to Check the Value of a Variable
let a = 5;
let b = 1;
a++;
// Only change code below this line
console.log(a);
console.log(b);

let sumAB = a + b;
console.log(sumAB);

// Understanding the Differences between the freeCodeCamp and Browser Console
let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";
console.log(output);
console.clear();

// Use typeof to Check the Type of a Variable
let seven = 7;
let three = "3";
console.log(seven + three);
// Only change code below this line
console.log(typeof(seven));
console.log(typeof(three));

// Use typeof to Check the Type of a Variable
let receivables = 10;
let payables = 8;
let netWorkingCapital = recievables - payable;
console.log(`Net working capital is: ${netWorkingCapital}`);

let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

// Catch Unclosed Parentheses, Brackets, Braces and Quotes
let myArray = [1, 2, 3;
    let arraySum = myArray.reduce((previous, current =>  previous + current);
    console.log(`Sum of array values is: ${arraySum}`);

let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);

// Catch Mixed Usage of Single and Double Quotes
let innerHtml = "<p>Click here to <a href="#Home">return home</a></p>";
console.log(innerHtml);

let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);

// Catch Use of Assignment Operator Instead of Equality Operator
let x = 7;
let y = 9;
let result = "to come";

if(x = y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);

let x = 7;
let y = 9;
let result = "to come";

if(x == y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);

// Catch Missing Open and Closing Parenthesis After a Function Call
function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
  }
  
  let result = getNine;
  console.log(result);

function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
  }
  
  let result = getNine();
  console.log(result);

//   Catch Arguments Passed in the Wrong Order When Calling a Function
function raiseToPower(b, e) {
    return Math.pow(b, e);
  }
  
  let base = 2;
  let exp = 3;
  let power = raiseToPower(exp, base);
  console.log(power);

function raiseToPower(b, e) {
    return Math.pow(b, e);
  }
  
  let base = 2;
  let exp = 3;
  let power = raiseToPower(base, exp);
  console.log(power);

//   Catch Off By One Errors When Using Indexing
function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    // Only change code below this line
    for (let i = 1; i <= len; i++) {
    // Only change code above this line
      console.log(firstFive[i]);
    }
  }
  
  countToFive();

function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    // Only change code below this line
    for (let i = 0; i < len; i++) {
    // Only change code above this line
      console.log(firstFive[i]);
    }
  }
  
  countToFive();

//   Use Caution When Reinitializing Variables Inside a Loop
function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    let row = [];
    for (let i = 0; i < m; i++) {
      // Adds the m-th row into newArray
  
      for (let j = 0; j < n; j++) {
        // Pushes n zeroes into the current row to create the columns
        row.push(0);
      }
      // Pushes the current row, which now has n zeroes in it, to the array
      newArray.push(row);
    }
    return newArray;
  }
  
  let matrix = zeroArray(3, 2);
  console.log(matrix);
    
function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    for (let i = 0; i < m; i++) {
      // Adds the m-th row into newArray
  
    let row = [];
      for (let j = 0; j < n; j++) {
        // Pushes n zeroes into the current row to create the columns
        row.push(0);
      }
      // Pushes the current row, which now has n zeroes in it, to the array
      newArray.push(row);
      
    }
    return newArray;
  }
  
  let matrix = zeroArray(3, 2);
  console.log(matrix);
  
//   Prevent Infinite Loops with a Valid Terminal Condition
function myFunc() {
    for (let i = 1; i != 4; i += 2) {
      console.log("Still going!");
    }
  }

  function myFunc() {
    for (let i = 1; i <= 4; i += 2) {
      console.log("Still going!");
    }
  }