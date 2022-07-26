var YHtext = document.getElementById("reihealth");
var NHtext = document.getElementById("opphealth");
var op = document.getElementById("options");
var thingy = document.getElementById("thing");
var lose = document.getElementById("lost");
var win = document.getElementById("won");
var YH = 2000;
var NH = 2000;

function sakura(){
    op.style.display = "none";
    let damagetoopp = Math.floor(Math.random() * 500) + 1;
    NH -= damagetoopp;
    NHtext.innerHTML = `NOOOOO NOT MY LOVE`;
    setTimeout(() => {
        NHtext.innerHTML = `NIK MOK FEEL MY RASINGAN`;
    }, 1000); 
    setTimeout(() => {
        NHtext.innerHTML = `Nurato Health: ${NH}`;
        let damagetorei = Math.floor(Math.random() * 750) + 1;
        YH -= damagetorei;
        YHtext.innerHTML = `Your Health: ${YH}`;
        op.style.display = "block";
    }, 2000);
}

function huge(){
    let chance = Math.floor(Math.random() * 3) + 1;
    if(chance === 1){
        op.style.display = "none";
    let damagetoopp = Math.floor(Math.random() * 500) + 1;
    NH -= damagetoopp;
    NHtext.innerHTML = `AHHHHHH IM NOT GAY`;
    setTimeout(() => {
        NHtext.innerHTML = `Nurato Health: ${NH}`;
        op.style.display = "block";
    }, 1000);
    } if(chance !== 1){
        NHtext.innerHTML = "IM ONLY GAY FOR SASU-<br>I MEAN IM STRAIGHT!";
        setTimeout(() => {
            thingy.style.display = "none";
            lose.style.display = "block";
        }, 1000);
    }
}

function pain(){
    op.style.display = "none";
    let damagetoopp = Math.floor(Math.random() * 1000) + 1;
    NH -= damagetoopp;
    NHtext.innerHTML = `Ever heard of curses?!`;
    setTimeout(() => {
        NHtext.innerHTML = `Nurato Health: ${YH}`;
        let damagetorei = Math.floor(Math.random() * 1000) + 1;
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
    } if(NH < 0 || NH === 0){
        thingy.style.display = "none";
        win.style.display = "block";
    }
}, 100);