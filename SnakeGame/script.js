const playboard =document.querySelector(".play_board");
let sco = document.querySelector(".score");
let highScoreElement = document.querySelector(".highscore");
let controls = document.querySelectorAll(".controls i");
let level11 = document.querySelector(".selected");
let select11 = document.querySelector(".select");
const gamestart = new Audio("music/music.mp3");
const gameover12 = new Audio("music/gameover.mp3");
const move12 = new Audio("music/move.mp3");
const food12 = new Audio("music/food.mp3");
let gameover=false;
let foodY,foodX;
let SnakeX=5,SnakeY=10;
let VelocityX=0,VelocityY=0;
let snakeBody=[];
let setintervalid ;
let score = 0;
let speed;
let highscore = localStorage.getItem("high_score") ||0;
highScoreElement.innerHTML=`Hign Score : ${highscore}`;
const changeFoodPOsition=()=>{
    foodX=Math.floor(Math.random()*30)+1;
    foodY=Math.floor(Math.random()*30)+1;
}
function handlegameover(){
    gameover12.play();
    clearInterval(setintervalid);
    alert("game over! Press enter to Start");
   
    location.reload(); 
}
const changedirection=(e)=>{
if(e.key==="ArrowUp" && VelocityY!= 1){
    VelocityX=0;
    VelocityY=-1;
}else if(e.key==="ArrowDown" && VelocityY!= -1){
    VelocityX=0;
    VelocityY=1;
}else if(e.key==="ArrowLeft" && VelocityX!= 1){
    VelocityX=-1;
    VelocityY=0;
}else if(e.key==="ArrowRight"&& VelocityX!= -1){
    VelocityX=1;
    VelocityY=0;
}

}
controls.forEach(key =>{
    key.addEventListener("click", ()=>changedirection({key: key.dataset.key}));    
})
const initGame = ()=>{
    if(gameover) return handlegameover();
    let htmlmarkup= `<div class ="food" style="grid-area:${foodY}/${foodX}"></div>`;
    if(SnakeX===foodX &&SnakeY===foodY){
        food12.play();
        changeFoodPOsition();
        snakeBody.push([foodX,foodY]);
        score++;
  highscore = score>=highscore? score : highscore;
  localStorage.setItem("high_score",highscore);
 sco.innerHTML=`Score : ${score}`;
 highScoreElement.innerHTML=`Hign Score : ${highscore}`;
   move12.play();
    }
    for(let  i=snakeBody.length-1;i>0;i--){
        snakeBody[i]=snakeBody[i-1];
    }
    snakeBody[0]=[SnakeX,SnakeY];
    SnakeX +=VelocityX; 
    SnakeY +=VelocityY;
    if(SnakeX <=0 || SnakeX >30 || SnakeY <=0 ||SnakeY >30){
      gameover  =true;
    }
    for(let i=0;i<snakeBody.length;i++){
        htmlmarkup += `<div class ="head" style="grid-area:${snakeBody[i][1]}/${snakeBody[i][0]}"></div>`;
      
        if(i!==0 && snakeBody[0][1]===snakeBody[i][1] && snakeBody[0][0]===snakeBody[i][0]){
            gameover=true;
        }
    }
  
    playboard.innerHTML=htmlmarkup;
  select11.style.display="none";
  
}




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
    const droupdowns = document.querySelectorAll('.dropdown');
    droupdowns.forEach(dropdown=> {
        const select = dropdown.querySelector('.select');
        const caret = dropdown.querySelector('.caret');
        const menu = dropdown.querySelector('.menu');
        const options = dropdown.querySelectorAll('.menu li');
        const selected = dropdown.querySelector('.selected');
        select.addEventListener('click',()=>{
            select.classList.toggle('select-clicked');
            caret.classList.toggle('caret-rotate');
            menu.classList.toggle('menu-open')
        });
        options.forEach(option =>{
            option.addEventListener('click',()=>{
                selected.innerText = option.innerText;
                select.classList.remove('select-clicked');
                caret.classList.remove('caret-rotate');
                menu.classList.remove('menu-open')
                if(level11.innerText==="Easy"){
                    console.log(level11.innerText)
                    speed = 500;
                    changeFoodPOsition();
                    setintervalid=setInterval(initGame,speed);
                    gamestart.play();
                document.addEventListener("keydown",changedirection);
                   
                }else if(level11.innerText==="Medium"){
                    console.log(level11.innerText)
                    speed = 300;
                    changeFoodPOsition();
                    setintervalid=setInterval(initGame,speed);
                    gamestart.play();
                document.addEventListener("keydown",changedirection);
                }else if(level11.innerText==="Hard"){
                    console.log(level11.innerText)
                    speed = 100;
                    changeFoodPOsition();
                    setintervalid=setInterval(initGame,speed);
                    gamestart.play();
                document.addEventListener("keydown",changedirection);
                }
            })
        })
    
    });



