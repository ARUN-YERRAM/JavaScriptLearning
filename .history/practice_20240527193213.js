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



