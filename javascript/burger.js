"use strict";
// burger.js
export function initBurger() {
    let burgerIcon = document.getElementById("burgerIcon");
    let mainNav = document.getElementById("mainNav");

    burgerIcon.addEventListener("click", function () {
        console.log(error);
        mainNav.classList.toggle("showNav");
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            mainNav.classList.remove("showNav");
        }
    });
}