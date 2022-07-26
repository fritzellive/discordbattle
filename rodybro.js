var op = document.getElementById("options");
var thingy = document.getElementById("thing");
var lose = document.getElementById("lost");
var win = document.getElementById("won");
var YH = 1;
var RBH = 1;

function rody(){
    op.style.display = "none";
    let chance = Math.floor(Math.random() * 2) + 1;
    if(chance === 1){
        RBH -= 1;
    } if(chance !== 1){
        YH -= 1;
    }
}

setInterval(function(){
    //this code runs every second.
    if(YH < 0 || YH === 0){
        thingy.style.display = "none";
        lose.style.display = "block";
    } if(RBH < 0 || RBH === 0){
        thingy.style.display = "none";
        win.style.display = "block";
    }
}, 100);