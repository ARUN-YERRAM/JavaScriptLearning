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
function a(){
    const k = 10;
     m();
}
a();
console.log(k);