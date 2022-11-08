/*
avascript Object.seal()
The JavaScript Object.seal() method seals the given object.

The seal() method prevents new properties from being added to the object and marks all the existing properties as non-configurable.

The syntax of the seal() method is:

Object.seal(obj)
The seal() method, being a static method, is called using the Object class name.

seal() Parameters
The seal() method takes in:

obj - The object that is to be sealed.
Return value from seal()
Returns the object being sealed.
Example: Using seal()
let obj = {
  foo: "bar",
  func: function () {},
};

// before sealing, properties can be added, modified, or removed
obj.foo = "JavaScript";
obj.value = 5;
delete obj.func;

// sealing the object
o = Object.seal(obj);

// can still change property values
obj.foo = "bar1";

// no other change
// fails silently
obj.foo1 = "bar";
delete obj.foo;

console.log(obj); // { foo: 'bar1', value: 5 }

// cannot convert data property to accessors or vice versa
Object.defineProperty(obj, "foo", {
  get: function () {
    return "g";
  },

}):
 
 
 
 
 
 
*/
