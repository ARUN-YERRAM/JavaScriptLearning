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
console.log(k);

// Uses of Closures:
// Module design pattern, currying, functions like once, memoize, maintaining state in Async World, set timeouts, iterators.....



// ..........setTimeout() + closures....... Important Question.....
function l(){
    let i = 1;
    for(let i = 1;i<=10;i++){
        setTimeout(function(){
            // ++i;
            console.log(i);
        },i*1000);
    }
    console.log("Hello");
}
l();




