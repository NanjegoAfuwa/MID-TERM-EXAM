// NO.1
function reversed_string(str) {
    return str.split('').reverse().join('');
  }
 //testing my function
 const string = "my name is";
 const result = reversed_string(string);
 console.log(result);  
  
// NO.2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = sum_of_numbers(numbers);

 function sum_of_numbers(arr) {
    return arr.filter(num => num % 2 === 0)  
              .reduce((sum, num) => sum + num, 0); 
  }
  console.log(sum);

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
console.log(isPalindrome("boyisboy")); //returning false because the word boyisboy will be yobsiyob when reversed
