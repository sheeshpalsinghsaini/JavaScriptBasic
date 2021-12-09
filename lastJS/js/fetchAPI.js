
console.log("Hii!");


//button with id myBtn
let myBtn = document.getElementById("myBtn");


//div with id content
let content = document.getElementById("content");





// function getData(){
//     url = "./js/sheeshpal.text";
//     fetch(url).then((response)=>{
//         console.log("inside First then");
//         return response.text();
//     }).then((data)=>{
//         console.log("inside second then");
//         console.log(data);
//     })
// }



function getData(){
    url = "https://api.github.com/users";
    fetch(url).then((response)=>{
        console.log("inside First then");
        return response.json();
    }).then((data)=>{
        console.log("inside second then");
        console.log(data);
    })
}













getData();


/*
flex
grid

pesudo
media queri.
querySelector


*/




