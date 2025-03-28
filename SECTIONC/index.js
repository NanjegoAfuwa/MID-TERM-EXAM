// NO.1
function reverseString(str) {
    return str.split('').reverse().join('');
  }

  
// NO.2
 function sumOfNumbers(arr) {
    return arr.filter(num => num % 2 === 0)  
              .reduce((sum, num) => sum + num, 0); 
  }


//NO.3
function product_or_sum(c,d ) {
    if (c=== d) {
      return d * c;
    } else {
      return c + d;  
    }
  }

 console.log(product_or_sum(2, 3)); //testing my work  //sum
 console.log(product_or_sum(2, 2))   //product

//NO.4
function isPalindrome(word) {          
    let reversed = word.split("").reverse().join(""); //checking if the word is the same when is reversed
    return word === reversed;
}
console.log(isPalindrome("boyisboy")); //returning false because the out boyisboy will be yobsiyob when reversed
