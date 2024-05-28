console.log(n);
var n = 5;
let k = 10;

function a(){
    b();
    function b(){
        console.log(m);
    } 
    console.log(n);
}

var m = 10;
a();
