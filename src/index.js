import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";
home();
//menu();
//contact();

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const contactBtn = document.querySelector("#contact-btn");
const content = document.querySelector("#content");

homeBtn.addEventListener("click",()=>{
    content.innerHTML = "";
    home();
});

menuBtn.addEventListener("click",()=>{
    content.innerHTML = "";
    menu();

});

contactBtn.addEventListener("click",()=>{
    content.innerHTML = "";
    contact();
});
console.log("Hjello world");