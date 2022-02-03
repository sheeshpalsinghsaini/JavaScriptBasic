# JavaScriptBasic
Fundamental of Javascirpt.
    Javascript is a scripting lanaguage that are used for website. js can upddate and change html & css both.
    it is also used for manipulation and validation. it is used for client side and server side.


//method for print in js
console.log("Hii");     //print on console
console.warn("Hii");    //print as warning on console


document.write("Hii!");     //print on document.
document.getElementById("container").innerHTML = "Hii!";    //print in tagerget element in document.



Data types in js:
    primitives data types
        => undefined,null,number,string,boolean,symbol[new data type]
    Reference data types
        => Arrays and Objects


String in js
    js string is zero or more characters written inside quotes.

    example:
        let text = "sheeshpal singh"

    Normally, js strings are primitive values, created from literals:

    But string can also defined as objects with the keyword new:

        let string = new String("Sheeshpal");


    Note: do not create string objects. the 'new' keyword complicateds the code and slow 
        down execution speed. String objects can produce unexpected results.

    '==' => compare on data type not reference.
    '===' => data types as well as reference.
    comparint two object always return false. bcz reference for both are different.

    primitive value like 'sheesh' cannot have properties or method ( they are not objects)
    but js treats primitive values as objects when executing methods and properties.


    JavaScript String Methods=========>
        1. str.length-> return length of a string/ total character inside it.
        2. Extracting string parts.
            there are 3 mthods for extracting a part of a stirng.
                * slice(start,end) //end is excluded
                * substring(start,end)  //end is excluded
                * substr(start,length)
        
        Note: js counts positions from zero.
        1. slice(start,end):
            if position -ve then it counts for end of the string.
            if second parameter not provied it consider rest of the string.
        2. substring(start,end):
            is similar to slice. the difference is that substring() cannot accept negative indexes.

        3. substr(start,length):
            similar to slice difference is that second parameter is length of of extracted part.
        



        -------------***********
        * Replacing String content:
            replace() method replaces a specified value with another value in a stirng.
            let text = "please visit Microsoft"
            let newText = text.replace("Microsoft","w3schools");    //microsoft replace with w3schools

            Note: replace() method does not change actual string.
                  replace() method returns a new string.

        By default, replace() method replaces only the first match.

        to repalce case insensitive, use a regular expression with an /i flag (insensitive)
        
        let text = 'please visit Microsoft!';
        let newText = text.replace(/MICROSOFT/i,"w3schools");

        Note: regular expression are written without quotes.
        to replace all matches, use a regular expression with a /g flag (global match)


        -------------**********
        * A string is converted to upper case with toUpperCase(). //let text1 = text1.toUpperCase();
        * A string is converted to lower case with toLowerCase(). //let text1 = text1.toLowerCase();


        -------------**********
        * concat() : joins two or more strings.
            let text1 = "Hello";
            let text2 = "World";
            let text3 = text1.concat(" ",text2); 
            it is same as text = "Hello".concat(" ","World!");

        Note: All string methods return a new string. they don't modify the original string.
        string are immutable: String cannot be changed, only replaced. 


        -------------*******
        javaScript string trim()
            trim() method removes whitespace from both sides of a string:
            let text1 = "           Hello World!            ";
            let text2 = text1.trim();

        --------------********
        javaScript String padding
        ECMAscript 2017 added two string method: padStart & padEnd to support padding at the beginning 
        and at the end of a string.
        let text = "5";
        let padded = text.padStart(4,0)     //op: 0005.
        let padded = text.padStart(2,0)     //op: 05.

        let paddedEnd = text.padEnd(4,0)    //op: 5000.

        --------------*********
        Extracting String Characters.
            there are 3 methods for extracting string characters:
                * charAt(position)
                * charCodeAt(position)
                * Property access[]

            * charAt()
            let text = "Hello World!";
            console.log(text.charAt(0));
            console.log(text.charAt(3));

            * charCodeAt(): return the unicode of the character at a specified index in a string.
              the method return a UTF-16 code(an integer between 0 and 65535).

            let text = "Hello World"
            console.log(text.charCodeAt(0));   //print ascii code of position char.

            * Property Access
            ECMAScript 5 (2009) allows property access [] on strings:

            let text = "Hello World";
            let char = text[0];

        
        --------------***********
        Converting a stirng to an Array
            javascript string split(): a string can be converted to an array with the split().
            text.split(",");    //split on commas.
            text.split(" ");    //split on space.
            text.split("|");    //split on pipe.

            Note: if separator is missing then return array will contain whole string in index 0.
            if the separator is "", the return array will be an array of single characters.
            


































---------------------------------------------------------------- Advanced JavaScript -----------------------------------------------------------
let btn = document.getElementById("btn");               //select btn id in btn variable.

btn.setAttribute("name","form1");                    //set a attribute with the help of js.
btn.setAttribute("class","form2");                   //set class attribute.


let value = btn.getAttribute("name");               //get attribute vlaue by js from html.
console.log(value);

