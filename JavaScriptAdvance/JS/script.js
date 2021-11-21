
//default argument
// function talk(msg="Hii!"){
//     console.log(msg);
// }


// talk();
// talk("Hello!");


//rest parameter

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(3,4));//argument fixed.


// ... --->is rest parameter
// function sum(...args){
//     console.log(args);//args is as array;
// }

// sum(1,2,3,4);
// sum(1,2,3,4,5,6,7);


// ===================spread operator==========================

//.... --->represent[spread/copy of like array object]

// let array1 = [1,2,3];
// let array2 = [4,5,6];

// let array3 = [...array1,...array2]
// console.log(array3);

//copy array1 in array2 using spread operator
// let array2 = [5,6,7,...array1];
// let array2 = [...array1,5,6,7];
// let array2 = [5,...array1,6,7];
// console.log(array2);
// console.log(array1);


// ========================= for of loop=======================================

// let score = [45,64,74,23,35];
// let score = "sheeshpal";

// for(let i of score){
//     console.log(i);
// }


// ======================== template literal =================================
//work with back-tick.
// let firstName ="sheeshpal \n singh";
// console.log(firstName);

// let str = `Hello
// World`;//back-tick take it in new line.
// console.log(str)


// let name = "Sheeshpal Singh";

// console.log(`My name is ${name}.`);

// let x = 12;
// let y = 13;
// console.log(`Sum of ${x} and ${y} is : ${x+y}`);










// ===========================================ES6 - Array Destructuring.=====================

// let book = ['advancjs','200','150'];

// console.log(book[0]);


// let name=book[0];
// let page=book[1];
// let price=book[2];
//OR

// let[name,page=500,price,publication="lakshmi"] = book;//with default value.
// console.log(name);
// console.log(page);
// console.log(price);
// console.log(publication);

// let obj=['book','200',['sheesh','xyz']]
// let[object,price,[name,address]]

// =========================== object Destructuring ==========================

// let book ={}//empty object

// let book = {
//     name : "Advance JS",
//     page : 200,
//     price: 150
// }

// let name = book.name;
// let page = book.page;
// let price = book.price;

// console.log(name);
// console.log(page);
// console.log(price);


//destructuring.
// let{name,page,price} = book;
// let{name:title,page,price} = book;
// let{name:title,page=123,price=342} = book;//with default value
// console.log(name);//name is changed
// console.log(title);
// console.log(page);
// console.log(price);

//nested object

// let book = {
//     name : "Advance JS",
//     page : 200,
//     price: 150,
//     publication: {
//         pub_name:"TechNow",
//         year: 2021
//     }
// }

// let{name,page,price,publication:{pub_name,year}}=book;
// console.log(pub_name);





// ============================= ES6 Module =========================

// [need server for https] =: live server helpfull for local server.

//use three different js file and linke in html and used together .
//module is just file of javascript in different files/parts.

/* 
to use feature of other file in another file. any file cann't use feature whiel it itself doesn't give the permission.
for use feature write "export" before that feature


*/

// ==============================ES6: Object Oriented Programming[oops]=====================
/* Don't repeat yourself(DRY)

-> Old object oriented programming in JavaScript till ES5.
-> New class Feature in ES6.



