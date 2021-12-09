// console.log("Hello World")
// console.log("Welcome to the JavaScript Complete Course")

//javascript Variable
//container to stored data varibale
// var x=83;
// var y=54;
// var sum = x+y;
// console.log(sum);
// document.write(sum);

// let sdiv = document.getElementById("second");

// sdiv.innerHTML="HelloWorld";
// sdiv=document.write("HelloWord");
// sdiv=document.write("HelloWord");
// ========================================
//data Types in javaScript
// There are two types of data types in JavaScript
// 1. Primitive data types[undefined,null,number,string,boolean,symbol]
// 2. Reference data types[Arrays and Objects]


// var str1 = "this is a STring";
// var str2 = "this is a Second sTring";
// document.write(str1+"<br>");
// document.write(str2);
// var num1 = 23;
// var num3 = 43;
// console.log(num1);
// console.log(num3);

// var a = true;
// var b = false;
// console.log(a);
// console.log(b);

//undefine no value inside variable
// var x1=undefined;
// var x;
// console.log(x);
// console.log(x1);
// var n = null;
// console.log(n);

// =============Arrays================

// var arr = [1,"bablu",3,4,5];
// console.log(arr);

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])
// console.log(arr[5])//undefined


//===========Function in JavaScript============

// function avg(a,b){
//     return (a+b)/2;
// }

// c1=avg(4,6);
// c2=avg(14,16);
// console.log(c1, c2);

// function print(n)
// {
//     for(i=0;i<n;i++)
//     {
//         console.log("SheeshpalSinghSaini");
//     }
// }

// print(5);

// function table(n){
//     for(let i=1;i<=10;i++){
//         console.log(i*n);
//     }
// }

// table(2);


// function print(arr)
// {
    
//     for(i=0;i<arr.length;i++)
//     {
//         console.log(arr[i]);
//     }
// }

// print([1,2,3,4,5,6])




//========Conditional Operator=============

// var age = 54;
// if (age>8){
//     console.log('You are not a kid');
// }
// else{
//     console.log("You are a kid");
// }

// function oddEven(n){
//     if(n%2==0){
//         console.log("Even Number");
//     }
//     else{
//         console.log("Odd Number");
//     }
// }

// oddEven(2);

// var x=2;

// if(x&1==0)
//     console.log("2 & 1");
// else
//     console.log("else 2 & 1");

// var age = 5;

// if(age>32)
//     console.log(" you are not a kid");

// else if(age>26)
//     console.log("Adult");
// else if(age<12)
//     console.log("you are kid");




//array iteration

var arr = [1,2,3,4,5,6,7,8];

// console.log(arr);

// for(i=0;i<arr.length;i++)
// {
//     console.log(arr[i]);
// }

// forEarch loop
// arr.forEach(function(x){
//     console.log(x);
// })

// let string =["Java","Javascript","Python"];
// string.forEach(/.,p-function(x){
//     console.log(x);
// })




// let x = 12;
// console.log(x);
// console.log(typeof x);
// let str = "Sheeshpal Singh";
// console.log(typeof str);
// let y = 1.2;
// console.log(typeof y);


// let is new way for defining variable
// var is old way for defining variable
//

//while loop
// let j=0;

// while(j<5){
//     console.log("SheeshpalSinghSaini");
//     j++;
// }

//do while loop
// let x = 0;

// do{
//     console.log(x);
//     x++;
// }while(x<10);

//break and continue statement is also available


//==============Method of array=================
// let myArr = ["Fan","Camera",23,null,true];

// console.log(myArr.length);
// let z =myArr.pop();//remove last value
// console.log(myArr);
// console.log(z);
// myArr.push("sheeshpal");
// console.log(myArr);

// let z=myArr.shift();//remove first element
// console.log(myArr);
// console.log(z);

// myArr.unshift("Shiv");//add element at first position
// console.log(myArr);

// let str = "Sheeshpal Singh Saini";
// console.log(myArr.unshift("Camera"));//return length of arr with adding one
// console.log(myArr);
// let number = [5,23,7,9,1,6];
// console.log(number.sort());//it sort according to dict order


//String mehtods in javascript
// let myString = "Sheeshpal is a good boy";
// console.log(myString);
// console.log(myString.length);
// console.log(myString.indexOf("good"));
// console.log(myString.lastIndexOf('d'));
// console.log(myString.indexOf("Singh"));

// console.log(myString.slice(1,3));

// d=myString.replace("Sheeshpal","Sheesh");
// console.log(d);


//===================Date====================

let myDate = new Date();

console.log(myDate);
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getHours());



// =====================DOM[Document Object Model]============

// let elem=document.getElementById('click');//featch tag through it's id selector
// console.log(elem);

//fetch tag through it's class selector
//  let elemClass = document.getElementsByClassName('container');
//  console.log(elemClass);

//  elemClass[0].style.background="yellow"; //change background 0th class selector
 //adding manualy class ,adding properties in css&html
//  elemClass[0].classList.add("bg-primary");//bg-primary is class selector value

//  elemClass[0].classList.add("text-success");

 //remove class
// elemClass[0].classList.remove("text-success");



//========================================================================
//featch innerHTML and inner HTML text
// let innerHTML = elemClass[0].innerHTML;
// let innerText = elemClass[0].innerText;

// console.log(innerHTML);
// console.log(innerText);


//fetch tag of html
// btn = document.getElementsByTagName("button");
// console.log(btn);

// div = document.getElementsByTagName("div");
// console.log(div);

//create tag by js

// createdElement=document.createElement('p');
// createdElement.innerHTML="This is a created paragraph using JavaScript";
// div[0].appendChild(createdElement);

//replace child
// createdElement2=document.createElement('b');
// createdElement2.innerText="This is a created bold and replaced element at createdElement";
// div[0].replaceChild(createdElement2,createdElement);
// removeChild(element);--------->removes an element

// console.log(document.title);
// console.log(document.domain);

// console.log(document.URL);
//=========and lots of method are available======================



// -----------------------------------------------------------------------
//Selecting using Query

// sel = document.querySelector('.container');
// console.log(sel);

// sel = document.querySelectorAll('.container');
// console.log(sel);

// =========================================================================

//events in javaScript
//Activity in web page like click on button, open image, open url etc.


//onclick="clcked()" this is an event by javascript function
// function clicked(){
//     console.log("The button was clicked");
// }

// window.onload=function(){
//     console.log("The document was loaded");
// }


// firstContainer.addEventListener('click',function(){
//     console.log("click hua");
// })


// firstContainer.addEventListener('mouseover',function(){
//     console.log("Mouse on Container");
// })

// firstContainer.addEventListener('mouseout',function(){
//     console.log("Mouse out of Container");
// })

// firstContainer.addEventListener("mouseup", function(){
//     console.log("Mouse up when clicked on container");
// })

// firstContainer.addEventListener('mousedown',function(){
//     console.log("Mouse down when clicked on container");
// })


// ----------------------------------------------------------
// let preHTML = document.querySelectorAll('.container')[1].innerHTML;
// // console.log(preHTML);
// firstContainer.addEventListener('mouseup',function(){
//     document.querySelectorAll('.container')[1].innerHTML = preHTML;
//     console.log("Mouse up when clicked on Container");
// })

// firstContainer.addEventListener('mousedown',function(){
//     document.querySelectorAll('.container')[1].innerHTML="<b>we have clicked</b>";
//     console.log("Mouse down when clicked on Container");
// })


//SetTimeout and set interval

// ArrowFunction
// function sum(a,b){
//     return a+b;
// }

// sum=(a,b)=>{
//     return a+b;
// }