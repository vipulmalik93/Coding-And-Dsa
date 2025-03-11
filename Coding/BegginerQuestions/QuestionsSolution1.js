
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
 
 
 
 
 

 
 
 //  FUNCTIONS CALLED HERE IN SEQUENCE ONE BY ONE....
 
 // print('vipul')
 // sum(2, 3)
 
 // const area = reactangleArea(10, 5);
 // console.log(area);
 
 
 // swapTwoNumbers(10, 20)
 
 
 