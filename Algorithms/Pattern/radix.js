//Get digit from the array (starting from the end(right))
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}


//Digit count
function digitCount(num){
    const numString = num.toString();
    let x = 0
    for (char of numString) {
        x++;
    }
    return x;
}


//mostDigit
function mostdigit(arr){
    let max = 0;
    arr.forEach((element) => {
        let temp = digitCount(element);
        max = Math.max(max, temp);
    });

    return max;
}

//Radix Function 
function radix(arr){
    let maxDigit = mostdigit(arr);

    for(let k = 0; k < maxDigit;k++){
        let digitBuck = Array.from({length:10}, () => []);
        for(let i = 0; i < arr.length; i++){
            let digit = getDigit(arr[i],k);
            digitBuck[digit].push(arr[i]);
        }

        arr = [].concat(...digitBuck);
    }

   return arr;
}


//Array.from 
//concat and ... function 


console.log(radix([3,6,73,252,15,1,1]));
