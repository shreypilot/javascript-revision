if(true) console.log("shreya")

if(true){
    //compound statement
    var a = 10;
    console.log(a);
}//if we need a multiple statement we need to combine it in block

{
    var a = 10;
    const b = 5;
    let c = 100;
    console.log(a);
    console.log(b);
    console.log(c);

}//you cannot access b and c outside scope..this is called block scope

console.log(a);
console.log(b);
console.log(c);