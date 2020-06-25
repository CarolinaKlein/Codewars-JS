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
//Solution 2

function century(year) {
    return (year + 99) / 100 | 0;
}


