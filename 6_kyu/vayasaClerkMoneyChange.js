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