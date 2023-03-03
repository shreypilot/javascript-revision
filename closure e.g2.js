function numberGenerator() {
    var num =1;
    function checkNumber(){
        var num = 5
        console.log(num);
    }
    num ++;
    return checkNumber;
}
var num = numberGenerator();
num();//2