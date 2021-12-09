/*
Promise:
    -resolve
    -reject
    -pending


*/

// function func1(){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             const error = true;
//             if(!error){
//                 console.log("Function: Your promise have been resolved");
//                 resolve("YOur Response is resolve");
//             }
//             else{
//                 console.log("Function: Your promise has not been resolved");
//                 reject("Reason: Sorry data not found");
//             }
//         });
//     });
// }


// func1().then(function(res){
//     console.log("Sheeshpal: Thanks for resolving "+res);
// }).catch(function(error){
//     console.log("Sheeshpal: Very bad bro! "+error );
// });



// let myPromse = new Promise(function(myResolve,myRejected){
//     let error = false;

//     if(!error){
//         myResolve("Successfully resoved...........");
//     }
    
//     else{
//         myRejected("Sorry!!!!!!!!11");
//     }
// })


// myPromse.then(
//     function(value){console.log("resovlved "+value)},
//     function(error){console.log("Note resolved "+error)}
// )


// let str = "this    the   best    way of    learniing  ";
 
// let arr = str.split(" ");
// console.log(arr);

// let cleanList = arr.filter((ele)=>{
//     return ele!="";
// })

// console.log(cleanList);
// str = cleanList.toString();
// console.log(str);
// console.log(arr);
// console

// console.log(str.trim(" "));
// cleanList = str.trim(" ");
// console.log(cleanList);
