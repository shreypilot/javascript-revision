console.log(b);//undefined because of hoisting
//console.log(a);//ReferenceError: Cannot access 'a' before initialization
let a;
var b = 100;
//let a = 200;//syntax error:identifier a has already been declared
//var a = 100;//syntax error:identifier a has already been declared
a = 100;
console.log(a);

// const c = 1000;
// c = 50;
// console.log(c)






