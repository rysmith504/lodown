'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/** 

 * identity: returns the same value thats passed in.

 * @param {any val}: takes in value

 * @returns {any val}: returns same value thats passed in.

 *

 *  

 */

function identity(value){

    return value;

}

module.exports.identity = identity;

/**typeof: takes a data and returns the type of data type in string form

 *

 * @param {Array, number, boolean, null, NaN, string, object, undefined, function} anything: any value

 * @returns {string} returns string labeling the data type of the parameter

 */

function typeOf(value){

    if (Array.isArray(value) === true) {
        return 'array';
    } if (value === null) {
        return 'null';
    } if (value === undefined) {
        return 'undefined';
    } if (typeof value === 'number') {
        return 'number';
    } if (typeof value === 'string') {
        return 'string';
    } if (typeof value === 'boolean') {
        return 'boolean';
    } if (typeof value === 'object') {
        return 'object';
    } if (typeof value === 'function') {
        return 'function';
    }    
}

module.exports.typeOf = typeOf;

/**

 *first: if theres no array it returns an empty array, if number is undefined

 * or NaN it returns the first indexed array, otherwise it returns the first indexed numbers of array
 
 * returns the input number parameter amount of indexes starting with the first.

 * @param {array}: The collection over which to iterate.

 * @param {number}: number of items to be returned

 * @returns {any data type}: returns the first element in an array

 */

function first(arr, num) {
        //check if val is array then return empty array
    if (!Array.isArray(arr) || num <= 0) {
        return [];
        //check if index is undefined then return first array index
    } if (num === undefined) {
        return arr[0];
        //check if number is larger than highest index and return whole array
    } if (num > arr.length){
        return arr;
        //create array literal to push as many indexes as input num into new array and return it
    } let arrNum = [];
    for (var i = 0; i < num; i++) {
        arrNum.push(arr[i]);
    } 
    return arrNum;
}

module.exports.first = first;

/**last: returns the last element in array. if array !array, returns an empty array

 * if number isnt given or is NaN it returns the last element in array otherwise returns the last item in array.

 *  * returns the input number parameter amount of indexes starting with the last.

 * @param {array}: collection

 * @param {number}: number of indexs to be returned

 * @param {function} action: tester function checks if array is array and if number is not null and a positive num or NaN

 * @returns {any data type}: returns last element of array

 */

function last(arr, num) {
    if (Array.isArray(arr) !== true || num <= 0) {
        return [];
    } if (num === undefined) {
        return arr[arr.length - 1];
    } if (num > arr.length){
        return arr;
    } let arrNum = [];
    for (var i = arr.length - 1; i >= arr.length - num; i--) {
        arrNum.push(arr[i]);
    } 
    return arrNum.reverse();
}

module.exports.last = last;

/**indexOf: returns the index of the array that is the 1st occurance in an array

 *

 * @param {array} collection: takes in an array in the  function parameter

 * @param {value}: the target that will be checked against the array by the function

 * .indexOf; checks if value is in array, loops thru array and returns index

 * of the first occurance of value input

 * @returns {index number}; returns -1 if value isnt in array otherwise returns the index of occurance of value

 */

function indexOf(arr, val) {
    for (var i = 0; i < arr.length; i++){
        if (arr[i] === val) {
        return i;
        }
    } 
    return -Math.abs(1);
}

module.exports.indexOf =indexOf;

 /**contains: Returns true if the value is present in the list. Uses indexOf internally, if list is an Array

   *  and a value from index to start your search at a given index.

   *

   * @param {array} collection; an array

   * @param {value}: target to be checked by the function

   * @param {function} action:  tester function looks through a list to see if the passed in value exists

   * @returns {boolean}: returns true if value exists in the collection

   */

  function contains(arr, val) {
      //ternary operator, returns true if condition is met, else false
    return arr.includes(val) ? true : false;
}

module.exports.contains = contains;

