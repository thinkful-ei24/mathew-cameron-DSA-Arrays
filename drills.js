'use strict';

const memory = require('./memory');
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
    this.ptr = memory.allocate(this.length);
    this.length = 0;
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
    this._capacity = size;
    memory.free(oldPtr);
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

  }

  remove(index) {

  }

}
Array.SIZE_RATIO = 3;