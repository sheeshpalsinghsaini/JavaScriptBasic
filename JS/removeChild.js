// let parent = document.getElementById("menu");
// console.log(parent);

// let ele = parent.firstElementChild;
// let ele = parent.firstElementChild.nextElementSibling;
// parent.removeChild(ele);
// console.log(ele);


//remove complete list

// document.body.removeChild(parent);



// =========================Clone or copy element====================

// let menu = document.getElementById("menu");

// let cloneEle = menu.cloneNode(false);//copy only parent not child
// let cloneEle = menu.cloneNode(true);//copy parent as well as child
// console.log(cloneEle);


//for add in body simple append in body child

// document.body.appendChild(cloneEle);
//change id of clone
// cloneEle.id="clone-menu";

// ===============================Replace Element in js===============
// let parent = document.getElementById("menu");
// let item = document.createElement("li");
// item.textContent = "Services";


// replace product by services.
// let replace = parent.firstElementChild.nextElementSibling;
// parent.replaceChild(item,replace);





// ======================= Insert AdjacentHTML =========================
/*
>there are four position in this method. so we can insert at four position.

1.beforebegin
2.afterbegin
3.beforeend
4.afterend

*/

let ele = document.getElementById("intro");
let html = "<h1>New H1</h1>"
ele.insertAdjacentHTML('beforebegin',html);
ele.insertAdjacentHTML('afterbegin',html);
ele.insertAdjacentHTML('beforeend',html);
ele.insertAdjacentHTML('afterend',html);