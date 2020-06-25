function century(year){
    let remainder = year % 100
    if (year % 100 === 0){
        return year /100;
    } else {
        return ((year + 100) - remainder) / 100
    }
}

//Best Practice

function century(year) {
    return Math.ceil(year/100); //using ceiling method to round up to nearest century (100)
  }
//Most Simple 

function century(year) {
    return (year + 99) / 100 | 0;
}

//ParseInt solution

function century(year) {
    if (year <= 100){
      return 1;
    }
  
    let cen = parseInt(year / 100);
    let rem = year % 100;
    
    return rem === 0 ? cen : cen + 1;
}

// Loop Solution

function century(year) {
    var century = 0;
  
    for(var i = 0; i < year; i++) {
      if(i % 100 == 0) {
        century++;
      }
    }
    return century;
  }