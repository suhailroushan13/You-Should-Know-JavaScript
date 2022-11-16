// let and const

/*
JavaScript let
JavaScript let is used to declare variables. Previously, variables were declared using the var keyword.

To learn more about the difference between let and var, visit JavaScript let vs var.

The variables declared using let are block-scoped. This means they are only accessible within a particular block. For example,

// variable declared using let
let name = 'Sara';
{
    // can be accessed only inside
    let name = 'Peter';

    console.log(name); // Peter
}
console.log(name); // Sara 
JavaScript const
The const statement is used to declare constants in JavaScript. For example,

// name declared with const cannot be changed
const name = 'Sara';
Once declared, you cannot change the value of a const variable.
 
*/
