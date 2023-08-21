let speech = new SpeechSynthesisUtterance();
let voi = [];
let voiseSelect = document.querySelector("select");
window.speechSynthesis.onvoiceschanged=()=>{
    voi = window.speechSynthesis.getVoices();
    speech.voice = voi[0];
    voi.forEach((voice,i)=>(voiseSelect.options[i]=new Option(voice.name,i)))
};
voiseSelect.addEventListener("change",()=>{
    speech.voice=voi[voiseSelect.value];
})
document.querySelector("button").addEventListener('click',()=>{
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});
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