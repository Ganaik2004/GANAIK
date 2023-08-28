

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
    let collectLink = document.querySelector(".tab-titles");
    collectLink.addEventListener("click",(e)=>{
        e.target.classList.add("active-link")
    })
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

  const scriptURL = 'https://script.google.com/macros/s/AKfycbw_vt7eaL-cVfwtLIEIUEYDjBrFkClZd4a3Iugmzop6fWhsGk1Iqu8O9FJi9k7e0YI41A/exec'
  const form = document.forms['submit-to-google-sheet']
const msg = document.querySelector(".msg");
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message Send Sucessfully";
        msg.classList.add("msg12")
        setTimeout(function(){
            msg.innerHTML="";
            msg.classList.remove("msg12")
        },5000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })
// ten
const asdfg = document.querySelector(".fa-caret-up");
const qwert = document.querySelector(".option")
asdfg.addEventListener("click",()=>{
    asdfg.classList.toggle("rotate")
    qwert.classList.toggle("hert")
})
// ELEVEN
const loader = document.querySelector(".preloder");
window.addEventListener("load",function(){
    loader.style.display="none";
})

