//ex: capitalize the first letter of each word


//My solution

function toJadenCase(string){
    return string
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  let str = toJadenCase("How can mirrors be real if our eyes aren't real");
  console.log(str);
  

  //How it should have been written to pass Code Wars Check (basically, with the "this." syntax)

  String.prototype.toJadenCase = function () { 
    return this.split(" ").map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }


  //Solution that is hard to understand, but best practice:

  String.prototype.toJadenCase = function () {
    return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
  };

  //using a loop 

  String.prototype.toJadenCase = function () {
    let words = this.split(' ');
  
    for( i = 0, wordsLen = words.length; i < wordsLen; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
  
    return words.join(' ');
  };