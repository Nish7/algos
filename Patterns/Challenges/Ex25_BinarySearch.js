//Coding Excercise 25 _ Binary Search

//[1,2,3,4,5] ,2  = 1

function BinSearch(arr,val){
    let left = 0;
    let right = (arr.length - 1);
    let mid =  Math.ceil(( left + right )/2)

while( left <= right && arr[mid] !== val){
     if(arr[mid] < val){
        left = mid + 1;
        mid = Math.ceil(( left + right )/2);
    }else{
        right = mid - 1;
        mid = Math.ceil(( left + right )/2);
    }
}

if(arr[mid] === val){
    return mid;
}

    return -1;
}

console.log(BinSearch([1,2,3,4,5],1));
console.log(BinSearch([1,2,3,4,5],5));


