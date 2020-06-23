//Welcome. In this kata, you are asked to square every digit of a number.
//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
//Note: The function accepts an integer and returns an integer


//My Solution 

//Array.from() creates a new shallow-copied Array from our input.
//Inside this method, we convert our number into a String--an iterable object in JS. This allows Array.from() to create an array of string digits.
//Then, we use the optional mapping argument where we'll square our digits,
//After, we'll join each digit and convert the String result into a Number using the + operator.

function squareDigits(num){
    return +Array
    .from(
    num
    .toString()
    .split("")
    .map(i => i ** 2)
    )
    .join("")
  }
  
  console.log(squareDigits(123))

// Option 2 (uses Number instead of the + operator)
function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
}

// Option 3 (uses parseInt() method)

function squareDigits(num){
    let array = num.toString().split('').map( 
        function(int) {
             let i = parseInt(int);
                return i * i;
            }
        );
    return parseInt(array.join(""));
  }

// Option 4 (Loop instead of map method, and Number instead of + operator or parseInt)

function squareDigits(num){
    let string = num.toString();
    let results = [];
    for (let i = 0; i < string.length; i++){
        results[i] = string[i] * string[i];
    }
    return Number(results.join(''));
};