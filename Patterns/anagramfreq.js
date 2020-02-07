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