'use strict';

const Memory = require('./memory');
const memory = new Memory();

// get(ptr), set(ptr, value), allocate(size), free(ptr), 
//   copy(to, from, size)

// [4, 2]

//             c=2
//             l=2
// xx123xx42fdh42xxfsxxxggg
//             p
// Push(3)

//             c=9
//             l=3
// xx123xx42fdh42xxfsxxxggg4635x423xxxxxxxxxxxxxxxxxxxxxx
//                              p

// pop ()

class Array {
  constructor() {
    this.length = 0;
    this.ptr = memory.allocate(this.length);
    this._capacity = 0;
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    //WE FORGOT THIS!!!
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }

    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capacity = size;
  }

  get(index) {
    if (index < 0 || index >= this.length){
      throw new Error('Index is out of bounds');
    }

    return memory.get(this.ptr + index);
  }

  push(value) {
    if (this.length >= this._capacity) {
      this._resize( (this.length + 1) * Array.SIZE_RATIO);
    }
    memory.set(this.ptr + this.length, value);
    this.length++;
  }

  pop() {
    //FORGOT THIS
    if (this.length == 0) {
      throw new Error('Index error');
    }

    const value = memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length){
      throw new Error('Index is out of bounds');
    }
    if (this.length >= this._capacity) {
      this._resize( (this.length + 1) * Array.SIZE_RATIO);
    }
    memory.copy(this.ptr + index + 1,this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);

    // WE FORGOT THIS!
    this.length++;
  }

  remove(index) {
    if (index < 0 || index >= this.length){
      throw new Error('Index is out of bounds');
    }
    memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index -1);
    this.length--;
  }

}

function main(){

  Array.SIZE_RATIO = 3;

  //create an instance of the array class
  let arr = new Array();
  //add an item to the array
  arr.push(3);
  arr.push(5);
  arr.push(7);
  arr.get(0);
  arr.pop();

  console.log(arr, arr.get(0), arr.pop());
}

main();