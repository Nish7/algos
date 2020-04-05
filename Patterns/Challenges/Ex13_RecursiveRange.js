//Coding Excercise 13 - Recurisive Range

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange (num){
    if (num === 0) return 0;
    return num + recursiveRange(num-1)
}

console.log(6); 
//21