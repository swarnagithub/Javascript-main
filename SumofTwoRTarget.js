function SumofTwo(arr1,arr2,Target)
{

    let map = [];

    for(let i=0;i<arr1.length;i++)
    {

        for(let j=0;j<arr2.length;j++)
        {
            let sum = arr1[i]+arr2[j];
            if(sum == Target)
            {
              map.push({"i":i,"j":j})
              map.push({"i-index":i,"i-value":arr1[i],"j-index":j,"j-value":arr2[j]});
    
            }
        }
    }
    console.log(map);
}

function SumofTwoOptimized(arr1,arr2,Target)
{


    const setArr = new Set();

    for(let i=0;i<arr1.length;i++)
    {
        
        setArr.add(arr1[i]);
    }

  
    var finalarr =[];

        for(let j=0;j<arr2.length;j++)
        {
            remaining = Target-arr2[j];
            if(setArr.has(remaining))
            {
            var map = {"i-index":arr1.indexOf(remaining),"i-value":remaining,"j-index":j,"j-value":arr2[j]};
    
              finalarr.push(map);
            }

            
        }

        console.log(finalarr);
  
}

var array1 = [];
var array2 = [];

for (let i = 0; i < 10000; i++) {
    // Generate a random 2-digit number between 10 and 99
    const randomTwoDigitNumber = Math.floor(Math.random() * 90) + 10;
    const randomTwoDigitNumber2 = Math.floor(Math.random() * 90) + 10;
    array1.push(randomTwoDigitNumber);
    array2.push(randomTwoDigitNumber2);
  }

console.log(array1);
console.log(array2);
// Start measuring time
var startTime = performance.now();
SumofTwo(array1,array2,100);
var endTime = performance.now();
// Calculate the elapsed time
var elapsedTime = endTime - startTime;
console.log(`Execution time: ${elapsedTime} milliseconds`);

console.log("----------------\n");

startTime = performance.now();
SumofTwoOptimized(array1,array2,100);
endTime = performance.now();
elapsedTime = endTime - startTime;
console.log(`Execution time: ${elapsedTime} milliseconds`);
