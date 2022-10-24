/*
JavaScript String lastIndexOf()
In this tutorial, we will learn about the JavasScript String lastindexof() method with the help of examples.

The lastIndexOf() method returns the last index of occurence of a given substring in the string.

Example
// defining a string
var str = "Programming";

var substr = "g";

// find last occurrence of "g" in str
var result = str.lastIndexOf(substr);

console.log(result);

// Output: 10
Run Code
lastIndexOf() Syntax
The syntax of the lastIndexOf() method is:

str.lastIndexOf(searchValue, fromIndex)
Here, str is a string.

lastIndexOf() Parameters
The lastIndexOf() method takes in:

substr- The value to search for in the given string.
fromIndex (optional) - The index to start searching the string backwards. By default it is +Infinity.
Notes:

If fromIndex >= string.length, the whole string is searched.
If fromIndex < 0, it is considered to be the same as 0.
lastIndexOf() Return Value
The lastIndexOf() method returns:

the last index of the value in the string if it is present at least once.
fromIndex if no string is provided explicitly.
Note: The method returns -1 if substring is not found in the given string.

Example 1: Using lastIndexOf() method
// defining a string
var str = "Programming";

var substr = "m";

// find last occurrence of "m" in str
var result = str.lastIndexOf(substr);

console.log(result);
Run Code
Output

7
In the above example, we have defined a string named str. The substr variable contains "m" which is a substring of the given string.

The lastIndexOf() method locates the index of the last occurrence of substr. As the indexing of a string starts from 0, str.lastIndexOf(substr) returns the value 7.

Example 2: lastIndexOf() With Two Parameters
// defining a string
var str = "Programming";

// defining a substring 'substr' that holds character 'g'
var substr = "g";

var fromIndex = 6;

// passing second parameter 'fromIndex' in lastIndexOf()
var result = str.lastIndexOf(substr, fromIndex);

console.log(result);
Run Code
Output

3
In the above example, we have passed fromIndex as a second parameter. So, the lastIndexOf() method searches the substring backward from fromIndex.

str.lastIndexOf(substr,fromIndex) searches "g" backward from fromIndex and locates the last occurrence of "g" which is at index 3.

Example 3: When Substring Is Not Found
var str = "I love JavaScript";

// passing a substring that is not in a given string
var result = str.lastIndexOf("Python");

console.log(result);
Run Code
Output

-1
Here, we have passed "Python" as a substr. Since "Python" is not found in the "I love JavaScript" string, the method returns -1.

Example 4: lastIndexOf() For Case-Sensitive Search
The lastIndexOf() method is case sensitive. For example:

var str = "I love JavaScript";

//  lastIndexOf() with "JavaScript" as  substr
var result1 = str.lastIndexOf("JavaScript");

console.log(result1);

//  lastIndexOf() with "javaScript" as  substr
var result2 = str.lastIndexOf("javaScript");

console.log(result2);
Run Code
Output

7
-1
Here, the lastIndexOf() method is case sensitive, so it treats "JavaScript" and "javaScript" as two different substr.

The method returns index value 7 for "JavaScript" and -1 for "javaScript".
 
 
 
 
 
 
*/