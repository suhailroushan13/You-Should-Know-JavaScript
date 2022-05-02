function box(num1, op, num2) {
    let result = (op == '+')?`The Added Value is ${num1+num2}`:(op=='-')?`The Subtratced Value is ${num1-num2}`:(op=='*')?`The Multiplied  Value is ${num1*num2}`:(op == '/')?`The Divided Value is ${num1/num2}`:"Null"
console.log(result);

}
box(10,"-",20);