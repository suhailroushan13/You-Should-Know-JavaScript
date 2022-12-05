/*
JavaScript Iterables and Iterators
JavaScript provides a protocol to iterate over data structures. This protocol defines how these data structures are iterated over using the for...of loop.

The concept of the protocol can be split into:

iterable
iterator
The iterable protocol mentions that an iterable should have the Symbol.iterator key.

JavaScript Iterables

The data structures that have the Symbol.iterator() method are called iterables. For example, Arrays, Strings, Sets, etc.

JavaScript Iterators

An iterator is an object that is returned by the Symbol.iterator() method.

The iterator protocol provides the next() method to access each element of the iterable (data structure) one at a time.

Let's look at an example of iterables having Symbol.Iterator()

const arr = [1, 2 ,3];

// calling the Symbol.iterator() method
const arrIterator = arr[Symbol.iterator]();

// gives Array Iterator
console.log(arrIterator);

const str = 'hello';

// calling the Symbol.iterator() method
const strIterator = str[Symbol.iterator]();

// gives String Iterator
console.log(strIterator);
Run Code
Output

Array Iterator {}
StringIterator {}
Here, calling the Symbol.iterator() method of both the array and string returns their respective iterators.

Iterate Through Iterables
You can use the for...of loop to iterate through these iterable objects. You can iterate through the Symbol.iterator() method like this:

const number = [ 1, 2, 3];

for (let n of  number[Symbol.iterator]()) {
    console.log(n);
}
Run Code
Output

1
2
3
Or you can simply iterate through the array like this:

const number = [ 1, 2, 3];

for (let n of  number) {
    console.log(n);
}
Run Code
Here, the iterator allows the for...of loop to iterate over an array and return each value.

JavaScript next() Method
The iterator object has a next() method that returns the next item in the sequence.

The next() method contains two properties: value and done.

value
The value property can be of any data type and represents the current value in the sequence.
done
The done property is a boolean value that indicates whether the iteration is complete or not. If the iteration is incomplete, the done property is set to false, else it is set to true.
Let's look at an example of array iterables:

const arr = ['h', 'e', 'l', 'l', 'o'];

let arrIterator = arr[Symbol.iterator]();

console.log(arrIterator.next()); // {value: "h", done: false}
console.log(arrIterator.next()); // {value: "e", done: false}
console.log(arrIterator.next()); // {value: "l", done: false}
console.log(arrIterator.next()); // {value: "l", done: false}
console.log(arrIterator.next()); // {value: "o", done: false}
console.log(arrIterator.next()); // {value: undefined, done: true}
Run Code
You can call next() repeatedly to iterate over an arrIterator object.

The next() method returns an object with two properties: value and done.
When the next() method reaches the end of the sequence, then the done property is set to false.
Let's look at how for...of loop executes the above program. For example,

const arr = ['h', 'e', 'l', 'l', 'o'];

for (let i of arr) {
    console.log(i);
}
Run Code
Output

h
e
l
l
o
The for...of loop does exactly the same as the program above.

The for...of loop keeps calling the next() method on the iterator. Once it reaches done:true, the for...of loop terminates.

User Defined Iterator
You can also create your own iterator and call next() to access the next element. For example,

function displayElements(arr) {

    // to update the iteration
    let n = 0;

    return {

        // implementing the next() function
        next() {

            if(n < arr.length) {
                return {
                    value: arr[n++],
                    done: false
                }
            }

            return {
                value: undefined,
                done: true
            }
        }
    }
}

const arr = ['h', 'e', 'l', 'l', 'o'];

const arrIterator = displayElements(arr);

console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
Run Code
Output

{value: "h", done: false}
{value: "e", done: false}
{value: "l", done: false}
{value: "l", done: false}
{value: "o", done: false}
{value: undefined, done: true}
In the above program, we have created our own iterator. The displayElements() function returns value and done property.

Each time the next() method is called, the function gets executed once and displays the value of an array.
Finally, when all the elements of an array are exhausted, the done property is set to true, with value as undefined.



*/