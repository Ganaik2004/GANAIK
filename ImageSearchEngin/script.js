const searchForm = document.querySelector("#Search-form") ;
const searchBox = document.querySelector("#Search-box") ;
const searchresult = document.querySelector(".search-result") ;
const searchbtn = document.querySelector(".show_more_button") ;

let keyword = "";
let page = 1;
const asseckey = "JEemPvMyn0XwVRu0iFsSo2yHPzLrGJ-ONOD1SYPt5qs";
async function searchImages(){
keyword=searchBox.value;
const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${asseckey}&per_page=12`;
const res = await fetch(url);
const data = await res.json();
if(page==1){
    searchresult.innerHTML="";
}
const result = data.results;
result.forEach(element => {
    const image = document.createElement("img");
    image.src = element.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = element.links.html;
    imageLink.target ="_blank";
    imageLink.appendChild(image);
    searchresult.appendChild(imageLink);
});
searchbtn.style.display="block";
}
searchForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    page = 1;
    searchImages();
});
searchbtn.addEventListener('click',()=>{
page++;
searchImages()
})
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