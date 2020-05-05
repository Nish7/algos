// Coding Exercise 6 - IsSubsequence

/*

sing , sting
abc , acb
hello helloqq

 i j
 0 0
 1 1
 2 2
 3 3
 4 4
 5 5 


*/

function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
      if ( str1[i] === str2[j] ) i++;
      if (i === str1.length) return true;
      j++;
    }
    return false;
  }

