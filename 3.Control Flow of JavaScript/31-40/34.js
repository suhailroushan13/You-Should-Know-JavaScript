function triangle(n1, n2, n3)

{

    let result = (n1 == n2&& n2 == n3) ? "Its an Equilaterial Traiangle" : (n1 == n2 || n2 == n3) ? "Its an Isoceles Traingle" : (n1 != n2 || n2 != n3) ? "Its an Scalene Traiangle":"Invalid Number"
    console.log(result);

}

triangle(14, 10, 67)