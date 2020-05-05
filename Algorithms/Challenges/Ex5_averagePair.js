//Coding Excercise 5 - AveragePair

/*

Write a function called averagePair. given a sorted array of integers and target average,
 determine if there is a pair of values in the array where the average of pair equals the target average . 
 sthere may be more than one pair that matches the average target.

Sample Input:
averagePair([1,2,3],2.5)  // True;
averagePair([],4); // False;

*/


function averagePair(arr,tarAvg){
    // Arr and average exists if not return false;
    if(!arr || !tarAvg) return false;

    //declare left and right index
    let left = 0;
    let right = arr.length - 1;

    while(left < right){

        let tempAvg = (arr[left] + arr[right]) / 2 ;

        if (tempAvg == tarAvg) return true;

        else if(tempAvg > tarAvg){
            right = right - 1;
        }

        else if(tempAvg < tarAvg){
            left = left + 1;
        }
        
    }
     
    return false;

}


/*

1 3 3 5 6 7 10 12 19 // 8 

1 + 19 = 20 / 2 = 10 
1 + 12 = 13 / 2 = 6.5
3 + 12 = 15 / 2 = 7.5 
3 + 12 = 15 / 2 = 7.5
5 + 12 = 17 / 2 = 8 . 5
5 + 10 = 15 / 2 = 7.5 

6 + 10 = 16 / 2 = 8

*/