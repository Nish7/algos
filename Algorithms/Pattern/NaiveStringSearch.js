function naive(strOne,strTwo){
    strOneLen = strOne.length;
    strTwoLen = strTwo.length;


    let flag = 0;
    for(let i = 0; i <= strOneLen - strTwoLen ;  i++ ){
        
        let cnt = 0
        let check = true;
       
        while(check === true){
            if(cnt === strTwoLen){
                flag++;
                cnt = 0;
                i++;
            }
            if(strTwo[cnt] === strOne[i + cnt]){
                cnt++;
                check = true;
            }else{
                check = false;
            }
        } 
    }

    return flag;

}

console.log(naive('wowoomgwow','omg'));


// wowoomgwow
//     omg

