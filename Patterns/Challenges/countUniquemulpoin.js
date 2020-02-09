function countUniqueValue(arr){
    let left = 0;
    let right = 1;

   if(arr.length === 0){
       return 0;
   }
   
   let uniqueval = 1;

    while(right < arr.length){
        if(arr[left] == arr[right]){
            right++;        
        } else {
            uniqueval ++;
            left = right;
            right = left + 1;
        }
    }

    return uniqueval;

}

//Time complexity : O(n);

