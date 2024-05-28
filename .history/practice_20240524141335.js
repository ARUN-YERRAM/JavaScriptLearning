console.lo
var n = 5;

function a(){
    b();
    function b(){
        console.log(m);
    } 
    console.log(n);
}

var m = 10;
a();
