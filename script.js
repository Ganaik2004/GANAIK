// First
let navbar = document.querySelector(".navbar");
let search = document.querySelector(".bx-search");
search.addEventListener('click', () => {
    navbar.classList.toggle("showInput")
    if (navbar.classList.contains("showInput")) {
        search.classList.replace("bx-search", "bx-x")
    } else {
        search.classList.replace("bx-x", "bx-search")
    }
});
// Secound
let darkmode = document.querySelector(".dark-light-mode");
let body = document.querySelector("body");
let bright1 = document.querySelector(".bxs-sun");
darkmode.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        bright1.classList.replace("bxs-sun", "bxs-moon")
    } else {
        bright1.classList.replace("bxs-moon", "bxs-sun")
    }
});
// Third
let link = document.querySelector(".links");
let menu = document.querySelector(".bx-menu");
menu.addEventListener('click', () => {
    link.classList.toggle("down")
    if (menu.classList.contains("bx-menu")) {
        menu.classList.replace("bx-menu", "bx-x");
    } else {
        menu.classList.replace("bx-x", "bx-menu");
    }
})
// Forth
window.onscroll = () => {
    link.classList.remove("down")
    menu.classList.replace("bx-x", "bx-menu");
}
// Fifth
var typed = new Typed('#element', {
    strings: ['Web Developer.', 'Web Designer.', 'Problem solver.', 'Web Developer.'],
    typeSpeed: 100,
});
// Sixth
let tabLinks = document.getElementsByClassName("tab-links");
let tabContent = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tabLinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcon of tabContent) {
        tabcon.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
// Seven
const header = document.querySelector("nav");
const scr1 = document.querySelector(".scroll-btn");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 200)
    scr1.classList.toggle("opa", window.scrollY > 2200)
});
// Eight
// let scr11 = window.pageYOffset;  
// window.onscroll = function(){
//     let scr22 = window.pageYOffset;
//     if(scr11>scr22){
//     document.querySelector("nav").style.display = "block";
//     }else{
//         document.querySelector("nav").style.display = "none";
//     }
//     scr11=scr22;
// }