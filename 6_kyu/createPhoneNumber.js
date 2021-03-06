//Write a function that accepts an array of 10 integers (between 0 and 9), 
//that returns a string of those numbers in the form of a phone number.
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
//The returned format must be correct in order to complete this challenge.
//Don't forget the space after the closing parentheses!

// My answer that kind of work, but didn't pass the test, because I didn't understand how codewars 
// wanted me to do this excercise

function createPhoneNumber(numbers){
    const a = Math.floor(Math.random() * 10)
    const b = Math.floor(Math.random() * 10)
    const c = Math.floor(Math.random() * 10)
    const d = Math.floor(Math.random() * 10)
    const e = Math.floor(Math.random() * 10)
    const f = Math.floor(Math.random() * 10)
    const g = Math.floor(Math.random() * 10)
    const h = Math.floor(Math.random() * 10)
    const i = Math.floor(Math.random() * 10)
    const j = Math.floor(Math.random() * 10)
  
    return `(${a}${b}${c}) ${d}${e}${f}-${g}${h}${i}${j}`
  }
  
  console.log(createPhoneNumber())

// The best solution. Note: Codewars was supplying the individual numbers for the test. So I didn't 
// need to do math.random() at all

function createPhoneNumber(numbers){
    numbers = numbers.join('');
    return '(' + numbers.substring(0, 3) + ') ' + numbers.substring(3, 6) + '-' + numbers.substring(6);
  }

// The most clever solution

function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }

// Solution that was on my runner up method

function createPhoneNumber(numbers){
    numbers.unshift("(");
    numbers.splice(4, 0, ")", " ");
    numbers.splice(9, 0, "-");
    return numbers.join("");
}

// 

function createPhoneNumber(numbers){
    var numStr = numbers.join('');
    var first = numStr.substr(0, 3);
    var second = numStr.substr(3, 3);
    var third = numStr.substr(-4);
    return '(' + first + ') ' + second + '-' + third; 
  }

// Solutions that fly over my head

function createPhoneNumber(numbers){
    return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
  }
   //or
function createPhoneNumber(numbers){
    return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3');
  }
