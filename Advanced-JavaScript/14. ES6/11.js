/*
avaScript Set and WeakSet
In this tutorial, you will learn about JavaScript Sets and WeakSets with the help of examples.

The JavaScript ES6 has introduced two new data structures, i.e Set and WeakSet.

Set is similar to an array that allows us to store multiple items like numbers, strings, objects, etc. However, unlike an array, a set cannot contain duplicate values.

Create JavaScript Set
To create a Set, you need to use the new Set() constructor. For example,

// create Set
const set1 = new Set(); // an empty set
console.log(set1); // Set {}

// Set with multiple types of value
const set2 = new Set([1, 'hello', {count : true}]);
console.log(set2); // Set {1, "hello", {count: true}}
Run Code
When duplicate values are passed to a Set object, the duplicate values are excluded.

// Set with duplicate values
const set3 = new Set([1, 1, 2, 2]);
console.log(set3); // Set {1, 2}
Run Code
Access Set Elements
You can access Set elements using the values() method and check if there is an element inside Set using has() method. For example,

const set1 = new Set([1, 2, 3]);

// access the elements of a Set
console.log(set1.values()); // Set Iterator [1, 2, 3]
Run Code
You can use the has() method to check if the element is in a Set. For example,

const set1 = new Set([1, 2, 3]);

// check if an element is in Set
console.log(set1.has(1));
Run Code
Adding New Elements
You can add elements to a Set using the add() method. For example,

const set = new Set([1, 2]);
console.log(set.values());

// adding new elements
set.add(3);
console.log(set.values());

// adding duplicate elements
// does not add to Set
set.add(1);
console.log(set.values());
Run Code
Output

Set Iterator [1, 2]
Set Iterator [1, 2, 3]
Set Iterator [1, 2, 3]
Removing Elements
You can use the clear() and the delete() method to remove elements from a Set.

The delete() method removes a specific element from a Set. For example,

const set = new Set([1, 2, 3]);
console.log(set.values()); // Set Iterator [1, 2, 3]

// removing a particular element
set.delete(2);
console.log(set.values()); // Set Iterator [1, 3]
Run Code
The clear() method removes all elements from a Set. For example,

const set = new Set([1, 2, 3]);
console.log(set.values()); // Set Iterator [1, 2, 3]

// remove all elements of Set
set.clear();
console.log(set.values()); // Set Iterator []
Run Code
Iterate Sets
You can iterate through the Set elements using the for...of loop or forEach() method. The elements are accessed in the insertion order. For example,

const set = new Set([1, 2, 3]);

// looping through Set
for (let i of set) {
    console.log(i);
}
Run Code
Output

1
2
3
JavaScript WeakSet
The WeakSet is similar to a Set. However, WeakSet can only contain objects whereas a Set can contain any data types such as strings, numbers, objects, etc. For example,

const weakSet = new WeakSet();
console.log(weakSet); // WeakSet {}

let obj = {
    message: 'Hi',
    sendMessage: true
}

// adding object (element) to WeakSet
weakSet.add(obj);

console.log(weakSet); // WeakSet {{message: "Hi", sendMessage: true}}
Run Code
When you try to add other data types besides objects, WeakSet throws an error. For example,

// trying to add string to WeakSet
weakSet.add('hello');

// throws error
// TypeError: Attempted to add a non-object key to a WeakSet
console.log(weakSet);
Run Code
WeakSet Methods
WeakSets have methods add(), delete(), and has(). For example,

const weakSet = new WeakSet();
console.log(weakSet); // WeakSet {}

const obj = {a:1};

// add to a weakSet
weakSet.add(obj);
console.log(weakSet); // WeakSet {{a: 1}}

// check if an element is in Set
console.log(weakSet.has(obj)); // true

// delete elements
weakSet.delete(obj);
console.log(weakSet); // WeakSet {}
Run Code
WeakSets Are Not iterable
Unlike Sets, WeakSets are not iterable. For example,

const weakSet = new WeakSet({a:1});

// looping through WeakSet
for (let i of weakSet) {

    // TypeError
    console.log(i);
}
Run Code
Mathematical Set Operations
In JavaScript, Set does not provide built-in methods for performing mathematical operations such as union, intersection, difference, etc. However, we can create programs to perform those operations.

Example: Set Union Operation
// perform union operation
// contain elements of both sets
function union(a, b) {
    let unionSet = new Set(a);
    for (let i of b) {
        unionSet.add(i);
    }
    return unionSet
}

// two sets of fruits
let setA = new Set(['apple', 'mango', 'orange']);
let setB = new Set(['grapes', 'apple', 'banana']);

let result = union(setA, setB);

console.log(result);
Run Code
Output

Set {"apple", "mango", "orange", "grapes", "banana"}
Example: Set Intersection Operation
// perform intersection operation
// elements of set a that are also in set b
function intersection(setA, setB) {
    let intersectionSet = new Set();

    for (let i of setB) {
        if (setA.has(i)) {
            intersectionSet.add(i);
        }
    }
    return intersectionSet;
}

// two sets of fruits
let setA = new Set(['apple', 'mango', 'orange']);
let setB = new Set(['grapes', 'apple', 'banana']);

let result = intersection(setA, setB);

console.log(result);
Run Code
Output

Set {"apple"}
Example: Set Difference Operation
// perform difference operation
// elements of set a that are not in set b
function difference(setA, setB) {
    let differenceSet = new Set(setA)
    for (let i of setB) {
        differenceSet.delete(i)
    }
    return differenceSet
}

// two sets of fruits
let setA = new Set(['apple', 'mango', 'orange']);
let setB = new Set(['grapes', 'apple', 'banana']);

let result = difference(setA, setB);

console.log(result);
Run Code
Output

Set {"mango", "orange"}
Example: Set Subset Operation
// perform subset operation
// true if all elements of set b is in set a
function subset(setA, setB) {
    for (let i of setB) {
        if (!setA.has(i)) {
            return false
        }
    }
    return true
}

// two sets of fruits
let setA = new Set(['apple', 'mango', 'orange']);
let setB = new Set(['apple', 'orange']);

let result = subset(setA, setB);

console.log(result);
Run Code
Output

true
 
 
 
 
 
 
*/