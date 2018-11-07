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


//////////////////////////////////
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


//////////////////////////////////
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


//////////////////////////////////
// Merge Arrays
// i, j as indices
// while loop i<arr1.length, j<arr2.length
// if(arr1[i] <= arr2[j]) => add it i++
// otherwise add arr2[j] j++

function merge(arr1, arr2){
  let i=0;
  let j=0;
  let newArr = [];
  while (i < arr1.length && j < arr2.length){
    if(arr1[i] <= arr2[j]){
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }
  if(i< arr1.length){
    for (let k=i; k<arr1.length; k++){
      newArr.push(arr1[k]);
    }
  } else if(j<arr2.length){
    for (let k=i; k<arr1.length; k++){
      newArr.push(arr2[k]);
    }
  }
  return newArr;
};

// O(n) 
// console.log(merge([11, 12, 13, 14], [2, 3, 5, 8, 9, 10]));



//////////////////////////////////
// Remove Characters
//  loop through string by character
//    loop through remove array characters
//      if Strchar === RemoveArrayChar
//        break;
//  return newString
//

function removeCharacters(string, removalString) {
  let newString = '';

  for (let i = 0; i < string.length; i++) {
    let found = false;

    for (let j = 0; j < removalString.length; j++) {
      if (string[i] === removalString[j]) {
        found = true;
        break;
      } 
    }

    if (!found) {
      newString += string[i];
    }
  }

  return newString;
}

// O(n^2)

// console.log(removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));


//////////////////////////////////
// Product

function product(arr){
  const zeroFind = arr.indexOf(0);
  if(zeroFind !== -1){
    let prod = 1;
    for(let i=0; i<arr.length; i++){
      if(i !== zeroFind){
        prod *= arr[i];
      }
    }
    return arr.map((num, index) => {
      if(index === zeroFind){
        return prod;
      }else{
        return 0;
      }
    })
  }
  let prod = 1;
  for (let i=0; i<arr.length; i++){
    prod *= arr[i];
  }
  const newArr = arr.map(num => prod/num);
  return newArr;
};

// O(n)
// console.log(product([1, 0, 0, 4]));


//////////////////////////////////
// 2D Array
// for i from 0 to array.length
//  for j from 0 to array[i].length
//    if array[i][j] === 0
//      rows.push(i)
//      cols.push(j)
// for i from 0 to array.length
//  for j from 0 to array[i].length
//    if i is in rows || j is in cols
//      array[i][j] = 0;

function twoDArray(array) {
  let rows = [];
  let columns = [];

  for (let i=0; i < array.length; i++ ) {
    for (let j=0; j < array[i].length; j++) {
      if (array[i][j] === 0) {
        rows.push(i);
        columns.push(j);
      }
    }
  }

  for (let i=0; i < array.length; i++ ) {
    for (let j=0; j < array[i].length; j++) {
      if (rows.includes(i) || columns.includes(j)) {
        array[i][j] = 0;
      }
    }
  }

  return array;
}

// O(n^2)
// console.log(twoDArray([[1,0,1,1,0],
//   [0,1,1,1,0],
//   [1,1,1,1,1],
//   [1,0,1,1,1],
//   [1,1,1,1,1]]));


// String Rotation
// recursion base case: original word
// pop off last letter and append popped version to front

function stringRotation(str1, str2, mutated = ''){
  let char;
  if(str1.length !== str2.length){
    return false;
  }
  if(str1 === str2){
    return true;
  }
  if(str1 === mutated){
    return false;
  }
  if (mutated === ''){
    mutated = str1;
  }
  char = mutated[mutated.length - 1];
  mutated = char + mutated.slice(0, mutated.length-1);
  if(mutated === str2){
    return true;
  }
  return stringRotation(str1, str2, mutated);


};

// O(n)
// console.log(stringRotation('amazon', 'azonma'));
  