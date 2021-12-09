/*===========================================JavaScript Basic======================================

"Everything in javascript happens inside an 'Execution Context'
like big box where complte javascript code executed "

there are two components of executation context
----------------------------------------------------------------
    Memory_Component           |         Code_Components
    (or vairable envirnment)   |         (Thread of Execution) 
    -----------------------------------------------------------
    -key:value                 |        -[place where execute
    -a=10                      |         one line at a time.].
    -fn:{...}                  |     





    
"JavaScript is a Synchronous single-threaded language."
(execute one command at a time and specific order. go to next line
    when one is executed.).


*/




/*
------------------------------- What happens when run javascript code --------------.

When run js program execution context is created. 

Global execution context.[GEC].------------
---------------------------|                                                         
var n =2 ;                 |              create two components       |               
function square (num){     |            Memory                        |   Code_execution phase.   
    var ans = num*num;     |            n:undefined                   |
    return ans;            |            square:{...//copySquareFunc.} |               
}                                      [this is point to exact function code.] .                                                                                                                         

var square2 = square(n);  //function invoked                                          
var square4 = square(4);                                                         

multiple execution created and push into call stack. it's all manage by javascirpt Engine.
(call stack maintains the order of execution of exectuion contexts. )
                Call stacks Name.
                    -Execution Context Stack
                    -Program Stack
                    -Control Stack
                    -Runtime Stack
                    -Machine Stack
----------------------------



*/
// ------------------------------------------------------------------------------------------------------

/*
============================================== Hoisting in JavaScript ==============================

Hoisting is the default behavior of moving all the declarations[not initalize] at the top of the scope before code execution. 
Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved 
to the top of their scope regardless of whether their scope is global or local

{
    Hoisting is the default behavior of javascript moving all the varibale and function declaration
    at the top of the scope before code execution.........
}
*/


//-----------------------------------------------------------------------------------------------------
// let res = 13;
// console.log(res);
// console.log(x);
// var x =14;
// console.log(x);

/*

*/
// ------------------------------ some code ------------------------

// var x = 7;

// function getNmae(){
//     console.log("Hay Namaste Javascript!");
// }

// getNmae();
// console.log(x);

// ------------------- And-------------------
//here are the declaration of variable and function moving top before execution.
// getName();// it called
// console.log(x);//print undefined. if remove x it show x not define error. 
// // [This is knows as hosting in javascript.]
// console.log(getName);//no error show complte function.
// var x = 7;
// function getName(){
//     console.log("HelloWorld");
//     console.log(x);
// }

// console.log(getName);//print complete function










// ===================================== Window & this ==================================================
/*
window is global object[at the global label 'this' point to the window.] which is created along with global execution context.
=>javascript is just not run in browser it run in survers and other devices also. for run it need javascript engine.
=>js engine  responsibility to create global object.
"this === window //true. at  global label."

=>Each global variable and function is attached with gloabl object of window.
let x = 12;
function b(){
    console.log("function 'b'");
}

console.log(window.a) is same as console.log(a)//if we don't mention window it treat as gloabl variable or function.
sortest program in javascript is empty js file itself[create a global execution context.].







*/
// var a = 32;
// function b(){
//     var x = 12;
// }
// console.log(this.x);
// console.log(this.b);
// console.log(window.a);
// console.log(this.a);
// console.log(this === window);






// ====================================== undefine and not define ===================================
/*
var a = 7;
undefine[keyword] => memory allocated but there is no value in it.
[is a placed holder which is assign to only declared variable.]
not define => not have been allocated memory

js is loosely type language. let x = 12,x="can we assign string again to it"
*/




//========================================= Scope & Lexical Environment ===========================
/*
where we can access a specific a vairalble or function in code.
=> whenever execution context is created then lexical envirnment is also created.
    -lexical envirnment is the local memory along with lexical envirnment of of it parents.
    []
    c function is lexically sitting inside "a function".means c is physically present inside a function.
    a function is lexically sitting inside global scope.
    ==>A lexical environment is a data structure that holds identifier-variable mapping. ... 
    The environment record is the actual place where the variable and function declarations are stored. 
    The reference to the outer environment means it has access to its outer (parent) lexical environment.
    OR
    Lexical Environment : it's the internal js engine construct that holds identifier-variable mapping.
     (here identifier refers to the name of variables/functions, and variable is the reference to actual object 
        [including function type object] or primitive value).

*/

