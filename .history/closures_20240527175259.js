let b;
function x(){
    var b = 10;
    console.log(b);
}

x();

console.log(b);
// lexical scope....... scope chain...........
// ...........closure......function along with lexical scope is closure....   
const k = 20;

function o(){
    function a(){
        const k = 10;
        function m(){
            console.log(k);
        }return m();
    } return a();
}
var z = o();
console.log(z);

// z();
// Uses of Closures:
// Module design pattern carrying functions like one's memoirs maintaining state in Asynch World, set timeouts, iterators