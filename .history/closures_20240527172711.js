let b;
function x(){
    var b = 10;
    console.log(b);
}

x();

console.log(b);
// lexical scope....... scope chain...........
const k = 20;
function a(){
    const k = 10;
    function m(){
        console.log(k);
    } m();
}
a();
console.log(k);