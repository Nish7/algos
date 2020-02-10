//Coding Exercise 3 _ Frequency Counter - Same Frequency

/* 

Write a function called sameFrequency.Given two positive integers,find out if the two numbers have the same frequency of digits;

Example:
sameFrequency(182,122) // True
sameFrequency(34,14) // False

*/

function sameFrequency(numOne,numTwo){

    //Converting the numbers to string 
    let numFir = numOne.toString();
    let numSec = numTwo.toString();

    // checking the length
    if(numFir.length !== numSec.length) return false;

    //declaring the objs
    let freqOne = {};
    let freqTwo = {};

    //looping both numbers
    for(let i = 0; i < numFir.length ; i++){
        let char = numFir[i];
        freqOne[char] ? freqOne[char] += 1 : freqOne[char] = 1; 
    }
    
    for(let i = 0; i < numSec.length ; i++){
        let char = numSec[i];
        freqTwo[char] ? freqTwo[char] += 1 : freqTwo[char] = 1; 
    }
    
   //validation
   for(let key in freqOne){
    if(!(freqTwo[key])){
        return false;
    }
    if(freqTwo[key] !== freqOne[key]){
        return false;
    }
   }

   return true;

}

//Time complexity : O(n);

