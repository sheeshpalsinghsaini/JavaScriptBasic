// import {name} from './modules/user.js';

// import {code} from './modules/user.js';

//shortcut
// console.log(name);//perfectly work

// code();



// import {withdraw,deposit} from './modules/account.js';
// import {withdraw as wd,deposit as dp} from './modules/account.js';//we can use alias of export name

// withdraw();
// deposit();

// wd();
// dp();

//other shortcut

// import * as usr from './modules/user.js';

// import {default as df } from './modules/user.js';

// usr.code();

// usr.default();

// df();//called default function.

import { circle,rectangle,triangle,square } from "./JS/module/shape.js";

circle();
triangle();
rectangle();
square();