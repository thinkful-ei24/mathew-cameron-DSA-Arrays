'use strict';

const Array = require('./array');

function main(){

  Array.SIZE_RATIO = 3;

  //create an instance of the array class
  let arr = new Array();
  //add an item to the array
  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);

  arr.pop();
  arr.pop();
  arr.pop();

  console.log(arr);
  console.log(arr.get(0));
}

// main();

// URLify a String
function urlIfy(str) {
  const strArray = str.split('');
  let newStrArray = [];
  //foreach letter
  //if letter = ' ', replace with %20

  strArray.forEach( char => {
    if ( char === ' ') {
      newStrArray.push('%20');
    } else {
      newStrArray.push(char);
    }
  });

  return newStrArray.join('');
}

console.log(urlIfy('this is A test '));
