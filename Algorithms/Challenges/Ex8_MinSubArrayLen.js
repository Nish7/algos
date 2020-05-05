// Coding Exercise 8- MinSubArrayLen
// NOT COMPLETED!!


/*

([2,3,1,2,4,3],7) --> 2 --> [4,3]

Tot End start min 
8    4   0     4    
6    4   1     4
10   5   1     4 
7    5   2     3





*/


function minSubArrayLen(arr,num){
    let start = 0;
    let end = 0;
    let total = 0;
    let min = infinty;
    
    for (var i = 0; i < arr.length; i++){
        
        if(total < num) {
        total += arr[i];
        end++;
        }
        
        if(total >= num){
            min = Math.min(min, end) 
            
        }
        
    }   
}