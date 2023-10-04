class Compositems
  {
    constructor()
    {
      this.length = 0;
      this.data = [];
    }
    
    getitems()
    {
      return this.data;
    }

    getlength()
    {
      return this.data.length;
    }

    additem(input)
    {
      this.data.push(input);
      this.length++;
    }

    deleteitem(input)
    {
       this.data = this.data.filter(item => item !== input);
      this.length--;
    }
  }

  

  const newarr = new Compositems();
  newarr.data = [1,2,3,4];
  console.log(newarr.getitems());
  console.log(newarr.getlength());
  newarr.additem(5);
  console.log(newarr.getitems());
  newarr.deleteitem(4);
  console.log(newarr.getitems());

