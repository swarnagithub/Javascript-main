/* https://www.digitalocean.com/community/tutorials/java-programming-interview-questions*/


//1. How do you reverse a string? 

function ReverseString(input)
{   console.log(input);
    let newString = '';
    for(let i =input.length-1;i>=0;i--)
    {
      newString = newString+input[i];
    }
    console.log(newString);
    return newString;
}
//ReverseString('swarna');

function ReverseString1(inputStr) {
  console.log(inputStr.split('').reverse().join(''));
  return inputStr.split('').reverse().join('');

}
//ReverseString1('swarna');

/* 
2. How do you swap two numbers without using a third variable? */

function SwapTwoNumbers(a,b)
{
  console.log("a="+a);
  console.log("b="+b);
 
  //10,8

  a = a + b ;//10+8 = 18
  b = a - b ;//18-8 = 10
  a = a - b ;//18-10 = 8

  console.log("a="+a);
  console.log("b="+b);

}

//SwapTwoNumbers(2,1)
/* 
3. Write a Java program to check if a vowel is present in a string. */
