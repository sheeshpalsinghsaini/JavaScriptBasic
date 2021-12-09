// ========================Change Attribute of any element==============================
//everything which is assign by = operator in HTML is attributes.
// let btn = document.getElementById("btn");

// btn.setAttribute("name","form");
// btn.setAttribute("class","onclick");

// ------------------ get attribute value which is already exist----------------------
// let btn = document.getElementById("btn");
// let btnName=btn.getAttribute("name");
// console.log(btnName);

// ---------------------- remove attribute ------------------------------------

// let btn = document.getElementById("btn");
// let val = btn.removeAttribute("name");

//for check that there is any attribute is present or not
// let val = btn.hasAttribute("name");return true

// let val = btn.hasAttribute("class");//return false

// console.log(val);

// ==================================Change inline CSS=================================

// let btn = document.getElementById("btn");

// btn.style.cssText="background:red";//if there is any css properties then it reset that.
// btn.setAttribute("style","color:orange;background-color:black");
// btn.style.color="purple";
// btn.style.color="red";
// btn.style.background="black";
// btn.style.cssText+="font-size:20px";//addin in current css


// ========================== get computed css ===========================
 
// let btn = document.getElementById("btn");

// let css = getComputedStyle(btn);
// console.log(css);
// console.log(css.color);
// console.log(css.background);

// =========================== change css by class=======================

// let box = document.getElementById("box");
// box.className+=" new";//add new class
// console.log(box.className);

//other way to get all classes
// console.log(box.classList);

// for(let css of box.classList){
//     console.log(css);
// }

//we can also add class using classList
// box.classList.add("new");
//remove class by classList
// box.classList.remove("new");
//replace class
// box.classList.replace("new","New");

// let result = box.classList.contains("New");
// console.log(result);//return true if contain otherwise return false.

// box.classList.toggle("new");//if class contain then remove if not then add it.
// box.classList.toggle("new");//if class contain then remove if not then add it.


// ========================== Width and Height of an Element======================
/*      two types of height:
        1. Offset Height:include border, padding and margin
        2. Client Height:include padding. border and margin not include.

*/

// let box = document.getElementById("box");

// let width = box.offsetWidth;
// let height = box.offsetHeight;
// console.log(width,height);



// //without border and margin
// let clientWidth = box.clientWidth;
// let clientHeight = box.clientHeight;
// console.log(clientWidth,clientHeight);


// ======================================DOM event=============================
/* DOM events are actions that occur as a result of  the user action or as result of state change of the elements of a DOM tree.

Example of HTML events:

    -When a user clicks the mouse.
    -When a web page has loaded 
    -When an image has been loaded.
    -When the mouse moves over an element.
    -When an input field is changed.
    -When an HTML form is submitted.
    -When a user strokes a key.

    


*/
//event we can apply multiple event at anyone.

//onclick[inline] for click button write attribute in button

// function btnClick(){
//     // alert("Button was clicked!");
//     console.log("Button was Clicked!");
// }


//second method using addEventListener
// let btn = document.getElementById("btn");

// btn.addEventListener("click",btnClick);

// we can use annomous function inside addEventListener 

// btn.addEventListener('click',function(){
//     console.log("Button was Clicked!");
// });





//using arrow function
// btn.addEventListener("click",()=>{
//     console.log("Button was clicked");
// });


//mouse hover event

// btn.addEventListener('mouseover',()=>{
//     // alert("mouseover is activated");
//     console.log("mouseover is activated!")
// });


// btn.addEventListener('mouseout',()=>{
//     // alert("mouseout is activated");
//     console.log("mouseout is activated!");
// });


// ------------ Remove EventListener -------------
//we can add multiple event at same time.

// btn = document.getElementById("btn");

// btn.addEventListener('click',()=>{
//     console.log("Clicke 1 is activated!");
// });
// function click2(){
//     console.log("Click 2 is activated!");
// }
// btn.addEventListener('click',click2);

// btn.removeEventListener('click',click2);

// ----------------------------------page load events---------------------
/*
DOMContentLoaded :- the browser fully loaded HTML and completed building the DOM tree. However,
it hasn't loaded external resources like stylesheets and images. In this event, you can start selecting DOM 
nodes or initialize the interface.
load :- the browser fully loaded the HTML and also external resources like images and stylesheets.
When you leave the page, the following events fire in sequence.
*/

