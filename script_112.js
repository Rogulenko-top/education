"use strict";

const   btn = document.querySelector('.btn'),
        eleme = document.querySelector('.box');

let pos = 0;
function myAnimation() {
    pos++;
    eleme.style.top = pos + "px";
    eleme.style.left = pos + "px";

    if(pos < 300) {
        requestAnimationFrame(myAnimation);
    }
}

btn.addEventListener('click', () => requestAnimationFrame(myAnimation));

let id = requestAnimationFrame(myAnimation);
cancelAnimationFrame(id);