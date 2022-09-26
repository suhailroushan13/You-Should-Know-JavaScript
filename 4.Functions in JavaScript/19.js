function fac(num){
    return num = 1 || num == 0 ? 1 : num * fac(num-1)
}
let n = 10;
console.log(fac(n))