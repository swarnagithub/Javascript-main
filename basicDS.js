function reverseString(input)
    {
      console.log(input.length);
      const val = str => [...str].length;
      console.log('val-'+val);
      
      var reverString='';
      for(let i=input.length-1;i>=0;i--)
      {
        console.log(i);
        console.log(input[i]);
        reverString = reverString+input[i];
        console.log(reverString);
      }
      console.log(reverString);
  
  }

  function mergeSortedArray(arr1,arr2)
  {
    arr1 = arr1.concat(arr2);
    console.log(arr1);
    console.log(arr1.sort());
  }

  newarr.reverseString('Suman'); 
  newarr.mergeSortedArray([13,16,18,19],[1,4,6,8]);
   
