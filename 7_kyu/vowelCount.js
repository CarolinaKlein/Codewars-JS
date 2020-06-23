//My solution

function getCount(str) {
    var vowelsCount=0;
    for(var i=0; i < str.length; i++){
        if(str[i] === "a" || 
           str[i] === "e" || 
           str[i] === "i" ||
           str[i] === "o" ||
           str[i] === "u"){
            vowelsCount++;        
        }
    }
    return vowelsCount;
}


//The most popular solution

function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }
// My favority solution 

function getCount(str) {
    var vowelsCount = 0;
    for (index in str){
      switch (str[index]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
      vowelsCount++;
      break;
      }   
    }
    return vowelsCount;
  }
  
//Solution 4. The longest solution

function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a","e","i","o","u"];
    for(var i = 0;i < str.length;i++){
      for(var j=0;j<vowels.length;j++){
        if(str[i] === vowels[j]){
          vowelsCount++;
        }
      }
    }
    
    return vowelsCount;
  }

// Solution function within a function

function getCount(str) {
    var vowelsCount = 0;
    str.split("").forEach(function(x){
      if(x == "a" | x == "e" | x == "i" | x == "o" | x == "u"){
        vowelsCount += 1;
      }
    });  
    return vowelsCount;
}