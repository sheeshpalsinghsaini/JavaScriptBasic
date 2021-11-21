// console.log("OOPs Concepts");


// let fullName = "SheeshpalSinghSaini";

// console.log(fullName);

/*
# In oops concept we group function and variable in a block called class.










------------------Four pillars of Obect Oriented Programming------------------
//important for interview
    Encapsulation: means wrapping up data and member function(method) together into a single unit i.e. class.

    Abstraction: is the process of showing only essential/necessary features of entity/object to the outside world
    and hide the other irrelevant information. For example to open your TV we only have a power button, It is not
    required to understand how infra-red waves are getting generated in TV remote control.

    Inheritance: allows a class(subclass) to acquire the properties and behavior of another class(super-class).
    It helps to reuse, customize and enhace the existing code. So it helps to write a code accurately and 
    reduce the development time.

    Polymorphism: means "many forms". A subclass can define its own unique behavior and still share the same functionalities
    or behavior of its parent/base class.

*/


// implementation oops before es6 in javascript

// let person1 ={};//object created /empty

//define propeties

// let person1 ={
//     firstName : "SheeshpalSingh",
//     'last Name' : "Singh",
//     age : 22
// };


//access peroperties
//using .(dot)

// console.log(person1.firstName);
// console.log(person1.age);
// console.log(person1.'last Name');//not working use array like notation.
// console.log(person1['last Name']);

//change properties.
// person1.age = 21;
// console.log(person1.age);


//creating method
// let person1 ={
//     firstName : "SheeshpalSingh",
//     // 'last Name' : "Singh",
//     lastName : "Saini",
//     age : 22,
//     // fullName:function(){
//     //     console.log(this.firstName+this.lastName);//this indicate that it is the its class member.
//     // }
    
// };

// person1.fullName;


// let person1 = {};
// person1.name="Sheesphalsinghsaini";//add propeties outside the object.
// console.log(person1.name);

// person1.sayHii = function(){
//     console.log("Hii!");
// }


// person1.sayHii = ()=>{
//     console.log("Hii!");
// }

// console.log(person1);

// person1.sayHii();









// ------------------ another way to create object----------------
// let person1 = new Object;
// console.log(person1);
// person1.name ="SheeshaplSinghSaini";
// console.log(person1.name);

/*this is only for one person for create multiple person we need class which resolve this problem*/













// ============================== constructor function ============================

//constructor function
// function Person(firstName,lastName,age){
    
//     this.firstName = firstName;//no need to create variable
//     this.lastName = lastName;
//     // this.age = age;
//     this.age=()=>{
//         return age;
//     }

//     this.sayHii =()=>{
//         console.log("Hii!");
//     };

//     this.changeAge = (newAge)=>{
//         this.age = newAge;
//     }
// }


//this is the old way for creating object.
// let person1 = new Person("Sheeshpal","Singh",22);
// let person2 = new Person("Sohan","kumar",21);
// let person3 = new Person("Mohan","Kumar",23);


// console.log(person1);
// console.log(person1.age());
// person1.sayHii();
// console.log(person2);
// person2.sayHii();
// console.log(person3);
// person3.sayHii();












// ================================= Prototype and Prototype Inheritance =============================
//prototype add by default in each object.




// let person2 = {
    //     name: "Sheeshpal"
    // };
    
    
    
    
    // console.log(person2);
    // console.log(person2.hasOwnProperty('name'));//return true if properties exist.
    // console.log(person2.hasOwnProperty('age'));//return true if properties exist.
    
    
    
    
    
    // let person1 = {};
    // console.log(person1);

//constructor--------------------------
// function Person(n){
//     this.name = n;
// }

// let person3 = new Person("Mohit");//two prototpe  first make by constructor
// console.log(person3);












// ------------------------------------use of prototype----------------------------
//in prototype we put only those things which is used for all the objects.
// function Person(first,last){
//     this.firstName = first;
//     this.lastName = last;
//     // this.age = a;

//     // this.fullName = ()=>{//copy in all object. if it is written in constructor prototye
//     //     console.log(this.fistName+" "+this.lastNmae)
//     // };
// };

// Person.prototype.fullName = function(){//now function is define in prototype of person.now it is connected to prototype.
//     // console.log("Hii!");
//     console.log(this.firstName , this.lastName);
//     // console.log(this.firstName);
//     // console.log(this.lastName);
// }
// Person.prototype.age = 22;

// let person1 = new Person("Sheeshpal","Singh",22);
// let person2 = new Person("Sohan","Singh",21);

// console.log(person1);
// console.log(person2);

// // console.log(person1.fullName());
// person1.fullName();












// =================================== inheritance ==========================


