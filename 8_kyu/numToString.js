//My solution 

function numberToString(num) {
    return num.toString();
  }

console.log(numberToString(123))

//Solution 2

function numberToString(num) {
    return String(num);
  }

//Solution 3

const numberToString = num => `${num}`

//Solution 4

const numberToString = num => num.toString()

//Solution 5

function numberToString(num) {
    return ''+num;
  }