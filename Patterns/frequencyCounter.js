//Frequency Counter
//This pattern uses objects or sets to collect values/frequencies of values




//Example One
//Write an function called same, which accepts two arrays.The function should return true if every value in the second array is squared. The frequency should be same

/*

same([1,2,3] , [4,1,9]) // True
same([1,2,3] , [1,9]) // False
same([1,2,3] , [1,9]) // False

*/


//First Approach  ( Naive )
function same(arrOne , arrTwo){
    if(arrOne.length !== arrTwo.length){
        return false;
    }

    for (let i = 0; i < arrOne.length; i++){
        correctIndex = arrTwo.indexOf(arrOne[i] ** 2);
        if(correctIndex == -1 ){
            return false;
        } 
        arrTwo.splice(correctIndex,1);
    }

    return true;
};

//Time complexity : O(n^2)


// Second Approach

function sameTwo(arrOne,arrTwo){

    //Check if length is same
    if(arrOne.length !== arrTwo.length){
        return false;
    }

     //declare objects for each arrays into objects
    let freqOne = {};
    let freqTwo = {};

    //loop arrOne and store into objects as key with freq
    for(let val of arrOne){
        freqOne[val] = (freqOne[val] || 0) +  1;
    }

    //loop arrTwo and store into objects as key with freq
    for(let val of arrTwo){
        freqTwo[val] = (freqTwo[val] || 0) +  1;
    }
   
    for(let key in freqOne){
        
        //loop check if key exists in arrtwo
        if(!(freqTwo[key ** 2])){
            return false;
        }

        // if exists how many?
        if(freqTwo[key ** 2] !== freqOne[key]){
            return false;
        }
    }

    return true;

}

// Time complexity : O(n);
