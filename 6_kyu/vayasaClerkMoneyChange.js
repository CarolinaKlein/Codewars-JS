// Description:
// The new "Avengers" movie has just been released! There are a lot of people at the cinema
// box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. 
//An "Avengers" ticket costs 25 dollars.
// Vasya is currently working as a clerk. He wants to sell a ticket to every single person 
//in this line. Can Vasya sell a ticket to every person and give change if he initially has 
//no money and sells the tickets strictly in the order people queue?
// Return YES, if Vasya can sell a ticket to every person and give change with the bills he has 
//at hand at that moment. Otherwise return NO.
// Examples:
// tickets([25, 25, 50]) // => YES 
// tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
// tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change 


function tickets(peopleInLine){
    let m25 = 0
    let m50 = 0 
    //let n100 = 0 no need to use it as you will see in the code. 

    for (let i = 0; i <peopleInLine.length; i++ ){
        switch (peopleInLine[i]){
            case 25:
                m25++;
                break;
            case 50:
                m25 > 0 ? m25-- : m25 = -1;            // if we have 25 dollar bills available, give them change of one 25 dollar bill. if not, subtract 1 point. 
                m50++;
                break;
            case 100:
                m25 > 0 && m50 >0 ? m50-- : (m25 > 2 ? m25 -= 2 : m25 = -1);
                m25--;
                break;
        }
    }

    return m25 < 0 ? "NO" : "YES"
}

// Solution 2

unction tickets(peopleInLine) {
    let bills = [0, 0, 0]
    for (let i = 0; i < peopleInLine.length; i++) {
      switch (peopleInLine[i]) {
        case 25:
          bills[0]++
          break
          
        case 50:
          bills[0]--
          bills[1]++
          break
          
        case 100:
          bills[1] ? bills[1]-- : bills[0] -= 2
          bills[0]--
          break
      }
      
      if (bills[0] < 0) {
        return 'NO'
      }
    }
    
    return 'YES'
  }

//Solution 3

function tickets(peopleInLine){
    var [n25, n50, n100] = [0, 0, 0];
    for (var i = 0; i < peopleInLine.length; i++) {
      switch(peopleInLine[i]) {
        case 25: n25++; break;
        case 50: n50++; n25--; break;
        case 100: n100++; n25--; 
          if (n50) n50--; else n25 -= 2; break;
      }
      if ([n25, n50, n100].some(v => v < 0)) return 'NO';
    }
    return 'YES';
  }

// Solution 4

function tickets(peopleInLine){
    // ...
    var twentyfive = 0;
    var fifty = 0;
    for (var i=0; i<peopleInLine.length; i++) {
      if (peopleInLine[i] === 25)
        twentyfive++;
      else if (peopleInLine[i] ===50) {
        twentyfive--;
        fifty++;
        }
      else {
        if (fifty > 0) {
          fifty--;
          twentyfive--;
        }
        else
          twentyfive -= 3;
      }
      if (twentyfive < 0)
        return "NO";
    }
        return "YES";
  }

//Solution 5

function tickets(peopleInLine){
    var bills = [100, 50, 25], canSell = "YES", bank = {"100": 0, "50": 0, "25": 0}, change;
    peopleInLine.forEach(function(person){
      bank[person]++;
      change = person - 25;
      bills.forEach(function(bill){
        while (bank[bill] && change > 0 && change >= bill) {
          change = change - bill;
          bank[bill]--;
        }
      });
      if (change > 0) canSell = "NO";
    });
    return canSell;
  }

//Solution 6

onst tickets = (peopleInLine) => {
    let bill25  = 0,
        bill50  = 0,
        bill100 = 0
        
    return peopleInLine.every(person => {
      switch (person) {
        case 25: 
          bill25 += 1
          return true
        case 50:
          bill50 += 1
          bill25 -= 1
          return bill25 >= 0
        case 100: 
          bill100 += 1
          if (bill50 >= 1) {
            bill50 -= 1
            bill25 -= 1
          } else bill25 -= 3
          return bill50 >= 0 && bill25 >= 0
      }
    }) ? 'YES' : 'NO'
  }

//Solution 7

function tickets(peopleInLine){
    var cash = [];
    for (var i = 0; i < peopleInLine.length; i++){
      var rest = peopleInLine[i] - 25;
      if (rest == 0) cash.push(25);
      else {
        cash.push(peopleInLine[i]);
        while (rest > 0){
          var elegible = cash.filter(x => x <= rest).sort((a, b) => a - b);
          if (elegible.length == 0) return "NO";
          var v = elegible.pop();
          cash.splice(cash.indexOf(v), 1);
          rest -= v;
        }
      }
    }
    return "YES";
  }

//Solution 8

function tickets(peopleInLine) {
  var tf = 0;
  var f = 0;
  var oh = 0;
  for (var i = 0; i < peopleInLine.length; i++) {
    if (peopleInLine[i] === 25) tf++;
    if (peopleInLine[i] === 50) tf--, f++;
    if (peopleInLine[i] === 100 && f <= 0) oh++, tf-=3;
    if (peopleInLine[i] === 100 && f > 0) oh++, f--, tf--;
    if (tf < 0 || f < 0 || oh < 0) return 'NO';
  } return 'YES';
}