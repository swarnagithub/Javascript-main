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
3. Write a program to check if a vowel is present in a string. */

function FindVowel(input)
{
  let vowel = ['a','e','i','o','u'];

  let map = {};
  for(let i=0;i<vowel.length;i++)
  {
   map[vowel[i]] = i;
  }
console.log(map);
  let vowel_count=[];
  for(let i=0;i<input.length;i++)
  {
   if(map.hasOwnProperty(input[i]))
   {
    console.log("vowels -- "+input[i]);
    if(vowel_count.indexOf(input[i])==-1)
    {
      vowel_count.push(input[i]);
    }
   }
   else
   {

    console.log("consonents -- "+input[i]);
   }
  }
  console.log("There are "+ vowel_count.length + " vowels in "+input);
}


//FindVowel('elephant');

function FindVowel1(input)
{
  let vowel = ['a','e','i','o','u'];
  let vowel_count=0;
  for(let i=0;i<vowel.length;i++)
  {
   if(input.indexOf(vowel[i])!=-1)
   {
     console.log(vowel[i]);
    vowel_count = vowel_count+1;
   }
  }
  console.log("There are "+vowel_count+" vowels in "+input);

}


FindVowel1('elephant');
