/*
passing a function as a parameter into another function that function
is known as call back function.


JavaScript is a synchronous and single-threaded language
using the call back function we can do async thread in javascript.
*/

//setTimeout()->it take a callback function as parameter.

// setTimeout(function(){
//     console.log("timer");
// },5000);//this is excuted after 5 sec but x and y execute before it.




// function x(y){
//     console.log("x");
//     y();
// }


// x(function y(){
// //y here is call back function
// console.log("y");
// });


function x(y){
    y();
}



x(function y(){
    console.log("call back function");
})