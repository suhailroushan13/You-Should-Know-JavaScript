/*
Javascript setTimeout()
In this tutorial, you will learn about the JavaScript setTimeout() method with the help of examples.

The setTimeout() method executes a block of code after the specified time. The method executes the code only once.

The commonly used syntax of JavaScript setTimeout is:

setTimeout(function, milliseconds);
Its parameters are:

function - a function containing a block of code
milliseconds - the time after which the function is executed
The setTimeout() method returns an intervalID, which is a positive integer.

Example 1: Display a Text Once After 3 Second
// program to display a text using setTimeout method
function greet() {
    console.log('Hello world');
}

setTimeout(greet, 3000);
console.log('This message is shown first');
Run Code
Output

This message is shown first
Hello world
In the above program, the setTimeout() method calls the greet() function after 3000 milliseconds (3 second).

Hence, the program displays the text Hello world only once after 3 seconds.

Note: The setTimeout() method is useful when you want to execute a block of once after some time. For example, showing a message to a user after the specified time.


The setTimeout() method returns the interval id. For example,

// program to display a text using setTimeout method
function greet() {
    console.log('Hello world');
}

let intervalId = setTimeout(greet, 3000);
console.log('Id: ' + intervalId);   
Run Code
Output

Id: 3
Hello world
Example 2: Display Time Every 3 Second
// program to display time every 3 seconds
function showTime() {

    // return new date and time
    let dateTime= new Date();

    // returns the current local time
    let time = dateTime.toLocaleTimeString();

    console.log(time)

    // display the time after 3 seconds
     setTimeout(showTime, 3000);
}

// calling the function
showTime();
Run Code
Output

5:45:39 PM
5:45:43 PM
5:45:47 PM
5:45:50 PM
..................
The above program displays the time every 3 seconds.

The setTimeout() method calls the function only once after the time interval (here 3 seconds).

However, in the above program, since the function is calling itself, the program displays the time every 3 seconds.

This program runs indefinitely (until the memory runs out).

Note: If you need to execute a function multiple times, it's better to use the setInterval() method.

JavaScript clearTimeout()
As you have seen in the above example, the program executes a block of code after the specified time interval. If you want to stop this function call, you can use the clearTimeout() method.

The syntax of clearTimeout() method is:

clearTimeout(intervalID);
Here, the intervalID is the return value of the setTimeout() method.

Example 3: Use clearTimeout() Method
// program to stop the setTimeout() method

let count = 0;

// function creation
function increaseCount(){

    // increasing the count by 1
    count += 1;
    console.log(count)
}

let id = setTimeout(increaseCount, 3000);

// clearTimeout
clearTimeout(id); 
console.log('setTimeout is stopped.');
Run Code
Output

setTimeout is stopped.
In the above program, the setTimeout() method is used to increase the value of count after 3 seconds. However, the clearTimeout() method stops the function call of the setTimeout() method. Hence, the count value is not increased.

Note: You generally use the clearTimeout() method when you need to cancel the setTimeout() method call before it happens.

You can also pass additional arguments to the setTimeout() method. The syntax is:

setTimeout(function, milliseconds, parameter1, ....paramenterN);
When you pass additional parameters to the setTimeout() method, these parameters (parameter1, parameter2, etc.) will be passed to the specified function.

For example,

// program to display a name
function greet(name, lastName) {
    console.log('Hello' + ' ' + name + ' ' + lastName);
}

// passing argument to setTimeout
setTimeout(greet, 1000, 'John', 'Doe');
Run Code
Output

Hello John Doe
In the above program, two parameters John and Doe are passed to the setTimeout() method. These two parameters are the arguments that will be passed to the function (here, greet() function) that is defined inside the setTimeout() method.
 
 
 
 
 
 
*/