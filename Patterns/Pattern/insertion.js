function insertionSort(arr){

    //Swap function 
    const swap = (arr,One,Two) => {
        [arr[One],arr[Two]] = [arr[Two],arr[One]]
    }

    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j >= 0; j--){
            if(arr[i] >  arr[j]) swap(arr,i,j)
            else{
                break;
            }
        }
    }

}


//Second Approach

function insertionSort(arr){
    const swap = (arr,one,two) => {
        [arr[one],arr[two]] = [arr[two],arr[one]]
    }

    for(let i = 1; i < arr.length; i++){
        let currentVal = arr[i];

        for(let j = i-1; j >= 0; j--){
            if(arr[j] > arr[i]) swap(arr,i,j)
          }

    }
}


//colt approach

function insert(arr){
    for(let i = 1 ;i < arr.length; i++){
        let currentVal = arr[i];

        for(let j = i - 1 ; j >= 0 && arr[j] > currentVal; j--){
            arr[j+1]= arr[j];
        }

        arr[j+1] = currentVal;
    }

    return arr;
}

3, 44, 2 , 5 , 47 , 15


