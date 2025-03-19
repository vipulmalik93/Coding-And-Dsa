
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
function largestNumberInArray (array) {
    let largest = array[0];
    
    for(let i = 0; i < array.length; i++) {
        if(array[i] > largest) {
            largest = array[i]
        }
    }
    
    console.warn("largestNumberInArray:", largest)
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

 
 
 