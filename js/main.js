"use strict";

// --- 1. DOM-referenser ---

const menuBtn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

// --- 2. Eventlyssnare ---
menuBtn.addEventListener("click", function () {

    if(menu.classList.toggle("open")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});


