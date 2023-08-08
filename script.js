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
    strings: ['Web Developer.', 'Web Designer.', 'Problem solver.'],
    typeSpeed: 150,
    backdelay:4000,
    loop:true,
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
    scr1.classList.toggle("opa", window.scrollY > 700)
});
// Eight
const accordians = document.querySelectorAll('.accordian');
accordians.forEach((accordian) =>{
    const icon = accordian.querySelector('.icon');
    const answer = accordian.querySelector('.container1');  
    accordian.addEventListener('click',() => {
      if(icon.classList.contains('active')){
        icon.classList.remove('active');
             answer.style.maxHeight = null;
      }else{
        icon.classList.add('active');
             answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
});
// nine
ScrollReveal({
    // reset:true,
    distance:'100px',
    duration:1000,
    delay:100,
})
ScrollReveal().reveal('.sub-title,.about-col-2>h1,.sub-titl,',{origin:'top'});
ScrollReveal().reveal('.contact-right,.about-col-2>p,.tab-titles,.content-collection,.acc2,.end-section>p,.navbar',{origin:'right'});
ScrollReveal().reveal('.header-text,.about-col-1>img,.contact-left,.acc1,.end-section>h2,.end-icon',{origin:'left'});
ScrollReveal().reveal('.swiper-slide,.services-list,footer',{origin:'bottom'});