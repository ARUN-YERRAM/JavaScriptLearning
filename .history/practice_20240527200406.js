// console.log(a);

// let a = 10;
// console.log(a);
// var b = 2;


// let and const are hoisted   
// temporal dead zone --- The time between memory allocated and value initialized for let and const
// only accessed after initialization of value
  
function outest(str){
    function outer(){
        // var a = 123;

        function inner(){
            console.log(a , str);
        }  
        let a = 123;
        return inner;
    } return outer;
}
var str = "sdffg";
var ans = outest(str);
console.log(ans);
ans()();


// .............encapsulation() ..........
function Counter(){
    var count = 0;
    this.increment = function (){
        count++;
        console.log(count);
    }
    this.decrement = function (){
        count--;
        console.log(count);
    }
}
var c = new Counter();
c.increment();
c.increment();
c.decrement();
c.decrement();
c.increment();

// var counts = counter();
// var countss = counter();
// counts();
// countss();



function abc(){
    var ab = 123,z = 635;
    return function cba(){
        console.log(ab,z);
    }
}
var y = abc();
y();
// console.log(ab);

//  Ep -13   .........
// What is a Function Statement in JS
// 02:42 - What is a Function Expression
// 04:04 - Difference between Function Statment and Function Expression
// 06:00 - What is a  Function Declaration
// 06:18 - What is an Anonymous Function in JavaScript
// 06:29 - Syntax Error & Anonymous functions
// 07:32 - Use/ Advantages of Anonymous Functions
// 09:28 - What are Named Function Expressions in JS
// 10:10 - Corner Case Gotcha using Named Function Expression
// 12:03 - What is the difference between Parameters & Arguments?
// 16:13 - First-Class Functions in JavaScript
// 17:27 - Functions are First-Class Citizens
// 19:58 - Info about Arrow Functions
// 21:46 - Teaser of the next video

// hoisting ------------- memory creation phase........

a();
// b();
function a(){
    console.log("Function statement // function declaration.")
}
a();
var b = function(){
    console.log("Function expression");
}
b();



// .............Anonymous function..........  

/* The comment `// Anonymous function..........` is simply providing a heading or label for the
upcoming code section that likely discusses or demonstrates anonymous functions in JavaScript. It is
not executable code but serves as a marker for the topic being discussed in the code comments. */
var c = () => {
    console.log("Anonymous function");
}

// Named Function Expressions......

var b = function xyz(){
    console.log("Named Function expression");
}
b();

// ..........parameters(duplicates) and arguments(original).....

// parameters are the names of the variables that are passed into the function




// .........First class Functions.......

/* The comment `// First class Functions.......` is likely indicating that the upcoming code or
discussion will be related to first-class functions in JavaScript. First-class functions refer to
the ability of functions to be treated like any other variable in the language, allowing them to be
passed as arguments to other functions, returned from functions, assigned to variables, and stored
in data structures. This concept is fundamental in functional programming paradigms and is a key
feature of JavaScript as a language. */

var b = function(param1){
    return function abx(){

    }
}

console.log(b());

//  ..............Function are first class Citizens/.......

/* The comment `// Function are first class Citizens/.......` is likely indicating that the upcoming
code or discussion will focus on the concept that functions are treated as first-class citizens in
JavaScript. This means that functions can be used and manipulated in the same way as any other data
type in the language. They can be assigned to variables, passed as arguments to other functions,
returned from functions, and stored in data structures. This flexibility with functions is a key
feature of JavaScript and is fundamental to functional programming paradigms. */


// ......arrow function......

// 1. arrow function is a function that is defined using the arrow syntax `=>` instead

// 2. it is a shorter way of writing a function

// 3. it is a concise way of writing a function






// ........What is Callback function.......

setTimeout(function (){
    console.log("Hello");
},5000);
function aa(ac){
    console.log("aa");
    ac();
}
aa(function ac(){
    console.log("ac");
})

function ContentVisibilityAutoStateChangeEvent(){
    
}
document.getElementById("clickMe").addEventListener("click",function xz(){
    console.log("Button Clicked",count++);
});




