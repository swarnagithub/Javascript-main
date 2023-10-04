class Hashtable
{
  constructor(size){
    if(size)
    {
   this.data = new Array(size);
  }
  else
  {
    this.data = new Array();
  }
  }

  _hashfunction(key)
  {
    let hash=0;
    for(let i=0;i<key.length;i++)
    {
      hash = (hash + (key.charCodeAt(i) * i)) % this.data.length;
      
    }
    return hash;
   // console.log(hash);
  }

  setdata(key,value)
  {
    const hash = this._hashfunction(key);
    if(this.data[hash])
    {
      if(this.data[hash].find(x=>x[0]==key))
      {
      this.data[hash].find(x=>x[0]==key)[1]=value;
      }
      else
      {
        this.data[hash].push([key,value]);
      }
      
    }
    else
    {
      this.data[hash] = [[key,value]];
    }
    return this.data;  
  }
  
  getData(key)
{
  const hash = this._hashfunction(key);
  if(this.data[hash].find(i=>i[0]==key))
  {

    console.log(this.data[hash].find(i=>i[0]==key));
    console.log(this.data[hash].find(i=>i[0]==key)[1]);
  return this.data[hash].find(i=>i[0]==key)[1];
  }
  else
  {
    console.log("Not found");
    return "Not found";
  }

}
}


const ht = new Hashtable(4);
//ht.setdata("hellouygjv87568768688568559","111");
ht.setdata("Suman","222");
ht.setdata("Suman","333");
ht.setdata("Suman","666");
ht.setdata("Suman","333");
ht.setdata("Suman","444");
ht.setdata("Suman","555");
ht.setdata("Swarna","1212");
ht.setdata("Swarna","789");
ht.setdata("Swarna","876");
ht.setdata("Swarna","536");
ht.setdata("Vid","6767");
ht.setdata("Vid","8989");
ht.setdata("Vid","5656");
ht.setdata("Vid","123");

ht.setdata("Vel","900089");
ht.setdata("Vel","56");

console.log(ht.data);
ht.getData("Vel");