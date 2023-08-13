let body = document.querySelector("body");
let darkMOde = document.querySelector(".darkmode");
let switch1 = document.querySelector(".bxs-sun");
darkMOde.addEventListener("click",()=>{
    body.classList.toggle("dark");
    if(switch1.classList.contains("bxs-sun")){
        switch1.classList.replace("bxs-sun","bxs-moon")
    }else{
        switch1.classList.replace("bxs-moon","bxs-sun")
    }
})
let navLink = document.querySelector(".nav-links");
let menubtn = document.querySelector(".bx-menu");
menubtn.addEventListener("click",()=>{
    navLink.classList.toggle("active11")
    if(menubtn.classList.contains("bx-menu")){
        menubtn.classList.replace("bx-menu","bx-x")
    }else{
        menubtn.classList.replace("bx-x","bx-menu")
    }
})

window.onscroll=()=>{
    if(navLink.classList.contains("active11")){
        navLink.classList.remove("active11");
        menubtn.classList.replace("bx-x","bx-menu")
    }
}

const apiKey = "f3f3186676d04087998dc54faecfe276";
const apiurl = "https://newsapi.org/v2/everything?q="
window.addEventListener("load", () => fetchnews("India"));
async function fetchnews(query) {
    const res = await fetch(apiurl + query + `&apiKey=${apiKey}`);
    let data = await res.json();
    console.log(data)
    binddata(data.articles);
}
function binddata(articles) {
    const cardsContainer = document.querySelector(".card-container");
    const template = document.querySelector("#template-news-card");
    cardsContainer.innerHTML = "";
    articles.forEach(element => {
        if (!element.urlToImage) return;
        let cardClone = template.content.cloneNode(true);
        filldata(cardClone, element);
        cardsContainer.appendChild(cardClone)
    });
}
function filldata(cardClone1, articles) {
    const newsimg = cardClone1.querySelector("#image");
    let newstitle = cardClone1.querySelector("#new-title");
    let newsource = cardClone1.querySelector("#news-source");
    let newsdiscription = cardClone1.querySelector("#new-description");
    newsimg.src = articles.urlToImage;
    newstitle.innerHTML = articles.title;
    newsdiscription.innerHTML = articles.description;
    const date = new Date(articles.publishedAt).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    });
    newsource.innerHTML = `${articles.source.name} • ${date}`;
    cardClone1.firstElementChild.addEventListener("click",()=>{
        window.open(articles.url,"_blank");
    })
}
let curselecte = null;
function onnavitemclick(id){
    fetchnews(id);
    const navitem = document.getElementById(id);
    curselecte?.classList.remove('active');
    curselecte=navitem;
    curselecte.classList.add('active');
    if(navLink.classList.contains("active11")){
        navLink.classList.remove("active11");
        menubtn.classList.replace("bx-x","bx-menu")
    }
}
const searchInput= document.querySelector(".news-input");
const searchicon = document.querySelector(".bx-search");
searchicon.addEventListener('click',()=>{
    const query = searchInput.value;
    if(!query)return;
    fetchnews(query);
    curselecte?.classList.remove('active');
    curselecte = null;
    if(navLink.classList.contains("active11")){
        navLink.classList.remove("active11");
        menubtn.classList.replace("bx-x","bx-menu")
    }
    searchInput.value="";
})