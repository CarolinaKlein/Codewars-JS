function century(year){
    let remainder = year % 100
    if (year % 100 === 0){
        return year /100;
    } else {
        return ((year + 100) - remainder) / 100
    }
}