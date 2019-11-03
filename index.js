
let suit = ["&#9824", "&#9827", "&#9829", "&#9830"];
let number = [2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "J", "Q", "K"];

let x = Math.floor(Math.random() * suit.length);
console.log(suit[x]);
let y = Math.floor(Math.random() * number.length);
console.log(number[y]);

document.querySelector(".leftdisplaysuit").innerHTML=suit[x];
document.querySelector(".centerdisplaynumber").innerHTML=number[y];
document.querySelector(".rightdisplaysuit").innerHTML=suit[x];
