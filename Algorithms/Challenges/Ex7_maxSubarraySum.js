// Coding Exercise 7- MaxSubArraySum


/*

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. 
If there isn't one, return 0 instead.

Sample 

[2,3,4,5] , 7 --> 2 // ( 5,4 )  

*/


function MaxSubArraySum(arr,num){
    let max = 0 ;
    let temp = 0;

    // Error
    if(num > arr.length) return null;

    for (let i = 0 ; i < num ; i++){
        max += arr[i];
    }

    temp = max;

    for(let j = num ; j < arr.length ; j++ ){
        temp = temp - arr[j-num ]  + arr[j];
        max = Math.max(temp,max);
    }

    return max;
    
}