/*

function a(){
    c();//when control come here for search b. it goes to a's lexical parent which is global so it search in global lexical envirnment.
    //this chain of finding variable or function in lexical envirnment known as "scope chain.".
    function c(){
        console.log(b);//parent of it is lexical envirnment, so it search value of b in a which is lexical envirnment parent of c.
        //when create it execution contex then create lexical envirnment reference to lexical envirnment of parent. it goes up to global.
        //this chain of lexical envirnment reference known as "scope chain".

    }
}

var b = 10;
a();

*/




// ==================================== let & const =====================================================
/*
The main difference between let and var is that scope of a variable defined with let is limited to the 
block in which it is declared while variable declared with var has the global scope. So we can say that 
var is rather a keyword which defines a variable globally regardless of block scope.


let & const declarations are Hoisted
let is more strict than var.
const is similar to let but more strict than let.
can not be changed value of cont. must be initialize when it is declared.


------------------------------------------------
console.log(a);//show error.
let a = 10;//it not attached in global object it attached in seprated space in script.
var b = 100;

let a = 10;
console.log(a);//now its fine.
var b = 100;
----------------------------------------------
let a = 10;
let a = 10;//throw syntax error.
var a = 10;
var a = 10;//no error.

 var is function scoped and let is block scoped.
It can be said that a variable declared with var is defined throughout the program as compared to let.





*/

