function validAnagram(strOne,strTwo){
    // If length is same
    if(strOne.length !== strTwo.length){
        return false;
    }
    
    // declare two objects
    let freqStrOne = {};
    let freqStrTwo = {};

    //loop both arrys in objects
    for(let i = 0; i < strOne.length; i++){
        let charOne = strOne.charAt(i);
        freqStrOne[charOne] = (freqStrOne[charOne] || 0) + 1 ;
    }

    for(let i = 0; i < strTwo.length; i++){
        let charTwo = strTwo.charAt(i);
        freqStrTwo[charTwo] = (freqStrTwo[charTwo] || 0) + 1 ;
    }
  
    for(let key in freqStrOne){

         //check if key exists
        if(!(freqStrTwo[key])){
            return false;
        }

        // If exists how many ?is equal?
        if(freqStrTwo[key] !== freqStrOne[key]){
            return false;
        }
    }

    return true;

}

// time complexity: o(n^2);


// Colt Approach

function validAnagramTwo(strOne,strTwo){
    // Check if the length is same
    if(strOne.length !== strTwo.length){
        return false;
    }

    // declare obj
    const lookup = {};
    
    // loop frequency counter for strOne
    for(let i = 0; i < strOne.length; i++){
        let char  = strOne[i];
        lookup[char] ? lookup[char] += 1 : lookup[char] = 1 ;
    }

    // Loop for strTwo 
    for(let i  = 0;i < strTwo.length ;i++){
        let char = strTwo[i];

        // check if key exists in strOne
        if(!(lookup[char])){
            return false;
        }else{

            // if does remove one
            lookup[char] -= 1;
        }
    }
    
    return true;
    
}

// Time complexity : O(n);

