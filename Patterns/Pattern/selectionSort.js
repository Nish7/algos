function selectionSort(arr){
    
    const swap = (arr ,zone, ztwo) => {
        [arr[zone],arr[ztwo]]= [arr[ztwo],arr[zone]];
    }

    for (var i = 0;i < arr.length; i++){
        var min = i;
        
        for(var j = i+1; j < arr.length; j++){
            if(arr[min] > arr[j]) min = j;
        }
        
        if(i !== min) swap(arr,i,min);
    }
  
  return arr;
}

console.log(selectionSort([4,2,1,5,6]));