// ========================================== Block scope & shadowing in JS =====================
/*
{
    this curly bracked define the block.
    this is also known as compound/groupping statement.
}
var a =200;
let b = 100;
const c = 100;
{
    var a = 10;
    //it is hoisted in global scope/glbal_object.//it is shadowing of global a.//change value in global object also.
    let b = 20;//shadowing of outer b same for const.
    const = 30;//let & const are take seprate space in block scop, where they are hoisted.

that why we can't access let and const outside block but "a" can access outside block.

}
console.log(a);//no error//it print 10 not 100.//point to same memory location.
console.log(b);//error
console.log(c);//error


-> Shadowing is work same in function.
var c = 100;
function x(){
var c = 30 //shadowing of outer c
console.log(c);
}
x();
console.log(c);


//inligal shadowing do with let with var.//but  shadowing let with var is valid.

block scope flow lexical scope.




============================================ Closures ==========================================
->[a closure is a function that captures variables from its parent lexical scope.]
->A closure is the combination of a function bundled together (enclosed) with
the lexical environment.
->In other words, a closure gives you access to an outer function’s scope from an inner function. 
In JavaScript, closures are created every time a function is created, at function creation time.



function x(){
    var a = 7;
    //this is parent lexical scope for function y members.
    function y(){
        console.log(a);
    }
    y();
}

x();



function x(){
    var a = function y(){
        console.log(a);
    } 
    a();
}

x();


function x(){
    var a = 7; 
    y();
}

x(function y(){
    console.log(a);
});


function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    //if do a = 100. then it print 100.bcz it reference to a.
    return y;//if we write return keyword begning of y function it work same as it is.
}

var res =x();//here complete closure is return.
console.log(res);
res();//print value of a//it is remeber it's lexical scope.//



use of closures:
    -Module Design Pattern.
    -Currying Function like once
    -memoize
    -maintaining state in async world
    -setTimeouts
    -Iterators
    and many more.......




================================== setTimeout ======================================
The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
it doesn't give gurante for execute in specific time it may take larger than specify resone is call stack is not empty.
function x(){
    var i =1;
    setTimeout(function(){
        console.log(i);
    },3000);
}
// x();

//print i 1 to 5 after 1 ith second.
function y(){
    for(var i =1 ;i<=5;i++){
        setTimeout(function(){
            console.log(i);//here print 6 in each iteration.bcz loop execute before setTimeout function.
            //so i reach 6 and settime out print 6 after 1,2,3,4,5 second.
            //it print only 6 bcz var attached in global object. for different use let.
        },i*1000);
    }
}
// y();

function y1(){
    for(var i=1;i<=5;i++){//now it work
        function close(x){
            setTimeout(()=>{
                console.log(x);
            },i*1000);
        }
        close(i);
    }
}
y1();

function z(){
    for(let i = 1;i<=5;i++){
        setTimeout(function(){
            console.log(i);
        },i*1000);
    }
}
// z();

console.log("Start");

setTimeout(function cb(){
    console.log("callback");
});

console.log("End");
//o|p:  Start
        End
        callback






==================================================== First Class Functions/First class citizens ===============================
1. function statement| function Declaration
        //declaration of function is function expression

            function a(){
                console.log("this is function a");
            }

2. Function Expression
            b();//show error it treat as variable initialy while function not initialize.
            initialize function into a variable 
            var b = function(){
                console.log("This is function b");
            }

4. Anonymous function
            function withoua a name.they doesn't have it's own identity
            function (){//a/c to ECMA script es6 function must have a name.
                
            }
            
            anonymous function used where there function used as value
           var x= function (){

            }
5. Named Function Expression
            in the function expression we can give a name of function.

            var b = function xyz(){
                console.log("This is function b");
                console.log(xyz);//we can access here.
            }
            xyz();//throw a reference erro/it assign in a variable.
            b();//it worked.


6. Difference between parameters & Arguments
            passing value at the time of function declaration is called function parameters.
            passing value at the time of function calling is called function arguments.
            var b= function (param1,param2){//param1,param2 is parameters

            }
            b(1,3)//these are the arguments.



7. First Class Functions
            the ability of function to used as value and pass as argument and can be return function from a function.

            var b = function (param){
                console.log(param);
                return function(){

                }
            }
            console.log(b(function(){

            }));
            or
            function xyz(){

            }
            console.log(b(xyz));

                                    This ability is known as first class function..................






=========================================== Callback Function ======================================
            when function pass to another function that passing function is known as callback function.
            setTimeout->function take a callback function.




            function x(y){

            }

            x(function y(){
                this y function is called callback function.
            })

            
            
            setTimeout(function(){//it take a callback function.
                console.log("timer");
            },5000);
            //setTimeout take a callback function and store in a seprate storage.
            //and attached a timer of 5000ms.
            
            javascript is synchronous single tread but right now in setTimeout function wait for 5sec
            so this problem is solved by callback function it store any other location. and js engine 
            go ahead and after complete time stored all the callback function execute 
            
            
            
            function x(y){
                console.log("x");
                y();
            }
            
            x(function(){
                console.log("y");
            })




            //global is not a good solution make it closure and wrapped this 
            //into a function.
            
            // let count = 0;
            //     document.getElementById("clickMe")
            //     .addEventListener("click",function(){
            //         console.log("Button Clicked",++count);
            //     });
            
            
            function attachEventListeners(){
                let count = 0;
                document.getElementById("clickMe")
                .addEventListener("click",function xyz(){
                    console.log("Button Clicked",++count);
                });
                //now callback function make closure with it outer scope. 
            }
            
            attachEventListeners();


            Q1. Garbage Collector to remvoe EventListener.
            Q2. Why do we need to remove EventListener.
                EventListener are hevy they take memory. if there are lots 
                of EventListener then page will be slow.




=============================================== Asynchronous JavaScript & Event Loop ======================================
Event loop: continously monitoring callstack and callback queue..
if there is anything in callback queue then event loop put it into stack queue.

                                    Browser--------------------
                                    Web API
                                 window[throught this window browser give power to js engine.]
                                * setTimeout()
                                * DOM APIs
                                * fetch()
                                * Local Storage
                                * Console
                                * Location[http://www]

Browser give these power to Javascript Engine. these are not the part of javascript.



Microtask Queue: it is similar to callback Queue but it is faster than it.promises are resolved by it.

Starvation: when there are lots of task is come up into microtask queue then callback queue have no access
for long time this is known as starvation.


in setTimeout() callback function register in web API envirnment for specific time. after complete time 
it come into callback queue then in call stack.



======================================= Higher Order Function ========================================
A function which take a function is an argument and return a function is known as higher order function.

function x(){//x is the call back function.
    console.log("Namaste");

}

function y(x){//y here is higher order function.
    x();
}



===================================================== protorype ===============================================
when we create object ,function and variable then javascript engine add some hidden properties and method to that object.
these properties come from the prototype.






=================================================== Local Storage & Session Storage =======================================
[sessionStorage is similar to localStorage ; the difference is that while data in localStorage doesn't expire, data in sessionStorage 
is cleared when the page session ends.].

web storage API is used by developer to save data into the web browser this data is nothing key:value pair.
     web applications can store data locally within the user's browser.

      web storage provides two objects for storing data on the client side:
    window.localStorage - stores data with no expiration date
    window.sessionStorage - stores data for one session (data is lost when the browser tab is closed)

The localStorage object stores the data with no expiration date. The data will not be deleted when the browser is closed,
 and will be available the next day, week, or year.

The sessionStorage object is equal to the localStorage object, except that it stores the data for only one session. 
The data is deleted when the user closes the specific browser tab.






============================================================ What are Cookies? =======================================================
Cookies are data, stored in small text files, on your computer.

When a web server has sent a web page to a browser, the connection is shut down, and the server forgets everything about the user.

Cookies were invented to solve the problem "how to remember information about the user":

When a user visits a web page, his/her name can be stored in a cookie.
Next time the user visits the page, the cookie "remembers" his/her name.
Cookies are saved in name-value pairs like:






===================================================== Map-filter-reduce ==================================================
Map => It basicaly used for transform an array[mapping one to one value.]

example: const arr = [5,1,3,2,6]
    transform like Double: [10,2,6,4,12]
                    Triple: [15,3,9,6,18]
                    Binary: ["101","1","11","10","110"].


function double(x){
    return x*2;
}
function triple(x){
    return x*3;//this is logic function.pass into map.
}
function binary(x){
    return x.toString(2);//convert it number into binary.
}
const output = arr.map(double())
//pass a function which you want to by it.
//it run internaly for each any every value of arr.


const res = arr.map((x)=>x.String(2));//convert into binary.


                                Filter
use to filter the value in array:like filter all greater or even number or any things.
conso arr = [5,1,3,2,6];
filter odd values.

function isOdd(x){
    return x%2;//filter odd value
    return x%2===0;//filter even value;
    return x>4;//filter greater than value;
}
const output = arr.filter(isOdd);



                        Reduce
reduce method execute a function for an array element and as a result it give a single value.

const output = arr.reduce(function(acc/curr){  // acc->accumulator result,curr ->current value of arr .

    acc = acc+ curr;
    return acc;
});




const arr = [5,1,3,2,6];
function findMax(arr){
    let max = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}
console.log(findMax(arr));

const output = arr.reduce((acc,curr)=>{
    if(curr>acc){
        acc=curr;
    }
    return acc;
},0);//initial value is zero of acc;
console.log(output);






const users = [
    {firstName:"sheeshpal",lastName:"saini",age:22},
    {firstName:"donald",lastName:"trump",age:55},
    {firstName:"elon",lastName:"musk",age:45},
    {firstName:"Narendra",lastName:"modi",age:55},
];

list of full names
["sheeshpal saini","donald trump".........]

const output =users.map(x=>x.firstName+" "+x.lastName);
console.log(output);




age:how_many-----like {55:2,22:1,45:1}
const output = users.reduce((acc,curr)=>{
    if(acc[curr.age]){
        // acc[curr.age]=++acc[curr.age];
        ++acc[curr.age];//both are same;
    }else{
        acc[curr.age]=1;
    }
    return acc;
},{});//{initial value of acc.}

console.log(output);



print first name which age is less than 50;

const output = users.filter(x=>x.age<50).map(x=>x.firstName);
console.log(output);












*/
