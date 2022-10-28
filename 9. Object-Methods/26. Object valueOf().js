/*
Javascript Object valueOf()
The JavaScript Object valueOf() method returns the primitive value of the specified object.

The syntax of the valueOf() method is:

obj.valueOf()
Here, obj is an object.

valueOf() Parameters
The valueOf() method does not take any parameters.

Return value from valueOf()
Returns the primitive value of the specified object.
Notes:

For objects of type Object, there is no primitive value, so valueOf() method simply returns the object itself.
For objects of type Number, Boolean, or String, however, valueOf() returns the primitive value represented by the corresponding object.
Example 1: Custom valueOf()
function customNum(n, fact) {
  this.number = n;
  this.fact = fact;
}

customNum.prototype.valueOf = function () {
  return this.number;
};

var num1 = new customNum(2, "First Prime Number");

console.log(num1 + 3); // 5
 
 
 
 
 
 
*/