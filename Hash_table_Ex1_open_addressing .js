class Hashtable {
  constructor(size) {
    this.size = size;
    this.data = new Array(size);
  }

  _hashfunction(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.size;
    }
    return hash;
  }

  setdata(key, value) {
    const hash = this._hashfunction(key);
    
    // Start probing for an empty slot
    let index = hash;
    while (this.data[index] !== undefined) {
      // Check if the current slot has the same key (collision)
      if (this.data[index][0] === key) {
        // Update the value for the existing key
        this.data[index][1] = value;
        return this.data;
      }
      
      // Move to the next slot using linear probing (incrementing index)
      index = (index + 1) % this.size;
      
      // If we come back to the original slot, the table is full
      if (index === hash) {
        console.log("Table is full, unable to set data.");
        return this.data;
      }
    }

    // Found an empty slot, insert the key-value pair
    this.data[index] = [key, value];
    return this.data;
  }

  getData(key) {
    const hash = this._hashfunction(key);
    
    // Start probing for the key
    let index = hash;
    while (this.data[index] !== undefined) {
      if (this.data[index][0] === key) {
        return this.data[index][1];
      }
      
      index = (index + 1) % this.size;
      
      if (index === hash) {
        break; // Key not found after a full cycle
      }
    }

    console.log("Not found");
    return "Not found";
  }
}

const ht = new Hashtable(10);

ht.setdata("Suman", "222");
ht.setdata("Suman", "333");
ht.setdata("Suman", "666");
ht.setdata("Suman", "333");
ht.setdata("Suman", "444");
ht.setdata("Suman", "555");
ht.setdata("Swarna", "1212");
ht.setdata("Swarna", "789");
ht.setdata("Swarna", "876");
ht.setdata("Swarna", "536");
ht.setdata("Vid", "6767");
ht.setdata("Vid", "8989");
ht.setdata("Vid", "5656");
ht.setdata("Vid", "123");

ht.setdata("Vel", "900089");
ht.setdata("Vel", "56");

console.log(ht.data);
console.log(ht.getData("Vel")); // Outputs: 56