// window.addEventListener('DOMContentLoaded',function(){
//     console.log("Dom tree created");
// });

//with the help of this we can target any particular element simple replace window with that variable element.
// //this event happen only when page is fully loaded
// window.addEventListener('load',function(){
//     console.log("fully loaded");
// });

// ---------------------------------Mouse Event-----------------------------------------
//onclick->for left click
//oncontextmenu->right click
//ondblclick->for left double click
//onmousedown->when button click(down)
//onmouseup->when button click(up)
//onmouseover->when mouse in
//onmouseout->out mouse from area

// function fun(){
//     alert(" double  Clicked Event");
// }

// ----------------------------------KeyDown Event-------------------------------------

//know about which key is press.
// window.addEventListener('keydown',(e)=>{//by default padd an argument.
//     console.log(e.key);
// });


// ===================================scroll event================================

// window.addEventListener('scroll',()=>{
//     console.log("scrolling................");
// })
//or
// window.addEventListener('scroll',function(){
//     console.log("scrolling..........");
// });






//detect scroll up or scroll down........
// window.addEventListener('wheel',(e)=>{
//     // for vertical scrolling use delta y
//     // for horizontal scrolling use delta x
//     if(e.deltaY<0){
//         console.log("Scrolling Up.......");
//     }
//     else if(e.deltaY>0){
//         console.log("Scrolling down......");
//     }
// });



//for detect to how many pixel scroll down or not we can also do it.

// window.addEventListener('scroll',()=>{
//     if(window.pageYOffset>150){
//         document.body.style.background="black";

//     }else{
//         document.body.style.background="white";
//     }
// });



// =============================input event===============================

//when writing in input box then it call focus and if click anywhere any it goes into blur.


// let x = document.getElementById("myInput");

// x.addEventListener('focus',()=>{
//     x.style.background="yellow";
// });

// x.addEventListener('blur',()=>{
//     x.style.background="white";
// })

// x.addEventListener('change',()=>{
//     console.log(x.value);
// });

// x.addEventListener('input',function(){
//     console.log(this.value);
// });


