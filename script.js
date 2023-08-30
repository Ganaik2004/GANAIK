

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
let getmode = localStorage.getItem("mode");
console.log(getmode);
if(getmode==="dark1"){
    bright1.classList.replace("bxs-moon", "bxs-sun");
    body.classList.remove("dark") ;
   
}else{
    bright1.classList.replace("bxs-sun", "bxs-moon");
   
    body.classList.add("dark") ;
}
darkmode.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        bright1.classList.replace("bxs-sun", "bxs-moon")
         localStorage.setItem("mode","light");
    } else {
        bright1.classList.replace("bxs-moon", "bxs-sun")
         localStorage.setItem("mode","dark1");
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
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const  chatbotclosebtn = document.querySelector(".show-chatot");
const chatbotToggler = document.querySelector(".chat-bot-live");
const replace____45 = document.querySelector(".bx-message");
let usermessage;
const API_KEY = "sk-7xRvMt3BlbkFJEKxOCorBXEYKMmpvdD4P";
const inputInitHEight = chatInput.scrollHeight;
const creatChatLi = (message,classname) =>{
    const chatli = document.createElement("li");
    chatli.classList.add("chat",classname);
    let chatContent = classname=== "outgoing" ? `<p></p>` :`<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatli.innerHTML=chatContent;
    chatli.querySelector("p").textContent = message;
    return chatli;
}
const generateResponse = (incomingChatli)=>{
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = incomingChatli.querySelector("p");
    const requestOption = {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${API_KEY}`,
        },
        body :JSON.stringify({
            model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: usermessage}]
        })
    }
    fetch(API_URL,requestOption).then(res => res.json()).then(data=>{
        messageElement.textContent = data.choices[0].message.content;
    }).catch((err)=>{
        messageElement.classList.add("erroe")
        messageElement.textContent = "Oops! Something went wrong. Please try again.";
    }).finally(()=>{
        chatbox.scrollTo(0,chatbox.scrollHeight);
    })
}
const handlechat = ()=>{
usermessage = chatInput.value.trim();
if(!usermessage) return;
chatInput.value="";
chatInput.style.height=`${inputInitHEight}px`
chatbox.appendChild(creatChatLi(usermessage,"outgoing"));
chatbox.scrollTo(0,chatbox.scrollHeight);
setTimeout(()=>{
    const incomingChatli = creatChatLi("Thinking...","incoming");
    chatbox.appendChild(incomingChatli);
    chatbox.scrollTo(0,chatbox.scrollHeight);
    generateResponse(incomingChatli);
},600)
}
chatInput.addEventListener("input",()=>{
    chatInput.style.height=`${inputInitHEight}px`
    chatInput.style.height=`${chatInput.scrollHeight}px`
})
chatInput.addEventListener("keydown",(e)=>{
   if(e.key==="Enter" && !e.shiftKey && window.innerWidth>800){
    e.preventDefault();
    handlechat();
   }

})
chatbotToggler.addEventListener("click",()=>{
    document.body.classList.toggle("show-chatot");
    if(document.body.classList.contains("show-chatot")){
        replace____45.classList.replace("bx-message","bx-x")
       body.classList.add("ydisable")
    }else{
        replace____45.classList.replace("bx-x","bx-message")
        body.classList.remove("ydisable")
    }
})




sendChatBtn.addEventListener("click",handlechat);
// ELEVEN
const loader = document.querySelector(".preloder");
window.addEventListener("load",function(){
    loader.style.display="none";
})

