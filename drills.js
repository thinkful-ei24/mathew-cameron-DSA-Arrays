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

// Complexity: O(n)
// console.log(urlIfy('this is A test '));

// Filtering an Array
function filter(arr){
  const newArr = [];
  arr.forEach(num => {
    if(num >= 5){
      newArr.push(num);
    }
  })
  return newArr;
};

// Complexity: O(n)
// console.log(filter([1, 5, 7, 3, 9]));


////////////////////////////////////////////////////////////////
//Max sum in the array
// largestNum = 0;
// loop starting with 4 
//  loop again, starting with 6
//  if 4 + 6 > largestNum, largestNum = 10
// return largestNum
// 4 -> 4, 6; 4, 6, -3; 
// 6 -> 6, -3; 6, -3, 5, etc;

function maxSum(arr) {
  let largestNum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];

    if (sum >= largestNum ) {
      largestNum = sum;
    }

    for (let j = i+1; j < arr.length; j++) {
      sum += arr[j];

      if (sum >= largestNum ) {
        largestNum = sum;
      }
    }
  }

  return largestNum;
}

// Complexity: O(n^2)
// console.log(maxSum([-53,-4,-6,-3,-5,-2,-1, 722]));