// =======================================Event Bubbling & Event Capturing=======================
/* Event bubbling : In the event bubbling model, an event starts at the most specific element 
and then flows upward toward the least specific element(the document or even window).

when you click the button, the click event occurs in the following order:
    -button[least inner]
    -div with the id container
    -body
    -html
    -document


Event Capturing : In the event capturing model, an event starts at the least specific element and flows 
downward toward the most specific element.
    When you click the button, the click event occurs in the following order:
        -document
        -html
        -body
        -div with the id container
        -button


    addEventListener(event,function,useCapture);

    -the default value is false, which will use the bubbling propagation, when the value
    is set to true, the event uses the capturing propagation.

    */

    //if third parameter not pass then it false by default.meand it is bubbling default, childreen execute fierst.

    // let d = document.getElementById("myDiv");
    // let b = document.getElementById("btn");


    // b.addEventListener('click',()=>{
    //     console.log("Button Clicked..........");
    // });

    // d.addEventListener('click',()=>{
    //     console.log("div clicked....");
    // });

    // document.body.addEventListener('click',()=>{
    //     console.log("body clicked.......");
    // });

    // let d = document.getElementById("myDiv");
    // let b = document.getElementById("btn");


    // b.addEventListener('click',()=>{
    //     console.log("Button Clicked..........");
    // },true);

    // d.addEventListener('click',()=>{
    //     console.log("div clicked....");
    // },true);

    // document.body.addEventListener('click',()=>{
    //     console.log("body clicked.......");
    // },true);


    //we can do that only button is clicked.

    // b.addEventListener('click',(e)=>{
    //     console.log("Button Clicked..........");
    //     e.stopPropagation();
    // });

    // d.addEventListener('click',()=>{
    //     console.log("div clicked....");
    // });

    // document.body.addEventListener('click',()=>{
    //     console.log("body clicked.......");
    // });


    // ========================prevent default========================
    //use to change default behaviour

    // let link = document.getElementById("anchor");

    // link.addEventListener('click',(e)=>{
    //     console.log("link clicked......");
    //     e.preventDefault();
    // });


    // -----------------form validation------------------------
    // let form = document.getElementById("myForm");

    // form.addEventListener('submit',(e)=>{
    //     e.preventDefault();
    // })




    // ===================================BOM[Browser Object Model]=============================

    /*
    -The Browser Object Model(BOM) is used to interact with browser.
    -The window object represents a window in browser.
    -An Object of window is created automatically by the browser.


    All global JavaScript objects, functions, and variables with the var keyword automatically become members
    of the window object.

    Global variable are properties of the window object.
    Global functions are methods of the window object.


    */


    // let x ="HelloWorld!";//it variable but properties of window is also.
    // var x ="HelloWorld!";//only var variable is become window properties.
    // console.log(x);
    // console.log(window.x);


    // function xyz(){
    //     console.log("HelloWorld, Welcome to the Javascript Programming");
    // }

    // xyz();
    // window.xyz();//BOM/window is default propertie of browser if it not assign then it also worked.
    //every function which is declare directly they call call with widnow or without window.

    // ================================Window=============================

    /*
    window_size= two type size
                 -innerHeight & innerWidth[visual or working area of client(webpage visula) ]
                 -outerHeight & outerWidth[complete browser like all tab area and other things.]


    */


    // console.log("InnerWindow"); 
    // console.log(window.innerHeight);

    // console.log(window.innerWidth);

    // console.log("OuterWindow");

    // console.log(window.outerHeight);

    // console.log(window.outerWidth);


    // ==============================open new window===============================

    // let btn1 = document.getElementById("btn");
    // let btn2 = document.getElementById("btn2");
    // let btn3 = document.getElementById("btn3");
    // let url = "https://www.google.com";
    // let features = "height=500,width=500";
    // let win;
    // btn1.addEventListener('click',()=>{
    //    win= window.open(url,'google',features);//open(url,name,feature);,take it inot variable for close it.
    // });

    // btn2.addEventListener('click',()=>{
    //     window.open("https://www.yahoo.com",'google')//google means it change in google window and open yahoo link.
    // });

    // btn3.addEventListener('click',()=>{
    //     win.close();//now win cose
    // });



    // ===================================Time Out and Time Interval=======================
    //after some time show any message.
    //time out use for do anything after any interverl, only for one time.
    //time interval use do anything after every interval.

    // let tiemoutId=setTimeout(myFunction,5000);//(function,waiting time in milisecond). it return a id

    // function myFunction(){
    //     alert("HelloWorld");
    // }

    // clearTimeout(tiemoutId)//use to cancel event at that time. use in any condition.

    // var t1=setInterval(fun,200);

    // function fun(){
    //     console.log("HelloWorld!");
    // }

    // let btn1 = document.getElementById("btn");

    // btn1.addEventListener('click',()=>{
    //     clearInterval(t1);
    // });


    // =================Location Object=========================
    //it is sub object of window
    //use to get current page url(information).
    //redirect to other location.


    //get information

    // console.log(window.location.href) or
    // console.log(location.href);
    // console.log(location.pathname);
    // console.log(location.protocol);
    // console.log(location.port);


    //set information

    // function fun(){
    //     // window.location = "https://www.google.com";
    //     // location.href = "https://www.google.com";
    //     // location.assign("https://www.google.com");//it put entry into browser history
    //     // location.replace("https://www.google.com");//no history save.
    // }



    // function fun(){
    //     location.reload();//refresh page
    // }


    // ============================== Navigator Object ================================
    // use to get information about browser and capability[js run or not].
    //detect user browser.

    // console.log(navigator.appName);
    // console.log(navigator.appVersion);
    // console.log(navigator.appCodeName);
    // console.log(navigator.cookieEnabled);//cookie enabled or not.
    // console.log(navigator.userAgent);
    // console.log(navigator.platform);
    // console.log(navigator.javaEnabled);

    // ================================= Screen Object ===================================
    //information about screen view at that time.
    // console.log(screen.width);
    // console.log(screen.height);
    // console.log(screen.colorDepth);
    // console.log(screen.orientation);//view of screnn landscape or vertical.



   




    // ---------------------------------------------------------------------------------------------------

    // const sum = x=>y=>z=>x+y+z;

    
    // console.log(sum(2)(3)(4));