/**

 * each: Designed to loop over a collection, Array or Object, and applies the

 * action Function to each value in the collection.

 *

 * @param {Array or Object} collection: The collection over which to iterate.

 * @param {Function} action: The Function to be applied to each value in the

 * collection

 */

function each(coll, func) {
    //check if coll is array
    if(Array.isArray(coll) === true){
        //use for loop to iterate thru indexes
        for (var i = 0; i < coll.length; i++) {
            // apply function parameter to each index
            func(coll[i], i, coll);
        }
    // for in loop if collection is object
    } else if (typeof coll === 'object') {
        for (var key in coll) {
            func(coll[key], key, coll)
        }
    }
}

module.exports.each = each;

 

/**unique: Return a new array of all elements from the array with duplicates removed

 * uses indexOf in the function background

 * @param {array} collection: an array collection

 * .unique action: called on each element of input array and gets all elements while leaving copies

 * @returns{array}; returns the collection with duplicates removed

 */

function unique(arr){
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(_.indexOf(newArr, arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    } 
    return newArr;
}

module.exports.unique = unique;

 

/**filter: call function for each element in array passing the arguments:

*      the element, it's index, array

 * Looks through each value in the list, returning an array of all the values that pass a truth test

 * @param{array} collection: array is passed in arguments

 * @param{function} this is a tester function that is that is called on each element in the input array

 * @returns{array}return a new array of elements for which calling function returned true

 */

 

function filter(arr, func){
    const newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(func(arr[i], i, arr) === true){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

module.exports.filter = filter;

 

/**reject: call function for each element in array passing the arguments:

 *  the element, it's index, array. returns new array for the function call that returns false

 *  opposit of filter

 * @param{array}collection: takes an array as arguments

 * @param{function}: tester function calls function with element, index, function, loops thru

 * @returns{array}: returns array with elements that return false

 */

function reject(arr, func){
    const newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(func(arr[i], i, arr) === false){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

module.exports.reject = reject;

 

/**partition: Split list into two arrays: one whose elements all satisfy truthy

 * and one whose elements do not return truthy result when passed to the input function. Call <function> for each element in <array> passing it the arguments:

 * element, key, <array>

 * @param{array} collection: takes in array

 * @param{function}action: calls element, key and array, and function is called on each element

 * @returns{array} returns 2 arrays. one truthy and one falsey

 */

function partition(arr, func){
    const newTrue = [];
    const newFalse = [];
    let arrTF = [];
    for(let i = 0; i < arr.length; i++){
        if(func(arr[i], i, arr) === true){
            newTrue.push(arr[i]);
        }
    }
    for(let i = 0; i < arr.length; i++){
        if(func(arr[i], i, arr) === false){
            newFalse.push(arr[i]);
        }
    }
    arrTF = [newTrue, newFalse];
    return arrTF;
}

module.exports.partition = partition;

 

/**map: call <function> for each element in <collection> passing the arguments:

 * if array( collectiion[i](itteration index), index, and collection)

 * if object(collection[key](itteration key), key, collection)

 * @param{array/object} collection: takes an array or object

 * @param{function} action: a tester function save the return value of each <function> call in a new array

 * @returns{array}: returns new array

 *

 */

function map(coll, func){
    let newArr = [];
    if(Array.isArray(coll) === true){
        for (var i = 0; i < coll.length; i++) {
            newArr.push(func(coll[i], i, coll));
        }
    } else if (typeof coll === 'object') {
        for (var key in coll) {
            newArr.push(func(coll[key], key, coll))
        }
    }
    return newArr;
}

module.exports.map = map;

 

/**pluck: Return an array containing the value of <property> for every element in <array> of objects

 *  uses map function inside this function. extracting a list of property values.

 * @param{array of objects, property}collection: takes an array of objectss

 * @param{property} value: a target value

 * @returns{array}: returns a list of property values as an array

 */

 

function pluck(array, property) {

    var newArray = [];
    //use .map to check input array for input properties
    newArray = this.map(array, function(element){        //use map to check for arr containing the value for propertys

        return element[property];

    });
    //return new array containing input properties
    return newArray;                                      

}

module.exports.pluck = pluck;

 

/**every: Returns true if all of the values in the list pass the truthy test.

 * it stops looping the list if a false element is found.  checks if func is funf, array is array & object is object

 * @param{array or object} collection: takes in a collection

 * @param{function} action: a tester function checks what type of collection, called on each element in input array looking to see if every value returns truthy

 * @returns{boolean};  returns true if all itterations are true or false at the 1st faalse return

 */

function every(collection, action){
    if(action === undefined){
        for (let i = 0; i < collection.length; i++){
            if(collection[i] === false){
                return false;
            }
        }
        return true;
    } else if(Array.isArray(collection)){
     // loop through array
        for (let i = 0; i < collection.length; i++){
         // call function on each index
            if(!(action(collection[i], i, collection))){
                return false;
            }
        } 
        return true;
    } else if (typeof collection === 'object'){
     // loop through object
        for (var key in collection){
         // call function on each property
            if(!(action(collection[key], key, collection))){
                return false;
            }
        } 
        return true;
    }
}

 module.exports.every = every;

 

/**some: If the return value of calling <function> is true for at least one element, return true

 *  If the return value of calling <function> is true for at least one element, return true

 * if all are false return false

 * @param{collection}collection: takes collection as arguments

 * @param{function} action: a tester function checks if func is func and if array or object and loops thru

 * @returns{boolean}: returns true if any values are true and false if all are false

 */

 

function some(collection, action) {
    if (action === undefined){
        for(var i = 0; i < collection.length; i++) {
            if (collection[i] === false) {
                return false;
            }
        }
        return true;
    }
    if (Array.isArray(collection)){
        for(var i = 0; i < collection.length; i++) {
            if(action(collection[i], i, collection)){
                return true;
            }
        }    
        return false;
    } else if (typeof collection === 'object') {
        for (var key in collection) {
            if(action(collection[key], key, collection)){
                return true;
            }
        }
        return false;
    }
}
module.exports.some = some;

 

/**reduce: Call <function> for every element in <collection> passing the arguments:

 *         previous result, element, index. Use the return value of <function> as the "previous result"

 *         for the next iteration. on the 1st itteration, use seed as the previous result. If no <seed>

 *         was given, use the first element/value of <collection> as <seed> and continue to the next element

 *         After the last iteration, return the return value of the final <function> call

 * @param{array}collection: takes an array

 * @param{function}action: called on each element starting at seed (index num or string"") then adds in each iteration to previous

 * @param{seed}: tells the function where to start iterating from in the collection, value to initialize the accumulator value in your combine function

 * @returns{value}: return the value of last function call itteation

 */

function reduce(array, func, seed) {
    //check if seed exists/ not undefined
       if(seed !== undefined) {
          //if it does, then loop through array
          for(var i = 0; i < array.length; i++) {
              //reassign seed to be value of function call 
             //call the func function on seed, value, index
             seed = func(seed, array[i], i)
          }
          //return seed
          return seed;
       } else {
           //if no seed given, first value in array is the seed
           seed = array[0];
           //if it does, then loop through array
           for (var i = 1; i < array.length; i++) {
             //reassign seed to be value of function call 
             //call the func function on seed, value, index
             seed = func(seed, array[i], i);
           }
           return seed;
       }
   
   }
module.exports.reduce = reduce;

 

/**extend: takes multiple objects. able to add objects into one object and continue to add new ones in the

 * order they are given

 * @param{object, object1, object2...}takes in multiple objects

 * @returns{object}: returns object with other objects added in the order they are passed in

 */

 function extend(obj1, ...obj2) {

    var newObj = Object.assign(obj1, ...obj2)

    return newObj;
}
module.exports.extend = extend;