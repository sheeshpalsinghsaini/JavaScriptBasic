// let book = ["math","physics","Bio","Computer Science"];
// console.log(book.length);
// book.push("Hindi");
// console.log(book.length);
// console.log(book);



//add first pos.
// book.unshift("Hindi");
// console.log(book);


//remove ele
// book.pop();
// console.log(book);

//remove from first
// book.shift();
// console.log(book);

//remove at specific pos.
// book.splice(1,1);//(start_pos,how_many_word);
// console.log(book);
// book.splice(1,2);
// console.log(book);


//do empty arr
// book=[];or
// book.length=0;
// console.log(book);
//find pos.
// let position = book.indexOf("Bio");
// console.log(position);


// let book ="Math";

//check variable is array or not
// console.log(Array.isArray(book));




// split string into array using split method.
// let text = "This is a random text"

// let wordarray =text.split(" ");
// let wordarray =text.split("s");
// console.log(wordarray);


//convert array to string
// let wordarray = book.join(" ");
// let wordarray = book.join("_");
// console.log(wordarray);

// let book2 = ["Hindi","English"];

//add two array

// let newBook = book.concat(book2);
// console.log(book2);
// console.log(newBook);//add more by seperated comma.




// =====================multiDimensional Array==================

// let bookWithPages = [
    //     [Math,"300"],
    //     ["Physics","500"],
    //     ["Bio","300"]
    // ];
    
    //indexing start to 0
    // console.log(bookWithPages[0][1]);
    // console.log(bookWithPages[0]);
    
    
    // let book = ["math","physics","Bio","Computer Science"];

    // book.forEach(function(x){
    //     console.log(x);
    // })

    // for(i=0;i<book.length;i++){
    //     // console.log(book[i]);
    //     console.log(`Element ${i} is ${book[i]}`);
    // }

    // book.forEach(myfun);

    // function myfun(value){
    //     console.log(value);
    // }


    // ========================Function====================

/*
>two type of function.
>predefine and user define.
*/


// function multiplication(n){//n->parameter
//     for(i=1;i<=10;i++){
//         document.write(`${n}*${i} =${n*i}`);
//         document.write("<br>");
//     }
// }

// multiplication(3);//3->argument
// // document.write("<hr>")
// document.write(`<br>table of ${4} <br> <br>`);
// multiplication(4);


// function addTwoNumber(n1,n2){
//     // return n1+n2;
//     document.write(n1+n2,"<br>");
// }
// console.log(addTwoNumber(12,13));
// document.write(addTwoNumber(13,14));
// addTwoNumber(12,14);
// addTwoNumber(43,21);
// ---------------------------------the argument object--------------------------------
/*
add(5,7);
add(5,7,9);
add(2,3,4);
*/


//all element collect in arguement object
// function add(){
//     console.log(arguments.length);
//     console.log(arguments);
// }

// add(2,3);
// add(12,42);
// add(1,2,3,4,5);



// function add(){
//     // console.log(arguments.length);
//     // console.log(arguments[0]);
//     // console.log(arguments[1]);
//     // console.log(arguments[3]);
// }

// add(2,3);
// add(12,42);
// add(1,2,3,4,5);


// function add(){
//     if(arguments.length==0){
//         console.log("No arguments passed !");
//     }
//     else{
//         let sum =0;
//         for(let i=0;i<arguments.length;i++){
//             sum+=arguments[i];
//         }
//         console.log(sum);
//     }
// }

// add(5);
// add(5,3);
// add(5,3,5);


//we can sotre function into other normal variable & it also call by it


// let addition = add;
// console.log(addition(2,3,4));//not return any value so it print undefine.
// addition(2,3,4);


// -----------------------------------------return in function -------------------------------------

// function multiplication(a,b){
//     return a*b;//if function don't return anything  then it default return undefine.
// }

// console.log(multiplication(2,3));
// let c = multiplication(12,2);
// document.write(c);


// ---------------------------Anonymous Function[functino without Name]---------------
/*

create it if we pass function in argument.
call one time only.
not declare global varibale. they reserve memory until program finished.

*/


//function expression
// let show = function(){
//     console.log("HelloWorld");
// };

// show();


// setTimeout(functionName,3000milisecond);
// function show(){
//     console.log("HelloWorld!");
//     console.log("HelloWorld!");
//     console.log("HelloWorld!");
//     console.log("HelloWorld!");
//     console.log("HelloWorld!");
//     console.log("HelloWorld!");
// }

// setTimeout(show,3000);//execute after 3 second.


//we can put complete function inside setTimeout.

// setTimeout(function(){
//     console.log("Helloworld!");
//     console.log("Helloworld!");
//     console.log("Helloworld!");
//     console.log("Helloworld!");
//     console.log("Helloworld!");
//     console.log("Helloworld!");
// },3000);


// ----------------------immediately invoked function-----------------------
//immediate created and execute also.
//it is used for remove conflict which appearing form other script file.
// (
//     function(){
//         console.log("Helloworld!");
//         alert("HelloWorld!");
//     }
// )();

// (
//     function(){

//     }
// )();













// ================================Objects==============================

// let person = {};//created a empty object

// let person = {
//     firstName :"Sheeshpals",
//     lastName:"Singh",
//     age:22,
//     // 'course name':"Javascript"
//     //if properties not exist then it return undefine
// };

// console.log(person);

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);

//we can object same as array.
// console.log(person["firstName"]);
// console.log(person["lastName"]);
// console.log(person["age"]);
// console.log(person["course name"]);
// console.log(person."course name");//not work . notation

// console.log(person);

//modify properties values
// person.firstName="Sheesh";
// console.log(person.firstName);

