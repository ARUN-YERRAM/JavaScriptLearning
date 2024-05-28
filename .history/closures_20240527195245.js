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
    // var i = 1;
    for(let i = 0;i<=10;i++){
        setTimeout(function(){
            ++i;
            console.log(i);
        },i*1000);
    }
    console.log("Hello");
}
l();


// ...............................  Ep 14...........

// 00:55 - What is a Callback Function in JavaScript?
// 01:20 - Advantages of Callback
// 06:21 - Callback  - dev tools  Demo in browser
// 08:18 - Blocking Main Thread in JavaScript
// 10:18 - Creating an Event Listeners in JavaScript
// 13:30 - Closures along with Event Listeners
// 19:25 - Garbage Collection & remove Event Listeners



// ........What is Callback function.......

setTimeout(function (){
    
},5000);
function aa(){
    
}
aa(function ac(){

})



