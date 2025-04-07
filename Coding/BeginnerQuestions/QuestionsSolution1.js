
// QUESTIONS AND FUNCTIONS.........

// 1. Write a program to take a user's name as input and print "Hello, [name]!".
function print (name) {
    console.log(`Hello, ${name}!`)
 }
 
 // 2. sum of two numbers
 function sum (a, b) {
        console.log(a + b);
 }
 
 
 // 3. Write a program to calculate the area of a rectangle (length × width)
 function reactangleArea (l, b) {
     return  l*b;
 }
 
 //  4. Write a program to swap two numbers without using a third variable.
 function swapTwoNumbers (a, b) {
       let num1 = a;
       let num2 = b;
 
       console.log("Before swap:");
       console.log(`num1: ${num1}, num2: ${num2}`);
 
       num1 = num1 + num2;;
       num2 =  num1 - num2;
       num1 = num1 - num2; 
 
       console.log("After swap:");
       console.log(`num1: ${num1}, num2: ${num2}`);
 }


//   5. Write a program to check if a number is even or odd.
        function oddEven (a) {
            
            let isEven = a % 2;
            if(isEven === 0) { 
                console.warn(a, "is: even")
            } else {
                console.warn(a, "is: odd")
            }
        
        }


// 6. Write a program to find the largest of three numbers.
function largestThreeNumber () {
    //  approach 1
      let a = 50;
      let b =20;
      let c = 30;
      
      
      let isBigger = null;
      
      if(a > b) { 
          isBigger = a;
      } else {
          isBigger = b;
      }
      
      
      if(isBigger > c) {
          console.warn("isBigger:", isBigger)
      } else { 
           console.warn("isBigger:", c)
      }
      
      
      
    //   approach 2
    
    if(a > b && a > c) {
          console.warn("isBigger:", a)
    }  else if(b> a && b > c) {
         console.warn("isBigger:", b)
    } else {
       console.warn("isBigger:", c)
    }

    // third approach
    console.log("Largest:", Math.max(a, b, c));    
   
}


// 7.Write a program to calculate the square and cube of a number.
function calculateSquareAndCube(number) {
    let square = number * number;
    let cube = number * number * number;
  
    console.log(`Square of ${number} is: ${square}`);
    console.log(`Cube of ${number} is: ${cube}`);
  }




// 8. Write a program to print numbers from 1 to 10 using a loop.
  function printNumbers (count) {
    for(let i = 0; i < count ; i++) {
        console.warn("count:", i + 1)
    }  
}




// 9. Write a program to print the multiplication table of a given number

function printTable (count, upto) {
    for(let i = 0; i < upto ; i++) {
        console.warn("count:", count * (i + 1))
    }
    
   
}




// Q10. Factorial

    //  approach1
    function calculateFactorial (num) {
        let factorial = 1
           for (let i = num; i > 0; i--) {
                 factorial = factorial * i
           }
           
           
           console.warn("factorial:", factorial)
    }


    //  approach2:  using recursion
    // to understand about recursion more please refer pdf folder in javascript coding folder.
    function calculateFactorial (num) {
                if(num === 1) {
                    return 1;
                } else {
                    return num * calculateFactorial(num - 1);
                }
    }




//Q11. Write a program to count the number of digits in a given number.

// Approach1:

function countDigits(number) {
    // Handle negative numbers by taking absolute value
    number = Math.abs(number);
  
    // Special case when number is 0
    if (number === 0) return 1;
  
    let count = 0;
    while (number > 0) {
      number = Math.floor(number / 10); // Remove last digit
      count++;
    }
  
    console.log(`Number of digitsin number is: ${count}`);
  }


//   Approach 2:
  
function countDigits2(number) {
    console.warn("`Number of digitsin number by approach2 is:",    Math.abs(number).toString().length);

  }




