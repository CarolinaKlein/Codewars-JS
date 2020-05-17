//Create a function that takes an integer as an argument and returns
// "Even" for even numbers or "Odd" for odd numbers.

function isEven(num){
    return num % 2 == 0 ? "Even" : "Odd"
}

console.log(isEven(3))
console.log(isEven(4))