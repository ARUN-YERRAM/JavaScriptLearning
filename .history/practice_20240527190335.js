// console.log(a);

// let a = 10;
// console.log(a);
// var b = 2;


// let and const are hoisted   
// temporal dead zone --- The time between memory allocated and value initialized for let and const
// only accessed after initialization of value
  

function outer(){
    // var a = 123;

    function inner(){
        console.log(a);
    }  
    let a = 123;
    return inner();
}
outer();
// console.log(a);
ans();