// All about data type

/*
primitive data types
    -Number:Integers,floats
    -String:Any data under single quote, double quote or backtick quote.
    -Boolean:true or false value
    -Null:empty value or no value.
    -Undefined:a declared variable without a value
Non-primitive data type
    -Objects
    -Functions
    -Arrays


primitive data types are immutable(non-modifable).

*/

// let word = 'javascript';
// console.log(word);
// word[0]='u';//word not modify it print same as previous
// console.log(word);

// let js="javascript";
// let py = "python";
// console.log(js==py);//print true or false, boolean value



// Non-primitive data type
// let nums = [1,2,3,4];
// // nums[1]=23;//objects are modifyable.
// console.log(nums);

// let nums2 =[1,2,3,4];
// console.log(nums==nums2);//print false 
// //non-primitive data types cannot be compared by value.

// let userOne={
//     name:'sheeshpal',
//     role:'teaching',
//     country:'India'
// }
// let userTwo={
//     name:'sheeshpal',
//     role:'teaching',
//     country:'India'
// }

// console.log(userOne==userTwo);


/*
Rule of thumb, we do not compare non-primitive data types.do not compare arrays,functions,or objects.
non primitive vlaue are referred to as reference types, because they are being compared by reference 
instead of value. two objects are only strictly equal if they refer to the same underlying object.
*/

// let nums=[1,2,3,4];
// let numbers = nums;

// console.log(nums==numbers);

// let age = 22;
// const gravity =9.8//not changing varibale
// let mass = 72;
// const PI = 3.14;
// console.log(age,gravity,mass,PI);




//math object
// const pi = Math.PI;
// console.log(pi);
// console.log(Math.round(pi));//print round figure
// console.log(Math.round(9.81));//10 is round value.

// console.log(Math.floor(pi));
// console.log(Math.floor(9.81));//print 9 down value

// console.log(Math.ceil(pi));// 4 round up

// console.log(Math.min(-5,3,20,4,5,10));//-5 return
// console.log(Math.max(-5,3,20,4,5,10));//20 return

//create random numbers

// const randNum = Math.random();//generate random number b/w 0 to 1
// console.log(randNum);

//create random number b/w 0 to 10

// const num = Math.floor(Math.random()*11);

// console.log(num);


//absolute value
// console.log(Math.abs(-12));
// console.log(Math.sqrt(16));
// console.log(Math.sqrt(12));
// console.log(Math.sqrt(14));
// console.log(Math.pow(3,2));
// console.log(Math.E);


//natural logrithm with base e
// console.log(Math.log(2));
// console.log(Math.log(10));

//trignometrics
// console.log(Math.sin(30));
// console.log(Math.sin(60));
// console.log(Math.cos(30));
// console.log(Math.cos(60));












//string

// let space =' ';//empty space string
// let firstName = "Sheeshpal";
// let lastName = "Singh";
// let country = "India";
// let city = "Dhanaura";
// let language = "JavaScript";
// let job = "Software Developer";
// let quote = "The saying, 'Seeing is Believing' is not correct in 2021";
// let quoteWithBackTick =`The saying,'Seeing is Believing' is not correct in 2021.`

// console.log(space,firstName,lastName,country,city,language,job,quote,quoteWithBackTick);
// console.log(space);
// console.log(firstName);
// console.log(lastName);
// console.log(country);
// console.log(language);
// console.log(job);
// console.log(quote);
// console.log(quoteWithBackTick);
// console.log("Thank You!");



// string concatenation
// let fullName = "Sheeshpal"+" Singh"+" Saini"
// console.log(fullName);

// let str1 = "JavaScript";
// let str2 = " is a Scripting language for website developement";
// let completeString = str1+str2;
// console.log(completeString);

//storing big string
// const paragraph ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tempora distinctio, commodi dolorum, perferendis adipisci sequi quam minus similique nam quod nihil dolores labore debitis enim iusto harum autem deleniti ex amet. Ab voluptatem rerum ratione voluptas facilis? Totam quis nostrum suscipit perspiciatis dolorum iure provident dignissimos eligendi. Fugiat molestiae iusto possimus, nulla id ducimus ipsa aspernatur hic quia minima dolorum repellendus quisquam assumenda accusantium quibusdam ullam adipisci atque eligendi! Harum ut tempora similique distinctio saepe alias inventore deleniti expedita impedit a? Eos adipisci pariatur veniam quidem nesciunt neque quas, est dicta? Nemo perferendis esse itaque tempore nam cumque minima hic numquam maiores autem nesciunt quisquam, repellendus nostrum in cupiditate voluptate omnis. Rem, doloribus. Labore dolorem dicta accusantium repellat aliquam possimus distinctio animi! Sint, cumque. Sunt odio amet maxime! Accusamus nemo officiis veniam non natus delectus neque sapiente a quae, modi quos cumque, nam optio saepe reiciendis dolor suscipit inventore? Nam, dolores consectetur? Corporis necessitatibus iste, fugit magni ipsam,";
// console.log(paragraph);





//escape sequences in strings
/*
\n: for new line.
\t: tab, means 8 space.
\\: back slash
\': single quote(').
\": double quote(").
*/


// console.log("Hello eveyone \n my name is sheeshpal sigh saini");

// console.log("this is for \t tab");
// console.log("this is \\ backslash");

// console.log("this is \' single quote");
// console.log("this is \" double quote");




//template string

/*
syntax: `String literal text`
`string literal text ${expression}`
*/

