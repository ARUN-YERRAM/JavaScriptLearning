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
        }return m;
    } o;
}
var z = o();
console.log(z());

z();