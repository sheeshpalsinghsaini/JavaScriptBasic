export let name = "Sheeshpal Singh Saini";
let age = 22;

// export function code(){//give permission to other file for acces it.
function code(){
    console.log("Coding.........");
}

function cook(){
    console.log("cooking..........");
}

//export shortcut.

export{code,cook};



//create a defualt funciton

export default function(){//no name of default function.
    console.log("default function called.......");
}