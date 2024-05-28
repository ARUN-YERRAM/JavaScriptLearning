let b;
function x(){
    var b = 10;
    console.log(b);
}

x();

console.log(b);

var k= 20;
function a(){
    var k = 10;
    function m(){
        console.log(k);
    } m();
}
a();
console.log(k);