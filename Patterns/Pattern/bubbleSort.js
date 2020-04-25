function bubbleSort(arr){
    let noSwap;
    for (let i = arr.length; i > 0; i--){
        noSwap = true;
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j+1]){
                temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
                noSwap = false;
            }
        }
        if(noSwap) break;
    }
    return arr;
}

//ES2015

function bubbleSortV2(arr){
//Swap
    const swap = (arr , z1 , z2) => {
        [arr[z1],arr[z2]] = [arr[z2],arr[z1]]
    }

    let noSwap;
    for (let i = arr.length; i > 0; i--){
        noSwap = true;
        for(let j = 0; j < i - 1; j++){            
            if(arr[j] > arr[j+1]){
            swap(arr,j,j+1);
            noSwap = false;
            }
        }
        if(noSwap) break;
    }
    return arr;
}