// console.log(`The sum of 2 and 3 is 5`);
// let a=2;
// let b=3;
// console.log(`The sum of ${a} and ${b} is ${a+b}`);


// let firstName="Sheeshpal";
// let lastName="Singh";
// console.log(`My first name is ${firstName}\nmy last name is ${lastName}`);


/*
we can add expression also, which could be a value, 
or some operations (comparison, arithmetic operations, ternary operations)
*/

// let a =32;
// let b = 12;

// console.log(`${a} is greater then ${b}: ${a>b}`)





//string methods
/*
everything in JavaScript is an object.
A string is a primitive data type that means we can not modify it once it is created.
the string object has many string methods. there are different string methods that can helps us to work
with string.
*/

// let js ="Javascript";
// console.log(js.length);//return total number of characters are there.
// let fullName = "My name is Sheeshpal Singh Saini";
// console.log(fullName);

//accessing characters in string:
// let str = "JavaScript";
// console.log(str[0]);
// console.log(str[str.length-1]);//last character of string

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

//substr(): it take two arguments, starting and number of character ot slice
// console.log(str.substr(0,4));
// console.log(str.substr(4,6));




//substring(): it takes two arguments, the staring and stopping but it doesn't include stopping.

// let js = "Javascript";
// console.log(js.substring(1,4));

//split(): split a string at a specified place.
// let str = '30 Days of JavaScritp';
// console.log(str.split());
// console.log(str.split(' '));

// console.log(js.split());
// console.log(js.split(''));

// let countries = 'India, Finland, Sweden, Norway, Denmark';
// console.log(countries.split(','))
// console.log(countries.split(', '))





//trim(): remove tralling sapce in the begining or the end of a string

// let string = '          30 Days of JavaScript       Course                '+"remove last space";
// console.log(string);
// console.log(string.trim(' '));
// console.log(string.trim());



//includes(): it takes a substring argument and it checks 
//if substirng argument exists in the string. includes() 
//returns a boolean. if a substring exist in a string
// it returns true, otherwise it returns false.

// let string = '30 Days of JavaScript';
// console.log(string.includes('Days'));
// console.log(string.includes('days'));
// console.log(string.includes('script'));
// console.log(string.includes('Script'));
// console.log(string.includes('java'));


// let country = "India";
// console.log(country.includes('In'));
// console.log(country.includes('in'));
// console.log(country.includes('n'));
// console.log(country.includes('ai'));
// console.log(country.includes('ia'));



//replace(): takes as a prameter the old substring and a new substring.
//syntax: string.replace(oldsubstring,newsubstring);

// let string = '30 Days of JavaScript course';
// console.log(string.replace('JavaScript','Python'));

// let str = "India";
// console.log(str.replace('a','Go'));



//charAt(): takes index and it returns the value at that index.
//syntax: string.charAt(index);

// let string = "Sheeshpal";
// console.log(string.charAt(0));
// console.log(string.charAt(3));



//charCodeAt(): takes index and it returns char code(ASCII number) of the value at that index.
//syntax: string.charCodeAt(index);

// let string ="Sheeshpal";
// console.log(string.charCodeAt(0)+"\n"+string.charCodeAt(4));


//indexOf():take substring,if exist it returns the first position of the substring if not return -1
//syntax: string.indexOf(substring);

// let string = "30 Days of JavaScript Course";
// console.log(string.indexOf('D'));
// console.log(string.indexOf(0));
// console.log(string.indexOf('of'));
// console.log(string.indexOf('pt'));
// console.log(string.indexOf('e'));
// console.log(string.indexOf('E'));


//lastIndexOf(): take substring, if exist return last occurence of the substring it not return -1.
//string.lastIndexOf(substring);

// let string = "I love myself. Thanks for your lots of love";
// console.log(string.lastIndexOf('love'));
// console.log(string.lastIndexOf('your'));
// console.log(string.lastIndexOf('myself'));


//concat(): it takes many substring and joins them.
//syntax: string.concat(substring,substring,substring);

// let string ='30';
// console.log(string.concat("Days","of","JavaScript"));

// let country = "India";
// console.log(country.concat("BharatMa"));



//starstWith: it takes a substring as an argument and it checks if the string start with specified substring.it returns ture/false.
//syntax: string.startsWith(substring)

// let string ="Love is the best to in this world";
// console.log(string.startsWith('love'));
// console.log(string.startsWith('Love'));
// console.log(string.startsWith('world'));

// let country ="India";
// console.log(country.startsWith('In'))
// console.log(country.startsWith('in'))
// console.log(country.startsWith('nd'))
// console.log(country.startsWith('India'))




//endWith(): it take substring as an arguments and it checks if the string ends with that specified
//substring. it returns a boolean(true,false).

//syntax: string.endWith(substring)

// let string = 'Love is the most powerful feeling in world';
// console.log(string.endsWith('world'));
// console.log(string.endsWith('Love is the most'));
// console.log(string.endsWith('in world'));



//search(): it takes a substring as an argument and it return the index of the first match.
//search value can be a string or a regular expression pattern.

//syntax:string.search()substring).

let string = 'I love javascript. if you do not love javascript what else can you love';
console.log(string.search('java'));
console.log(string.search('love'));//without any flag
console.log(string.search(/love/gi)); //g->means to search in the whole text, i -> case insensitive
console.log(string.search('do'));
console.log(string.search('javascript/gi'));

