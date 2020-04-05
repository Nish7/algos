//Coding Excercise 12 - Product of Array

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr){


    function helper(Arrinp){
        if(Arrinp.length === 0) return 1;
        return Arrinp[0] * helper(Arrinp.slice(1));
    }

   return helper(arr);
}

console.log(helper([1,2,3]));












// Helper method recursion example

function collectOddValue(arr){
    let result = [];

    function helper(helperInput){
        if(helperInput.length === 0) return;

        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0]);
        }

        helper(helperInput.slice(1));
        

    }

    helper(arr);

}





arr = [1,2,3]
    result[1];
