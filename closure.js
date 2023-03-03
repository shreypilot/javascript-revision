var a =100;
function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    a= 500
    y()
}
x();