// Q12. Write a program to find the largest number in an array.
        // approach1...
        function largestNumberInArray (array) {
            let largest = array[0];
            
            for(let i = 0; i < array.length; i++) {
                if(array[i] > largest) {
                    largest = array[i]
                }
            }
            
            console.warn("largestNumberInArray:", largest)
        }

        // approach2...
        // swap two numbers;;

        let count = 0;
        function largestNumberInArray1 (a) { 

        for(let i = 0 ; i < a.length; i++) {
            
                if( i  === a.length - 1) {
                    return a[i]
                }
                
                if(a[i] > a[i + 1]) {
                a[i + 1] = a[i]
                } 
        }
        }

     




// Q13. Write a program to reverse a given string.
        // approac1:
                function reverseString1 (a) { 
                    let newString = '';
                    for(let i = a.length -1 ; i>=0; i--) {    
                        newString += a[i]
                    }   
                    return newString;
                }



        // approach2: 
            //  .split("") converts the string into an array of characters.
            //  .reverse() reverses the array.
            //  .join("") converts the array back into a string.

        function reverseString2(str) {
            return str.split("").reverse().join("");
        }



        // approach3:
                // Using Recursion (Advanced)
                // The function calls itself with str.slice(1), removing the first character.
                //    The last character gets added at the end in each recursive step.

                function reverseString3(str) {
                    if (str === "") return "";
                    return reverseString3(str.slice(1)) + str[0];
                }
                
             


        // approach4:
            // Using reduce()
            // array.reduce((accumulator, currentValue) => { ... }, initialValue)

        function reverseString(str) {
            return str.split("").reduce((reversed, char) => char + reversed, "");
        }



// Q14.Write a program to check if a string is a palindrome (same forwards and backwards).

       // approach1:
       function palindrome (a) { 
        let isPalindrome = true;
        let j  = a.length - 1;
         for(let i = 0 ; i < a.length; i++) {
                if(i > j) {
                    return isPalindrome;
                } else { 
                    if(a[i] != a[j]) {
                          isPalindrome= false;
                    }
                }
                j--;
           
         }
         
         return isPalindrome;
         
       }


    //    approach2:
    function isPalindrome(str) {
        for (let i = 0; i < Math.floor(str.length / 2); i++) {
            if (str[i] !== str[str.length - 1 - i]) {
                return false;
            }
        }
        return true;
    }
 
    
       
//Q15. Write a function to check if a number is prime.
            //  A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. 
            //    In other words, a prime number cannot be formed by multiplying two smaller natural numbers.
            // -numbers are not prime, 0 not prime, 1 not prime.
            //  2 is prime.

        // approach1:
                                    
                function checkPrime(n) {
                    // Initialize a counter variable to
                    // count the number of factors.
                    let cnt = 0;
                    // Loop through numbers from 1 to n.
                    for (let i = 1; i <= n; i++) {
                        // If n is divisible by i
                        // without any remainder.
                        if (n % i === 0) {
                            // Increment the counter.
                            cnt = cnt + 1;
                        }
                    }

                    // If the number of
                    // factors is exactly 2.
                    if (cnt === 2) {
                        // Return true, indicating
                        // that the number is prime.
                        return true;
                    }
                    // If the number of
                    // factors is not 2.
                    else {
                        // Return false, indicating
                        // that the number is not prime.
                        return false;
                    }
                }

                function isPrimeNumber1(n) {
                
                    let isPrime = checkPrime(n);
                    if (isPrime) {
                        console.log(n + " is a prime number.");
                    } else {
                        console.log(n + " is not a prime number.");
                    }
                }

    // approach2:


    function isPrimeNumber2(num) {
        if (num < 2) {
            return false;
        }

        // The loop runs till i <= √num because:

        // If a number has any factors other than 1 and itself, one of those factors must be less than or equal to the 
        // square root of the number.
        
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        
        return true;
    }
    