// function Creature(lifeSpan){
//     this.lifeSpan = lifeSpan;
// }

// Creature.prototype.breath = function(){
//     console.log("breathing........");
// }

// let creature1 = new Creature(100);
// console.log(creature1);

// // -------------------------------------


// function Person(first,last,age){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
// }




// Person.prototype.fullName = function(){
//     console.log(this.firstName+" "+this.lastName);
// }

//replace person prototype with creature prototype means which function is define in person prototype not accessible.
//in person object breath function is appear.
// Person.prototype = Object.create(Creature.prototype);


//conact both prototye
// Person.prototype.__proto__ = Object.create(Creature.prototype);//now we can access both method.




// let person1 = new Person("Sheeshpal","Singh",22);
// let person2 = new Person("Mohit","kumar",21);

// console.log(person1);
// console.log(person2);

//call breathing function form person1
// person1.breath();












// ========================================== class and object in es6 ==========================

// class person{
//     constructor(n,age){
//         //for assign vlaue;
//         // console.log("Object created.....");
//         this.name = n;
//         this.age=age;
//     }

//     sayHii(){//automatic attached in prototype of person
//         console.log("Hii!");
//     }

//     static test ="static properties testing."

//     static hello(){//it don't need object it call by class directly.
//         //it doesn't connect with object that why not reflect in prototype also.
//         console.log("Hello!");
//     }

// }


// let person1 = new person("Sheeshpal",22);
// let person2 = new person();
// let person3 = new person();

// console.log(person1);
// person1.sayHii();
// person.hello();
// console.log(person1.test);//undefine.
// console.log(person.test);



// ----------------------------- Inheritance---------------------

// class emp{
//     constructor(n){
//         // console.log("Employee constructor called ...........");
//         this.name = n;
//     }
//     msg(){
//         console.log("Hii.........");
//     }

// }


// //inherit emp class in manager class
// class manager extends emp{

//     constructor(n,d){
//         super(n);
//         this.department =d;
//     }
//     msg(){
//         console.log("Hello!.......");
//     }
//     info(){
//         this.msg();//it's own method.
//         super.msg();//parent.
//         console.log(this.name+" is manager of department "+this.department);
//     }
// }




// let mngr = new manager("SheeshpalSinghSaini","Web Developement");

// console.log(mngr);
// mngr.info();


// class admin extends manager{

// }

// let admin1 = new admin("Tarun","Web Developer");
// console.log(admin1);// contains emp and manager and object.

















// =============================== security[private, public and protected]====================
//private properties define with #name_of_properties.




// class emp{
//     constructor(n){
//         this.name = n;
//     }

//     getName(){
//         console.log(this.name);
//     }
// }

// let emp1 = new emp("SheeshpalSinghSaini");
// console.log(emp1);
// console.log(emp1.getName);
// emp1.getName();


//make private
// class emp{
//     #name="";//private properties,access only inside class wiht #symbol.
//     constructor(n){
//         this.#name = n;
//     }

//     getName(){
//         console.log(this.#name);
//     }
// }

// let emp1 = new emp("SheeshpalSinghSaini");
// console.log(emp1);
// console.log(emp1.getName);
// emp1.getName();













// ============================== Mixin==================================

// let userfullMethod = {
//     sayHi(){
//         console.log("Hii.......");

//     },
//     sayBye(){
//         console.log("Bye.........");
//     }
// }




//i want use above object into my class 
//this is known as mixin.

// class user{
//     constructor(){
//         this.name = "SheeshpalsinghSaini";
//     }
// }


// Object.assign(user.prototype,userfullMethod);//prototype of object are connect with user

// let usr1 = new user();
// console.log(usr1);
// console.log(usr1.sayBye());


// class admin extends user{
//     // constructor(){
//         //     this.name = "SheeshpalsinghSaini";
//         // }
//     }
    
    // Object.assign(admin.prototype,userfullMethod);//prototype of object are connect with admin
//we can extend only one class but create multiple mixin.

    // let admin1 = new admin();

    // console.log(admin1);
    // admin1.sayHi();












    // =========================== Arrow Function ============================

    // function sum(a,b){
    //     return a+b;
    // }


    // let sum2 = (a,b)=>{
    //     console.log("Hii!,this is Arrow Function");
    //     return a+b;
    // }

    //if only one line in arrow function 
    // let sum3 = (a,b)=> a+b;

    

    // console.log(sum(2,3));
    // console.log(sum2(2,3));
    // console.log(sum3(32,12));


    // let randomA = ()=> Math.random();
    // console.log(randomA());



    // document.addEventListener('click',()=>{
    //     console.log("clicked....");
    // });


    document.addEventListener('click',()=>console.log("clicked...."));//this is workd also.