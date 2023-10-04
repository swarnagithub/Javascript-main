function findFirstRecur(array)
{
let mapt = {};
for(let i=0;i<array.length;i++)
{
    console.log(array[i]);
    console.log("hello"+mapt[array[i]]);

    if(mapt.hasOwnProperty(array[i]))
    {
       console.log("matched");
       console.log(mapt[array[i]]);
      
    }
    else
    {
        console.log("not matched");
        mapt[array[i]] = i;
    }

    console.log(mapt);
}
}

function findFirstRecur2(array) {
    let mapt = [];
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
      console.log("hello" + mapt);
      console.log(mapt.indexOf(array[i]));
  
      if (mapt.indexOf(array[i]) == -1) {
        console.log("not matched");
        mapt.push(array[i]);
        console.log(array[i]);
      } else {
        console.log("matched");
        
        console.log(array[i]);
        return array[i];
      }
  
      console.log(mapt);
      console.log(i + "*********");
    }
  }
  
findFirstRecur([2,3,1,2,4,5]);
console.log("Hello*********");
findFirstRecur2([2,1,1,2,4,5]);