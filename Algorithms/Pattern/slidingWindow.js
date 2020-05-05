// SLIDING WINDOW

/* 

This pattern involves creating a window which can either be an array or number from one position to another ...
depending on a certain condition, the window either increases or closes (new windoe is created)... 
Very usefull for keeping track of a subste date in an array/string.

//  MaxSubSum

Write a function called maxSubArraySum which accepts an array of integers and a number called N, 
The function should calculate the maximum sum of n consecutive elements in the array.

Example : 
MaxSubSum([2,6,9,2,1,8,5,6,3],3); // 19

*/


function MaxSubSum(arr,num){
    if(num > arr.length) return null;

    let maxSum = 0;
    let tempSum = 0;

    for(let i  = 0; i < num  ; i++){
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for(let j = num; j < arr.length ; j++){
        tempSum = tempSum - arr[j - num] + arr[j];
        maxSum = Math.max(tempSum,maxSum);
    }

    return maxSum;

}

