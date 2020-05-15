// This function takes two numbers as parameters:
//  the first number being the coefficient, and the second number being the exponent.

// Your function should multiply the two numbers, and then subtract 1 from the exponent. 
// Then, it has to print out an expression (like 28x^7). "^1" should not be truncated when exponent = 2.
// The output of this function should be a string

// For example:
// derive(7, 8) --> this should output "56x^7" 
// derive(5, 9) --> this should output "45x^8" 



//My solution
function derive(a,b){
    let c = a * b
    return `${c}x^${b-1}`
}

//Solution 2
function derive(a, b) {
    return (a * b) + "x^" + (b - 1);
  }

//Solution 3
derive = (a, b) => `${a * b}x^${b - 1}`;