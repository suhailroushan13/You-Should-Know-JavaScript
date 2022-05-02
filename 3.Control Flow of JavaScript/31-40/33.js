function largest(num1, num2, num3)
{

    let result = (num1 > num2 && num1 > num3) ? "Num1 is Largest" : (num2 > num1 && num2 > num3) ? "Num2 is Largest" : (num3 > num1 && num3 > num2) ? "Num3 is Largest" : "Not a Valid Number";
    console.log(result);
    
}
largest(90,20,30);