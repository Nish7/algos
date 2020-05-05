// MULTIPLE POINTERS
// Creating pointer or values that corresponds to an index or position and move towards the beginning, end or middle on a certain condition.
// Nice space complexity
 
//SumZero
//Write a function called sumZero which accepts a sorted array of integers. The function shoudl find the firts pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.


//Examples: sumZero([-3,-2,-1,0,1,4,5]); //  [-1,1];

// Colt Approach 
function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while (left < right){
        let sum = arr[right] + arr[left];
        if(sum === 0){
            return [arr[left],arr[right]]; 
        }else if(sum > 0 ){
            right--;
        }else{
            left++;
        }
    }
}

// Time complexity : O(n);