// Q16.  Write a function to return the sum of all numbers in an array.


        // APPROACH1:

            function sumOfArray1 (arr) {
                let sum = 0;
                for(let i = 0; i < arr.length; i++) {
                        sum += arr[i]
                }
                console.log("sumOfArray:", sum)
            }


        // APPROACH2:
            // here, 0 is the second argument at reduce method and in reduce the second argument i.e refered as initial value.
            // The initial value to be used as the first argument for the first call of the callback function. If not provided, 
            // the first element of the array is used as the accumulator, and the iteration starts from the second element.

            //  if we don't provide 0 here and want to check the sum of an empty array than we in that case we get an error 
            // that  Reduce of empty array with no initial value.
            // With no initial value, calling reduce() will throw an error, because there are no elements to use as the initial
            //  value, and reduce() doesn't know what to start with.
            // With an initial value, like 0, the result would be 0 because reduce() will simply return the initial value when 
            // the array is empty.


        function sumOfArray2 (arr) {
           let sum = arr?.reduce((acc, currentValue) => acc + currentValue, 0)
            console.log("sumOfArray:", sum)
        }




// Q17. Write a function that takes two numbers as arguments and returns their greatest common divisor (GCD).


    function calculateGCD(a,b) {
        while (b !== 0) {
            let temp = b;     
            b = a % b;
            a = temp;
        }
        return a;
    }

    // STEPS are going on in the above code..
    // a = 15; b =45
    // a=45; b=15
    // b=0; a= 15;




// Q18. Write a program to print the Fibonacci series up to n terms.

function fibonacci1(n) {
    let a = 0, b = 1, temp;
    
    console.log(a); // First Fibonacci number
    if (n > 1) console.log(b); // Second Fibonacci number

    for (let i = 2; i < n; i++) {
        temp = a + b;
        console.log(temp);
        a = b;
        b = temp;
    }
}




function myFibonacci(n) {
    let n1=0;
    let n2=1;
    let temp;
    
    if(n <1) console.log('0');
    if(n > 0) {console.log('0');console.log("1")} 
    
   while (n > 2) {
       temp = n2;
       n2 = n1 + n2;
       n1= temp
       n--;
       console.log(n2)
   }
}




function recursionFibonacci(n) {
    if (n < 2) {
        return n;
    }
    return recursionFibonacci(n - 1) + recursionFibonacci(n - 2);
}


function fibonacciForLoop(n) {
    let a = 0, b=1, temp;
    console.log(a);
    if(n > 1) console.log(b);
      
    for(let i = 2; i < n ; i++) {
        temp = a+b;
        a = b;
        b = temp;
        console.log(temp);
    }

}




//Q19. Write a program to check if a number is an Armstrong number (e.g., 153 = 1³ + 5³ + 3³).



function armstrongNumber(n) {
      let number = n.toString();
      let isTotal = 0

      for(let i = 0 ; i < number?.length; i++ ) {
        isTotal += number[i] * number[i] * number[i] 
      }


      if(isTotal == n) {
            return true;
      } else {
        return false;
      }
}



  


        
     







  
  

  









 
 
 
 
 




 
 //  FUNCTIONS CALLED HERE IN SEQUENCE ONE BY ONE....
 
 // print('vipul')

 // sum(2, 3)
 
 // const area = reactangleArea(10, 5);
 // console.log(area);
 
 
 // swapTwoNumbers(10, 20)

//  oddEven(5)

// largestThreeNumber()

//   calculateSquareAndCube(3);

// printNumbers(10)

// printTable(5, 10)

// calculateFactorial(3)

// countDigits(-1);
// countDigits2(-10)

// largestNumberInArray([-1,-2,-30,-4,-5]);
//    console.log(largestNumberInArray1([5, 3, 9, 2, 15, 1]))

// reverseString1('abc);
// reverseString2('abc);
// reverseString3('abc);

// isPalindrome('abcd')

// isPrimeNumber1(5)
// isPrimeNumber2(5);

//  sumOfArray1([1,2,3,4])
// sumOfArray2([1,2,3,4])


//   console.log("GCD:", calculateGCD(15,45)) 

// fibonacci1(2);
// myFibonacci(3);
// console.log(recursionFibonacci(3)); 
// fibonacciForLoop(5);   


// console.warn( armstrongNumber(154));

 
 
 