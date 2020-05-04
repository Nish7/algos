//Quick Sort

function pivot(arr, start = 0, end = arr.length - 1){
    var pivot = arr[start];
    let swap = start;

    const swapfunction = (arr,i,j) => {
        [[arr[i],arr[j]] = [arr[j],arr[i]]];
    }

    for(let i = start + 1 ;i <= end; i++){
        if(pivot > arr[i]){
            swap++
            swapfunction(arr,swap,i)
        }
    }

    swapfunction(arr,start,swap)
    return swap;
}

console.log(pivot([12,1.12,1313,4,1,41,3]));


function quickSort(arr, left = 0, right = arr.length-1){
    if(left < right) {
        let pivotindex = pivot(arr,left, right);

         quickSort(arr, left, pivotindex-1);
         quickSort(arr, pivotindex+1, right);
    }

    return arr;
}

console.log(quickSort([3,2,1,4,5,7,8,1,1,1,1,1,1]));
