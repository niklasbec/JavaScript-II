// Create a higher order function and invoke the callback function to test your work.
// You have been provided an example of a problem and a solution to see how this works with 
// our items array.  Study both the problem and the solution to figure out the rest of the problems.
const cb = (first) => {
  console.log(first)
}


const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum', 'Notebook', 'yo-yo', 'Gum'];

function testWork1(a, b, cb) {
  return cb(a, b)
}

function testWork2(a, cb) {
  return cb(a)
}

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/


function getLength(arr, cb) {
  return arr.length
}

arrayNew = ['dsa','wqe','gsdf']

console.log(testWork2(items, getLength));

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return arr[(arr.length - 1)]
}

console.log(testWork2(items, last))

function sumNums(x, y, cb) {
  return x + y
}

console.log(testWork1(12, 18, sumNums))

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return x * y
}

console.log(testWork1(12, 18, multiplyNums))

function contains(list, item, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return list.includes(item)
}

console.log(testWork1(items, 'Pencil', contains))

/* STRETCH PROBLEM */



 function removeDuplicates(array, cb) {
   // removeDuplicates removes all duplicate values from the given array.
   // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
   for(i = 0; i < array.length; i++) {
     if (!(withoutDuplicates.includes(array[i])))    {
       return withoutDuplicates.push(array[i])
    }
   }
 }

 console.log(testWork2(items, removeDuplicates))