//create new properties.
// person.address="Moh. Katra Mandi Dhanaura";
// console.log(person.address);

//delete properties.
// delete person.age;
// console.log(person);

//check properties is present or not.
// console.log(`height` in person);//check height peroperties is or not.
// console.log(`address` in person);

//iterate peropeties of object using for in loop.

// for(let key in person){
//     console.log(key);
// }


// for(let key in person){
    //     console.log(key+": "+person[key]);// . notation not work.
    // }
    
    
    // -------------------method in object----------------------------
    
    
    // let person = {
    //     firstName :"Sheeshpals",
    //     lastName:"Singh",
    //     age:22,
        // sayHello:function(){
        //     console.log("HelloWord!");
        // }

        // sayHello(){
        //     console.log("HelloWorld");
        // }
        // 'course name':"Javascript"
        //if properties not exist then it return undefine
    // };
// -----------------------------------------
    // person.sayHello=function(){
    //     console.log("Hello!");
    // }


// --------------------------------------------

    // function greet(){
    //     console.log("Hello!");
    // }
    // person.sayHello=greet;
// -------------------------------------------------







    // person.sayHello();

    /* object can we created using new keyword

    var parson = new Object();
    person.name="sheeshapl";
    person.age=22;
    console.log(person.name);

    */













    // =================================this keyword===========================
//insdie object tell its own propeties.
    // let person = {
    //     firstName: "Sheeshpal",
    //     lastName: "Singh",
    //     sayHello(){
    //         console.log("Hello!,"+this.firstName+" I have a "+car.brand+" car");
    //     }
    // };

    // let car = {
    //     brand: "TATA",
    //     model: "Safari"
    // };

    // person.sayHello();






    // ====================Math object=========================
/*
Math.PI-->pie value
Math.E--->eculer number
Math.round(x)-----> if decimal value is lesser than 0.5 take lower other wise take higher.
Math.floor(x)--->remove decimal value.
Math.ceil(x)--->if number in decimal it show higher number always.5.1->6(upper limit).
Math.trunc(4.3)-->simple remove decimal part.
Math.pow(3,2);pow(base,power)
Math.sqrt(200);
Math.min(23,42,3,2,5,23,5);//give any number upto any places.
Math.max(2,3,42,3,4,53,52,23);




*/


// ==================Random Number================================
/*
let x =Math.random();
0 to 0.9999999999999999999999............

let x = Math.floor(Math.random()*10); 0 to 9 for upto 10 multiply by 11.
let x = Math.floor(Math.random()*10)+1; 1 to 10.

Math.floor(Math.random()*(25-15))+15  ----------->[max-min range]minimum included and max excluded.
[formula to generate n1 to n2 range n1<n2].
for include max (25-15+1) ---->just change it.



*/

// function getRandom(min,max){
//     let x = Math.floor(Math.random()*(max-min))+min;
//     return x;
// }

// console.log(getRandom(2,5));


// ==============================Date Object====================

// let x = new Date();

// console.log(x);//store current system date.

// january --->0
// December--->11

//set specific date
// let x = new Date(2018,11,13,10,33,35,7);//Date(yy,mm,dd,hh,mm,ss,ms);
//first two parameter need other you can skip it take as zero.
// console.log(x);








// -----------------------------------------getter and setter method----------------------------

//getter method
// let person ={
//     name:"Sheeshpal",
//     age:22,
//     // getname:function(){
//     //     return this.name.toUpperCase();
//     // }
//     get getname(){
//         return this.name.toUpperCase();
//     }

// };

// console.log(person.getname);







//setter method
// let person ={
//     name:"sheeshal",
//     age:22,
//     set setname(n){
//         this.name=n.toUpperCase();
//     }
// }

// person.setname="monu";
// console.log(person);

// ======================================Object constructor function==========================
//class implementation is come in es6 version. before it use object constructor function.
// let student1={
//     firstName:"sheeshpal",
//     lastName:"singh",
//     age:22,
//     class:5
// };
// let student2={
//     firstName:"abc",
//     lastName:"xyz",
//     age:23,
//     class:5
// };

//object constructor function.
// function Student(first,last,age,cls){
//     this.firstName=first;//this.properties=value;
//     this.lastName=last;
//     this.age=age;
//     this.class=cls;
// }
//now we can make lots of student using it.
// var student1 = new Student("Sheeshpal","Singh",22,5);
// var student2 = new Student("Sheesh","Singh",22,5);
// var student3 = new Student("Mohan","Singh",22,5);
// student1.nationality="Indian";

//add method 
// student1.name = function(){
//     return this.firstName+" "+this.lastName;
// }
// console.log(student1,"This is Student 1");
// console.log(student2,"This is Student 2");
// console.log(student3);





// ---------------------object inside object---------------------

// var user ={
//     id:101,
//     email:"abc@gmail.com",
//     personalInfo:{
//         name:"abc",
//         address:{
//             street:"xyz",
//             city:"Delhi",
//             country:"India",
//         }
//     }
// }

// console.log(user);
// console.log(user.email);
// console.log(user.personalInfo);
// console.log(user.personalInfo.name);
// console.log(user.personalInfo.address);
// console.log(user.personalInfo.address.city);




// -------------------------------Hoisting-------------------------------- 
// use for debugging


//if function define below than it work perfectly also.
//java interpreted read all function where is define or not in one time.all declaration shift to up.
// hello();

// function hello(){
//     console.log("HelloWorld");
// }


//normal
// var x;//declaration
// x=7;//assignment
// console.log(x)//call 



 
// x=7;//assignment
// console.log(x)//call
// var x;//declaration



// "use strict"-->if is not define then js declare itsel x;
// x=4
// console.log(x);