let value = btn.removeAttribute("name");            //remove name attribute from html.

let value = btn.hasAttribute("name");               //check name attribute present or not. if yes return true otherwise false.
console.log(value);//true or false.


--------changing inline style/[given by attribute] 

btn.style.cssText = "background-color:red; color:white;";     //apply inline css by js remove previous css. by css.Text.
btn.style.cssText += "background-color:red; color:white;";  //now add into existing css style.
//in quteation write all css.

or
btn.setAttribute("style','color:white;background-color:red;');  //worked same as cssText.

btn.style.color = "red";
btn.style.background-color="blue";



---------Get Computed CSS.
let css = getComputedStyle(btn);            //get apply css in btn id tag.
console.log(css.color); //show apply color in rgb value.


---------css clasess.
<style>
    .color{
        background-color : grey;
        color:blue;
    }
    .dim{
        border:1px solid red;
        padding : 100px
    }
</style>
<div id="box" class="color dim">
    <p>This is a dummy text</p>
</div>

******* how to know how many classes are apply.
let box = document.getElementById("box");
console.log(box.className);     //print both class & dim;

console.log(box.classList);     //print all class name inside an array.

//we can iterate it by loop.
for(let css of box.cssList){
    console.log(css);       //print one by one all classes.
}

************ add more class
box.className +=" container";       //append new class.
or
box.classList.add("dim");       //add dim class.

*********** remove class.
box.classList.remove("dim");    //remove dim class form tag.


********** replace : update existing class.
box.classList.replace("class","dim");       //replace class by dim.


********** chekc css add or not.
let result = box.classList.contains("color");           //return true/false
console.log(result);

********* toggle css.
box.classList.toggle("dim");            //if dim class add then remove it vice versa.


--------------Width and Heigth of an Element.
there are two type of heigth & width.
    1. offset :border ,padding and margin are include.
    2. client: border and margin not include but padding include.

    let width = box.offsetWidth;
    let height = box.offsetHeigth;
    console.log(width,height);

    let width = box.clientWidth;
    let height = box.clientHeight;
    console.log(width,height);  //remove border.



-------------DOM event:

        What is DOM?
             It organize the elements of the document in tree structure (DOM tree) and in the DOM tree, all elements of the document are defined as objects (tree nodes) 
             which have properties and methods.


            When a web page is loaded, the browser creates a DOM tree for all the objects(HTML elements) of
            that page. The HTML DOM is a fully object-oriented representation of your web page and in 
            HTML DOM each and everything is a node. DOM tree nodes can be removed, added, and replaced
            by using DOM API.
 * DOM events are actions that occur as a result of the user action or as result of state change of the 
   of the elements of a DOM tree.
there are two type of event by user and when web page update state.

   Example of HTML events:
        * When a user clicks the mouse
        * When a web page has loaded
        * When an image has been loaded
        * When the mouse moves over an element
        * When an input field is changed.
        * When an HTML form is submitted.
        * When a user strokes a key.


there are lots of DOM event. checkout in the google.

there are two types for register an event 
    1. inline : linke attribuet in tag.ex. onClick
    2. 
<body>
    <button id="btn" onClick="btnClick">ClickMe</button>       //shen button clicked something happens.
</body>
<script>
    function btnClick(){
        alert("Button was cliked......");       //it execute when button clicked.
    }
</script>

************ second way for event register.
    let btn = document.getElementById("btn");
    btn.addEventListener('click',btnClick);             // ('eventName',functionName)


    //by arrow function
    btn.addEventListener('click',()=>{
        alert("btn was clicked...");
    })

    Note: at single thing we can apply multiple event.

**********
    btn.addEventListener('mouseover',()=>{
        //alert("Mouseover is activated......");
        console.log("mouseover is activated.......");
    })

    btn.addEventListener('mouseout',()=>{
        alert("MouseOut is activated....");
        //console.log("Mouseout is activated...");
    })


**********
    function click1(){
        console.log("click1 activated");
    }
    function click2(){
        console.log("click2 activated");
    }
    btn.addEventListener('click',click1);
    btn.addEventListener('click',click2);
    //here two function activated at one btn.

-----------remove EventListener
    btn.removeEventListener('click',click2);        //click2 event remove.




----------- Page Load Events
DOMContentLoaded[trigger when dom tree loaded] : the browser fully loaded HTML and completed building the DOM tree.
 However, it hasn't loaded external resource
like stylesheets and images. In this event, you can start selecting DOM nodes or initialize the interface.

            Load : the browser fully loaded the HTML and also external resources like images and stylesheets.
                   When you leave the page, the following events fire in sequence.

    Note: first DOMContentLoaded event trigger before loaded/download html,css after loaded, load event trigger.

window.addEventListener('DOMContentLoaded', function(){
    console.log("DOM Tree created....")
})

window.addEventListener('load',function(){
    console.log("fully loaded");        //trigger after external resources loaded.
})


//for specific elements
let img = document.getElementById("image1");

img.addEventListener('load',function(){
    console.log("Images loaded successfully......");
})



----------Mouse Event
<div id="box" onClick="func()"></div>               //work for left clicked.

<div id="box" onContenxtmenu="func()"></div>        //work for rigth cliked.

<div id="box" ondblclick="func()">                  //work for double right clicked.

<div id="box" onmousedown="func()"><div>              //happens when mouse key press.
<div id="box" onmouseup="funct()"><div>               //happens when mouse press key free.

<div id="box" onmouseover="func()"></div>               //happens when mouseover on div.
<div id="box" onmouseout="func()"></div>                //happens when mouse out the div after hover.
    ****
function func(){
    alert("Clicke Event");
}



--------- Keyboard key event.
//for window key event.

window.addEventListener('keydown', checkKey);                   //activate when key down.

function checkKey(event){       //receive and event.
    console.log(event.key);
}

window.addEventListener('keyup',checkKey);                      //activate when press key free.
function checkKey(event){
    console.log(event.key);
}





----------- Scroll Events.
//work when scroll are in window. by this event detect scrolling.

window.addEventListener('scroll', function(){
    console.log("Scrolling....");
})

//for detect scroll-up and scroll-down.

window.addEventListener('wheel', function(event){
    if(event.deltaY<0){
        console.log("Scrolling up ......");
    }else if(event.deltaY>0){
        console.log("Scrolling down.....");
    }
})

Note: this event have a propeties of delta-y which is used for vertical scrolling.
and delta-x used for horizantal scrolling.

   ***** target for specific pixel scrolling.

   window.addEventListener('scroll', function(){
       if(window.pageYoffset>50){              //pageXoffset -> used for horizantle.   //return in pixal.
            document.body.style.background = "red";
       }
       else{
           document.body.style.background = "white";
       }
   })



--------- Input Event.
<body>
    <form action="">
    <input type="text" id="myInput">
    <from>
</body>

    *******
    detect input filed.

    Note: when type in input it heighlight it called focusing. otherwise it hide called blur.

    let x = document.getElementById("myInput");

    x.addEventListener('focus', myFocusFunction);
    x.addEventListener('blur', myBlurFunction);

    function myFocusFunction(){
        x.style.background = "yellow";
    }

    function myBlurFunction(){
        x.style.background = "white";
    }

    ****** change event.
    x.addEventListener('change', function(){
        console.log(this.value);                    //get data from input field when some change happens and click outside field.
    })


    ****** input event. : triger when input anything.

    x.addEventListener('input' function(){
        console.log(this.value);                //fetch and remove, updating in input field.
    })




------------- Event Bubbling & Event Capturing.
    Body
     |->Div
         |->Button

 Note: when we click on body, body event happens,
        when we click on div then body and div event happens[div is inside body]
        when we click on button then body,div and button event happens[button is inside div and body also.]

    when we click on button then body,div and button event happens but which one is first happens.
    it is possible in js that control event body then div then button or button then div then body.

    these are categories into two categories.
        1. Event Bubbling:
            In the event bubbling model, and event starts at the most specific element and then flow upward
            toward teh least specific element (the document or even window).

            When you click the button, the click event occurs in the following order.
                * Button
                * div with the id container
                * body
                * html
                * document

        2. Event Capturing:
            In the event capturing model, an event starts at the least specific element and flows downward toward
            the most specific element.

            When you click the button, the click event occurs in the following order:

                * document
                * html
                * body
                * div with the id container
                * button
        
        Syntax:
            addEventListener(event,function,useCapture);    

        * the default value is false, which will use the bubbling propagation, when the value is set to true,
        the event uses the capturing propagation.
        false -> bubbling propagation
        true -> capturing propagation

        ******
        <body>
            <div id="myDiv">
                <button id="btn">ClickMe<button>
            </div>
        </body>

        <script>
            let d = document.getElementById("myDiv");
            let b = document.getElementById("btn");

            b.addEventListener('click', btnClicked);
            d.addEventListener('click', divClicked);
            document.body.addEventListener('click',bodyCliked);

            function btnClicked(){
                console.log("button Clicked ......");
            }
            function divClicked(){
                console.log("div clicked.....");
            }
            function bodyClicked(){
                console.log("body clicked.........");
            }

            //default is false so first chilldren execute.
                //flow: button->div->body.


              b.addEventListener('click', btnClicked,true);
              d.addEventListener('click', divClicked,true);
              document.body.addEventListener('click',bodyCliked);
              //flow : div->button->body

              b.addEventListener('click', btnClicked,true);
              d.addEventListener('click', divClicked,true);
              document.body.addEventListener('click',bodyCliked,true);
              //flow : body->div->button
        </script>



    *******
        stop propagation

            function btnClicked(event){
                console.log("button Clicked ......");
                event.stopPropagation();        // stop event bubbling and capturing only for btn.
            }


------------ prevent Default
<body>
    <a href="https://www.google.com">clickMe</a>            //by default it open on first clicke. we can change it by preventDefault.
</body>

<script>
    let link = document.getElementById("anchor");

    link.addEventListener('click',function(event){
        console.log("Link clicked.....");
        event.preventDefault();     //stop by it open link.
    })

</script>>


    ********* another example for form.
        <body>
            <form action="" id="myForm">
                <input type="text">
                <input type="submit">
            </form>

        </body>

        <script>
            let form = document.getElementById("myForm");

            form.addEventListener('submit', function(event){
                event.preventDefault();

            })

        </script>


------------BOM[Browser Object Model]:
    The Browser Object Model is used to interact with the browser. The window object represents a window in browser.

    Unlike DOM, there is no standard defined for BOM,it is related to browser. hence different browsers implement it in different ways. Typically, the collection of browser objects is collectively known
    as the Browser Object MOde.

    BOM main task is to manage browser windows. Each HTML page which is loaded into a browser window
    become a document object and document object is an object in the BOM.
        we can say BOM is super set of DOM.
        The important BOM object are as:
            * document
            * location
            * history
            * navigation
            * screen
            * frames













--------------------------------------- JavaScript methods ---------------------------------
    Different kinds of loops in js:
        * for
        * for/in
        * for/of
        * while
        * do/while


    1. for(let i = 0;i<5;i++){
        console.log(i);
    }

    2. for/in:  Each iteration returns a key(x), the key is used to access the value of key.
    
    for(key in object){
        //code.
    }

    example:
       const numbers = [1,2,3,4,5,6,7,8,9];

        for(let x in numbers){
            console.log(numbers[x]);
        }

    Note: Do not  use for/in over an array if the index order is important.

        Array.forEach(): calls a function(callback function) once for each array elements.

        const numbers = [1,2,3,4,5,6];
        numbers.forEach(myFunction);

        function myFunction(value,index,array){
            console.log(value);
        }

        Note: callback function take 3 arguments:
            * the item value.
            * the item index.
            * the array itself.
            function myFunction(value,index,arr){
                console.log(value+"=>"+index);
                // console.log(arr);
            }


        3. for of loop: through the values of an iterable object.
        const cars = ["BMW", "Volvo","Mini"];
       
        for(let x of cars){
            console.log(x);
        }









String in javascript:
    there are two way to create string in javascript.
        1. By string literal
        2. By string object(using new keyword);

    1. By strin gliteral:
        let stringName = "Here is the String literal values";

    2. By string object(using new keyword):
        let stringName = new String("This is String create using new Keyword);
        //new keyword is used to create instance of string.


    

    string methods:
        1. charAt():        provide the char value present at the specified index.
        2. charCodeAt():    provide the Unicode value of a character of specified index.
        3. concat():        provide a combination of two or more string.
        4. indexOf():       provide the posistion of char value present in the given string.
        5. lastIndexOf():   provide char position by searching a char from the last position.
        6. search():        searches a specified regular expression in a given string and 
                            returns that rugular expression if a matche occurs.
        7. match():         search a specified regular expression in a given string and returns
                            that regular expression if a match occurs.
        8. replace():       it replace a given string with the specified replacement.
        9. substr():        fetch the part of the given string on the basis of the
                            specified index.
        10.slice():         fetch the part of the given string. it allow us to assign 
                            positive as well negative index.
        11.toLowerCase():   convert the given string into lowecase letter.
        12.toUpperCase():   converts given string into upper case.
        13.toString():      provide a string representing the particular object.
        14.valueOf():       provide the primitive value of string object.
        15.split():         split a string into substring array, then returns that newly 
                            created array.
        16.trim():          trims the white space from the left and right side of the string.


        Example:
            let str = "javascript";
            let str2 = "concat example";


            console.log(str.charAt(2));
            
            let s3 = str.concat(str2);
            console.log(s3);
            console.log(str.indexOf('s'));
            console.log(str.lastIndexOf('a'));
            console.log(str.toLowerCase());
            console.log(str.toUpperCase());


            slice(): method. pass beginIndex and endIndex[excluded].
            let s1 = "sheeshpal singh saini";
            let s2 = s1.slice(2,5);     //give "ees";




            trim(): removes leading and trailing whitespaces from the string.
            let s1 = "          javascript          ";
            let s2 = s1.trim();

            console.log(s2);

    






Array in javaScript:
    array is a special variable, which can hold more than  one values.


    methods:
        1. toString():          converts an array to string(comma separated).
        2. join():              also joins all array elements into string.
                                behaves like toString,in addition we can specify separator.
        3. pop():               removes the last element. and return it.
        4. push():              add a new elements at the end. and return new arr length.
        5. shift():             remove the first elements and shift all element to lower index.
                                and return the value that was shifted out.
        6. unshift():           add new element to an array at beginning. and unshifting older index.
                                and return the new array length.
        7. length:              property provide the total items inside array.
        8. concat():            create a new array by mergin existing array. it does not changes
                                the existing arrays. it always returns a new array.
                                it can take any number of array arguments.
        9. splice():            add new items to an array.
        10.slice():             slices out a piece of an array.
        

        Example:
            const fruits = ["Banana","Orange","Apple","Mango"];
            console.log(fruits.toString());

            console.log(fruits.join("*"));

            let poppedItem = fruits.pop();
            console.log(poppedItem);

            let length = fruits.push("kiwi");

            let fruit = fruits.shift();
            console.log(fruit);

            let length = fruits.unshift("Lemon");
            console.log(length);


            const a1 = ['a1','a1','a1','a1'];
            const a2 = ['a2','a2','a2','a2'];

            const Arr = a1.concat(a2); 
            console.log(Arr);

            const a3 = ['a3','a3','a3','a3'];
            const Arr = a1.concat(a1,a2);

            const Arr = a1.concat("Sheeshpal");




    splice(): add new items. return an array with deleted items.
            fruits.splice(2,0,"Lemon","Kiwi");

            * first parameter(2) defines the position where new element should be added(spliced in).
            * second parameter(0) define how many elements should be removed.
            * the rest of the parameter ("Lemon","Kiwi") define the new elements to be added.



            removing element using splice:
                fruits.splice(0,1);    

            * first parameter(0) define the position where new elements should be added.
            * the second parameter(1) define how many elements should be removed.
            * the rest of the parameters are omitted. No new new elements will be added.


    slice(): remove items.

            const newArr = fruits.slice(1);

            * slice() method create a new array.
            * slice() methods doesn't remove any elements from the source array.

            the slice() method can take two arguments like slice(1,3).

            then select elements from the start argument, and up to (excluded) the end argument.

            const newArr = fruits.slice(1,3);

            Note: if the end argument is omitted, linke in the first example, slice() method slice out
            rest of the array.


            for find max and min:
                let arr = [5,6,8,9,4,6,3,2,8];
                console.log(Math.min(...arr));
                console.log(Math.max(...arr));




    --------------**************** Object data type in javascript:
        In javaScript almost everything is an object.

            * Boolean can be objects (if defined with new keyword).
            * Numbers can be objects ( " ).
            * String can be objects( " ).
            * Dates are always objects.
            * Maths are always objects.
            * Regular expression are always objects.
            * Arrays are always objects.
            * Function are always objects.
            * Objects are always objects.


            javascript define five types of primitive data types:
                * string.
                * number
                * boolean
                * null
                * undefined

            Javascript variable can contain single values.
                let person = "Sheeshpal Singh";

            Javascript variables can also contain many values.
            Objects are variables too. But objects can conatin many values.
            Object value are written as key:value pairs.

            let person = {
                firstName = "Sheeshpal",
                lastName = "Singh",
                age = 23,

            }


        Note: It is a common practice to declare objects with the const keyword.

        Object written as name:value pairs are similar to: python dictionary.



        Creating a Javascript Object:
            there are different ways to create new objects:
                * create a single object, using an object literal.
                * create a single object, with the keyword new.
                * Define an object constructor, and then create objects of the constructed type.
                * create an object using  Object.create().

        1. Using an Object Literal:
            const person = {
                firstName : "Sheeshpal",
                lastName : "Singh",
                age : 23
            };

            console.log(person);




            const person ={};       //creating empty object.

            person.firstName = "Sheeshpal";
            person.lastName = "Singh";
            person.age = 23;

        


        2. Using javascript new keyword:
            const person = new Object();
            person.firstName = "Sheeshpal";
            person.lastName = "Singh";
            person.age = 23;

        Note: for readability, simplicity and execution speed, use the object literal method.

        Javascript objects are mutable:
            const x = person;       //will not create a copy of person.

            x simply point to person also. if we canges in x it show effect in person also.

            x.age = 10;     //change in person object also.




    -----------------oops in javascript:
        we don't need let,const,var and function for declaration.



        Defining a classes:
            class ClassName{
                //code goes here.
            }

        
        Class Instantiation:
            class Person{
                //code goes here.
            }

            const person = new Person();
            console.log(person);


        Class Constructor:
            class person{
                constructor(firstName, lastName){
                    console.log(this);
                    this.firstName = firstName;
                    this.lastName = lastName;
                }
            }

            const person = new Person();
            console.log(person);

            const person1 = new Person("Sheeshpal","Singh");
            const person2 = new Person("Sonu","Singh");
            const person3 = new Person("Rahul","Kumar");
            console.log(person1);
            console.log(person2);
            console.log(person3);

        Adding more properties to the class:
            class Person{
                constructor(firstName,lastName, age, country, city){
                    console.log(this);
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.age = age;
                    this.country = country;
                    this.city = city;
                }
            }
            const person1 = new Person("Sheeshpal","Singh",23,"India","Dhanaura");
            console.log(person1);


    Default values with constructor:
        class Person{
            constructor(
                firstName = "Sheeshpal",
                lastName = "Singh",
                age = 23,
                country = "India",
                city = "Dhanaura"
            ){
                this.firstName = firstName;
                this.lastName = lastName;
                this.age = age;
                this.country = country;
                this.city = city;
            }
        }
        const person1 = new Person();   //it will take the default values.
        const person2 = new Person("Sheeshpal","Singh",23,"India","Dhanaura");
        console.log(person1);
        console.log(person2);

    

    Class methods:
            class Person{
                constructor(firstName,lastName,age,country,city){
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.age = age;
                    this.country = country;
                    this.city = city;
                }
                getFullName(){
                    const fullName = this.firstName+" "+this.lastName;
                    return fullName;
                }
            }
            const person1 = new Person("Sheeshpal","Singh",23,"India","City");
            const person2 = new Person("Rahul","Kumar",21,"India","City");

            console.log(person1);
            console.log(person2);





    getter and setter:
        class Person{
            constructor(firstName,lastName,age,country,city){
                this.firstName = firstName;
                this.lastName = lastName;
                this.age = age;
                this.country = country;
                this.city = city;
                this.score = 0;
                this.skill = [];
            }
            getFullName(){
                const fullName = this.firstName+" "+this.lastName;
                return fullName;
            }
            get getScore(){
                return this.score;
            }
            get getSkills(){
                return this.skills
            }
            set setScore(score){
                this.score +=score;
            }
            set setSkill(skill){
                this.skills.push(skill);
            }
            getPersonInfo(){
                let fullName = this.getFullName()
                let skill
            }
        }






    Static method:
        class Person{
            constructor(firstName,lastName,age,country,city){
                this.firstName = firstName;
                this.lastName = lastName;
                this.age = age;
                this.country = country;
                this.city = city;
                this.score = 0;
                this.skill = [];
            }
            getFullName(){
                const fullName = this.firstName+" "+this.lastName;
                return fullName;
            }
            get getScore(){
                return this.score;
            }
            get getSkills(){
                return this.skills
            }
            set setScore(score){
                this.score += score;
            }
            set setSkill(skill){
                this.skills.push(skill);
            }

            static favoriteSkill(){
                const skills = ['HTML','CSS','JS','React','Python','Node'];
                const index = Math.floor(Math.random()*skills.length);
                return skills[index];
            }
            static showDateTime(){
                let now = new Date();
                let year = now.getFullYear();
                let month = now.getMonth()+1;
                let date = now.getDate();
                let hours = now.getHours();
                let minutes = now.getMinutes();
                if(hours<10){
                    hours='0'+hours
                }
                if(minutes<10){
                    minutes='0'+minutes;
                }
                let dateMonthYear = date+'.'+month+'.'+year;
                let time = hours+':'+minutes;
                let fullTime = dateMOnthYear+' '+time;
                return fullTime;
            }
        }

        console.log(Person.favoriteSkill());
        console.log(Person.showDateTime());

        Inheritance:
            class ChildClassName extends{
                //code goes here;
            }







---------------------------------js in css and html------------------------------
* DOM : when a web page is loaded, the browser create a Document Object Model of the page.
Note: In this DOM tree, the document is the root node or object.


--------********** Select Element by ID: select one element at a time.

    let ele = document.getElementById("give_id_here");      //get reference in ele of give id.
    console.log(ele);                                       //print select complete tag.

    Note: if this types of id not present in DOM then it return simple null. by this we can check id is present or not.
          in 'ele' complete element is selected as object. we can apply properties on this.



    //get inner html of element.
     console.log(ele.innerHTML);    //print content of element.
    
    //set inner html of element.
     ele.innerHTML = "Hello";



-------*********** select Element by "class Name":
    let ele = document.getElementsByClassName("class_Name_here");       //select all element with same className. 
                                                                        //so it store all of them like an collection item[array].
    console.log(ele);
    cosnole.log(ele.length);        //print length of array.

    for(let i=0;i<ele.length;i++){
        console.log(ele[i].innerHTML);
    }
    or
    for(let x of ele){
            console.log(x.innerHTML);
        }

    for(let x of ele){
        x.innerHTML = "Hello";
    }


    let ele = document.getElementsByClassName("c1 c2 ..");          //select that element in which all these class is present.


--------************ select Element by "Tag Name":
    let ele = document.getElementsByTagName("p");                //select all tag which is same this name.

    for(let x of ele){
        x.innerHTML = 'Hello";
    }

    select only that tag which come inside div tag.
    //first select div.
    let div1 = document.getElementById("div1");
    //now select by tag name inside div element.
    let ele = div1.getElementsByTagName("h2");      //select all h2 inside div1 id.

    for(let x of ele){
        x.innerHTML = "Hello";
    }


--------**************** Query Selector:

<h2 class="intro">Heading 1</h2>
<div id="div1">
    <p class="intro">paragraph-1</p>
    <h2 class="intor">heading-2</h2>
    <p>paragraph-2</p>
    <h2>headnig-3</h2>
    <p class="intor">paragraph-3</p>
</div>

//i need to select only those p which have intor className.

let ele = document.querySelector("p.intro");        //only select first which is satisfy the condition.
ele.innerHTML = "Hello";
console.log(ele);

//for select all those satisfy the condition.
let ele = document.querySelectorAll("p.intro");     //make a collection of array item.

for(let x of ele){
    x.innerHTML = "Hello";
}


---------************* Traversing elements:
    select any id element then select it's parent and child and sibling with the helps of it.
    <ul>
        <li id="intro">list-1</li>
        <li>list-2</li>
        <li>list-3</li>
        <li>list-4</li>
    </ul>
    <ul>
        <li>list-a</li>
        <li>list-b</li>
        <li>list-c</li>
        <li>list-d</li>
    </ul>
    

    //now with the help of "intro" id select its parent "ul" tag.
    let ele = document.getElementById("intor);
    let prt = ele.parentElement;    //select only parent element by its child.
    console.log(prt);       
    console.log(ele);


    -------Now try to select child by it's parent.
   <ul id="intro">
        <li>list-1</li>
        <li>list-2</li>
        <li>list-3</li>
        <li>list-4</li>
    </ul>
    <ul>
        <li>list-a</li>
        <li>list-b</li>
        <li>list-c</li>
        <li>list-d</li>
    </ul>

    let ele = document.getElementById("intro");
    let firstNode = ele.firstElementChild;               //select first child.
    let lastNode = ele.lastElementChild;                //select last child.

    console.log(firstNode);
    console.log(lastNode);

    ---------- select all childs of parents tag.
    let ele = document.getElementById("intro");
    let node = ele.children;                        //select all chillren and collect into array.
    console.log(node);
    //work on it with the help of for loop.



    ---------- select sibling.
<ul>
    <li>list-1</li>
    <li id="intro">list-2</li>
    <li>list-3</li>
    <li>list-4</li>
</ul>

let ele = document.getById("intro");        //select id element.
let node = ele.previousElementSibling;      //select previous sibling
let node = ele.nextElementSibling;          //select next sibling
console.log(ele);


------------*********** Manipulation selected elements:
    1. innerHTML : user to select or write inside the elements.this is a property.
        example:
            <div id="intro">
                <p>Hello this is a p tag.</p>
            </div>

            let ele = document.getElementById("intro");
            console.log(ele.innerHTML);



-----------*********** create and Append element:
<div id="intro">
    <p>Hello this is a p tag.</p>
</div>

let ele = document.getElementById("intro");
let h1 = document.createElement('h1');          //which do you want to create pass that into method.

ele.appendChild(h1);        //append an empty h1 tag.

    -----
    let text = document.createTextNode("This is h1 tag");   //append this inside h1.
    h1.appendChild(text);       //append text.



    -----******** adding class and id:
        h1.className = "try";       //add try class.
        h1.className = "try pi";    //add multiple class.
        h1.id="intro1";             //add id into h1 tag.


    ----------******** creating next :
    1.
        let text = document.createTextNode("This is h1 tag");   //method.
    
    2.
        h1.textContent = "Write all content here which do you want to put inside tag";  //this is property.

        //it also help for read content from tag.

        let pra = document.getElementById("p1");
        console.log(pra.textContent);               //read content.




    ex: add new item in list.
<ul id="list">
    <li>list 1</li>
    <li>list 2</li>
    <li>list 3</li>
    <li>list 4</li>
</ul>

let list = document.getElementById("list");
let item = document.createElement("li");
item.textContent = "new list 5";

list.appendChild(item);

-----------************** insert before an element: need to select parent. second need position.
    <ul id="list">
        <li>list -1</li>
        <li>list -2</li>
        <li>list -3</li>
        <li>list -4</li>
    </ul>
         
    let list1 = document.getElementById("list");
    let item = document.createElement("li");
    item.textContent = "new list 5";

    let pos = list1.firstElementChild;
    list1.insertBefore(item,pos);       //(which,where).

    let pos = list1.firstElementChild.nextElementSibling;   //sencond element select.
    list1.insertBefore(item,pos);

    let pos = list1.firstElementChild.nextElementSibling.nextElementSibling;   //third element select.
    list1.insertBefore(item,pos);

    -----before unorder-list
    let parent = document.body;
    let ele = document.createElement("h2");
    ele.textContent = "This is new Element";    //element.
    let list = document.getElementById("list"); //position

    parent.insertBefore(ele,list);



---------*********** Remove Child Element:
    <ul id="menu">
        <li>Home</li>
        <li>Product</li>
        <li>About us</li>
    </ul>

    let parent = document.getElementById("menu");
    let ele = parent.firstElementChild;             //target Home item.

    parent.removeChild(ele);        //remove Home;

    let ele = parent.firstElementChild.nextElementSibling;  //target second item[product].
    parent.removeChild(ele);


    ------remove complete list.
    document.body.removeChild(parent);      //remove complte list.



------------************ clone Element:
<ul id="menu">
    <li>Home</li>
    <li>Services</li>
    <li>About</li>
    <li>Contact</li>
</ul>

    let menu = document.getElementById("menu");
    let cloneEle = menu.cloneNode(true);                //clone list. true-> complete, default->false[only targated ele]
    let cloneEle2 = menu.cloneNode(true);                
    console.log(cloneEle);
    console.log(cloneEle2);     //

    cloneEle.id="mobile-menu"   //change id;
    document.body.appendChild(cloneEle);

-----------************ Replace element:
<ul id="menu">
    <li>Home</li>
    <li>Product</li>        //replace it 
    <li>About</li>
    <li>Contact</li>
</ul>

let parent = document.getElementById("menu");
let item = document.createElement("li");        //create new element
item.textContent = "Services";                  //add content in new element.
let replace = parent.firstElementChild.nextElementSibling;      //select product.

parent.replaceChild(item,replace);      //(Which_add,Which_replace);




----------************** Insert AdjacentHTML:it have four position. and automatic convert
                                              text to html;


//beforebegin
<div id="intro">                //selected.
    //afterbegin
    <h2>Heading:01</h2>
    <h2>This is a p tag</h2>
    //beforeend
</div>
//afterend.

let ele = document.getElementById("intro");
let html = "<h1>New h1</h1>";

ele.insertAdjacentHTML('beforebegin',html);   //it take two parameter.
ele.insertAdjacentHTML('afterbegin',html);
ele.insertAdjacentHTML('beforeend',html);
ele.insertAdjacentHTML('afterend',html);







--------------*************** change Attribute:
    <button id="btn">Send</button>

    let btn = document.getElementById("btn");

    //set attribute.
    btn.setAttribute("name","btn1");         //take two parameter,name & value
    btn.setAttribute("class","btn1");       //set class attribute.

    //get attribute value.
    let val = btn.getAttribute("name");
    console.log(val);

    //remvoe attribute.
    let val = btn.removeAttribute("name");
    console.log(val);

    //check that attribute present or not.
    let val = btn.hasAttribute("name");     //return true or false.
    console.log(val);




----------************* inline style by js:
    let btn = document.getElementById("btn");
    btn.style.cssText = "background-color:red; color:white;";       //aply inline css. it remove previous css.
    btn.style.cssText +="background-color:red;color:white;";        //now it contain previous css also.


    btn.setAttribute("style","background-color:red;color:white");   //it work also same.

    btn.style.background = "red";   //another way.it not remove previous css.
    btn.style.color = "white";


---------************* Get Computed CSS:
<style>
    #btn{
        background-color:red;
        color:white;
    }
</style>

<button it="btn" name="form1">Send</button>

let btn = document.getElementById("btn");
let css = getComputedStyle(btn);            //get all css by default and user define also.
console.log(css);    
console.log(css.color);     //print color.


-----------************* CSS classes:
<style>
    .color{
        background-color:grey;
        color:blue;
    }   
    .dim{
        border : 1px solid red;
        padding: 100px;
    } 
</style>


<div id="box" class = "color dim">
    <p>This is a dummy text!</p>
</div>


let box = document.getElementById("box");
console.log(box.className);         //print all classes;

box.className += " dim";     //add more one class. provide space also.

console.log(box.classList);     //print all classes in the form of array.

for(let css of box.classList){
    console.log(css);
}



box.classList.add("dim");       //add class by classList.
box.classList.remove("dim");    //remove dim class.
box.classList.replace("dim","color");   //replace dim to class.

let result = box.classList.contains("color");       //if contains color css then return true otherwise return false.
console.log(result);


box.classList.toggle("dim");        //toggle dim class. if present remove. not present then add it.*********




------------************** Width and Height of an element:
let box = document.getElementById("box");

//with border.
let width = box.offsetWidth;
let height = box.offsetHeight;

console.log(width);
console.log(height);

//without border.
let width = box.clientWidth;
let height = box.clientHeight;

console.log(width);
console.log(height);




------------**********DOM Events: events are actions that occur as a result of the user
action or as result of state change of the elemetns of a DOM tree.
Example of HTML events:
    * When a user clicks the mouse.
    * When a web page has loaded.
    * When an image has been loaded.
    * When the mouse moves over an element.
    * When an input field is changed.
    * When an HTML form is submitted.
    * When a user strokes a key.

    Events:
        1. onclick          occurs when element is clicked.
        2. ondblclick       occurs when element is double-clicked.
        3. onfocus          occurs when an element gets focus such as button,input,textarea etc.
        4. onblur           occurs when form looses the focus from an element.
        5. onsubmit         occurs when form is submitted.
        6. onmouseover      occurs when mouse is moved over an element.
        7. onmouseout       occurs when mouse is moved out from an element(after moved over).
        8. onmousedown      occurs when mouse button is pressed over an element.
        9. onmouseup        occurs when mouse button is released from an element(after mouse is pressed).
        10.onload           occurs when document, object or frameset is loaded.
        11.onunload         occurs when body or frameset is unloaded.
        12.onscroll         occurs when document is scrolled.
        13.onresized        occurs when document is resized.
        14.onreset          occurs when from is reset.
        15.onkeydown        occurs when key is being pressed.
        16.onkeypress       occurs when user presses the key.
        17.onkeyup          occurs when key is released.
        