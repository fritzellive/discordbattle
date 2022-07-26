var YHtext = document.getElementById("reihealth");
var AHtext = document.getElementById("opphealth");
var op = document.getElementById("options");
var thingy = document.getElementById("thing");
var lose = document.getElementById("lost");
var win = document.getElementById("won");
var YH = 100;
var AH = 200;

function punch(){
    op.style.display = "none";
    let damagetoopp = Math.floor(Math.random() * 25) + 1;
    AH -= damagetoopp;
    AHtext.innerHTML = `Amogus Health: ${AH}`;
    setTimeout(() => {
        let damagetorei = Math.floor(Math.random() * 40) + 1;
        YH -= damagetorei;
        YHtext.innerHTML = `Your Health: ${YH}`;
        op.style.display = "block";
    }, 1000); 
}

function sus(){
    let chance = Math.floor(Math.random() * 3) + 1;
    if(chance === 1 || chance === 2){
        op.style.display = "none";
    let damagetoopp = Math.floor(Math.random() * 75) + 1;
    AH -= damagetoopp;
    AHtext.innerHTML = `NO IM NOT SUS!!!!`;
    setTimeout(() => {
        AHtext.innerHTML = `Amogus Health: ${AH}`;
        op.style.display = "block";
    }, 1000);
    } if(chance === 3){
        AHtext.innerHTML = "ALRIGHT FUCK YOU!";
        setTimeout(() => {
            thingy.style.display = "none";
            lose.style.display = "block";
        }, 1000);
    }
}

function tasks(){
    op.style.display = "none";
    let damagetoopp = Math.floor(Math.random() * 25) + 1;
    AH -= damagetoopp;
    AHtext.innerHTML = `Hehe me is gonna kill you`;
    setTimeout(() => {AHtext.innerHTML = `Amogus Health: ${YH}`;}, 1000);
    setTimeout(() => {
        let damagetorei = Math.floor(Math.random() * 50) + 1;
        YH -= damagetorei;
        YHtext.innerHTML = `Your Health: ${YH}`;
        op.style.display = "block";
    }, 1000); 
}

setInterval(function(){
    //this code runs every second.
    if(YH < 0 || YH === 0){
        thingy.style.display = "none";
        lose.style.display = "block";
    } if(AH < 0 || AH === 0){
        thingy.style.display = "none";
        win.style.display = "block";
    }
}, 100);