// const arr = [];         //create empty array.


// const arr= [0,3.14,9.81];
// const webTech = ['HTML','CSS','JS','React','Redux','Nodejs','MongoDB'];

// console.log(arr.length);
// console.log(webTech.length);
// console.log("Web Technology : "+webTech);


// let js = "javascript";
// const charArr = js.split('');   //create array of each characters.
//we provide any character inside quote then it split at that places.
// console.log(charArr);

// let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// const companies = companiesString.split(',');
// console.log(companies);


// const arr = Array();    //create empty array.
// console.log(arr);
// const arr2 = Array(8);  //create eight empty values;
// console.log(arr2);

// const arr3 = Array(8).fill(2);
// console.log(arr3);

// let a1 = [1,2,3,4];
// let a2 = [4,3,5,6];

// const res = a1.concat(a2);  //concatenate a2 inside a1;
// console.log(res);


// const numbers = [1,2,2,3,3,4,5];
// console.log(numbers.indexOf(5));
// console.log(numbers.indexOf(2));
// console.log(numbers.indexOf(3));
// console.log(numbers.lastIndexOf(3));
// console.log(numbers.lastIndexOf(2));


// console.log(numbers.includes(1));
// console.log(numbers.includes(8));

// let s1 = 'sheeshpal singh saini';
// let s2 = s1.slice(2,5);
// console.log(s2);

// let arr = [5,3,6,4,7,9,8,1];
// console.log(Math.max(6,4,3,9,7,8));
// console.log(Math.max(...arr));      //put all element inside max method.


const numbers = [1,2,3,4,5,6,7,8,9];

// for(let x in numbers){
//     console.log(numbers[x]);
// }

// numbers.forEach(myFunction);

// function myFunction(value,index,arr){
//     console.log(value+"=>"+index);
//     // console.log(arr);
// }


// for(let x of numbers){
//     console.log(x);
// }



class Person{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        //this refers to the class itself.
    }

    getFullName = ()=>{
        return this.firstName+this.lastName;
    }
}

const p1 = new Person("Sheeshpal","Singh");
console.log(p1);
console.log(p1.getFullName());