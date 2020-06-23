
//My solution

function toJadenCase(string){
    return string
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  let str = toJadenCase("How can mirrors be real if our eyes aren't real");
  console.log(str);
  

  //How it should have been written to pass Code Wars Check (basically, with the this. syntax)

  String.prototype.toJadenCase = function () { 
    return this.split(" ").map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }