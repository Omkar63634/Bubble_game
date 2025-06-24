var hitrn = 0;
var timer = 60;
var score = 0;

function makebuble() {
    var clutter = "";
    for (var i = 1; i <= 133; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#btmpannel").innerHTML = clutter;
}

function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#Timeval").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector("#btmpannel").innerHTML = "Game Over";
        }
    }, 1000);
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10); // You forgot to assign this to the global variable
    document.querySelector("#hitval").textContent = hitrn;
}

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

// Event Listener for bubble clicks
document.querySelector("#btmpannel").addEventListener("click", function (details) {
    var clickedNum = Number(details.target.textContent);
    if (clickedNum === hitrn) {
        increaseScore();
        makebuble();
        getNewHit();
    }
});

// Initialize game
makebuble();
runTimer();
getNewHit();




// var hitrn=0;
// var timer=30;
// var score=0;


// function makebuble(){
// var clutter=" ";
// for(var i=1;i<=133;i++){
//     var rn=Math.floor(Math.random()*10)//missed semicolon
//     clutter +=`<div class="bubble">${rn}</div>`;
// }
// document.querySelector("#btmpannel").innerHTML=clutter;
// }
// makebuble();//this was not needed here


// function runTimer(){
//     var timerint=setInterval(function(){
//         if(timer>0){
//             timer--;
//             document.querySelector("#Timeval").textContent=timer;
//         }
//         else{
//             clearInterval(timerint);document.querySelector("btmpannel").innerHTML="Game over";
//         }
//     },1000);
// }
// runTimer();

// function getNewHit(){
//     var rn=Math.floor(Math.random()*10);//should have used hitrn
//     document.querySelector("#hitval").textContent=rn;
// }
// getNewHit();//not needed

// function increaseScore(){
//     score +=10;
//     document.querySelector("#scoreval").textContent=score;
// }
// increaseScore();//not needed


// document.querySelector("#btmpannel").addEventListener("click",function(details){
//     var clickednum===(Number(details.target.textContent));  //its clickedNum 
//     if clickednum===hitrn){
//         increaseScore();
//         makebuble();
//         getNewHit();
//     }})