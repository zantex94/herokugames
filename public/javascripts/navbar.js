
import {$} from './module.js';
'use strict'

 export function createHeader(){
let head = $('navigationHeader');
head.setAttribute("class", "navigationBar");
let l1 = document.createElement("li");
let a1 = document.createElement("a");
let l2 = document.createElement("li");
let a2 = document.createElement("a");

l1.setAttribute("class", "navigationList");
a1.setAttribute("class", "navigationText");
a1.setAttribute("href", "frontpage.html");
a1.innerHTML = "Forside";
l1.appendChild(a1);

l2.setAttribute("class", "navigationList");
a2.setAttribute("class", "navigationText");
a2.setAttribute("href", "gaetettal.html");
a2.innerHTML = "Gæt et tal";
l2.appendChild(a2);

head.appendChild(l1);
head.appendChild(l2);



}

