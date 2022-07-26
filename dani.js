var YHtext = document.getElementById("reihealth");
var DHtext = document.getElementById("opphealth");
var op = document.getElementById("options");
var thingy = document.getElementById("thing");
var lose = document.getElementById("lost");
var win = document.getElementById("won");
var YH = 200;
var DH = 500;

function oj(){
    op.style.display = "none";
    let damagetoopp = Math.floor(Math.random() * 45) + 1;
    DH -= damagetoopp;
    DHtext.innerHTML = `Dani Health: ${DH}`;
    setTimeout(() => {
        let damagetorei = Math.floor(Math.random() * 67) + 1;
        YH -= damagetorei;
        YHtext.innerHTML = `Your Health: ${YH}`;
        op.style.display = "block";
    }, 1000); 
}

function karlson(){
    let chance = Math.floor(Math.random() * 5) + 1;
    if(chance === 1 || chance === 2){
        op.style.display = "none";
    let damagetoopp = Math.floor(Math.random() * 150) + 1;
    DH -= damagetoopp;
    DHtext.innerHTML = `NOO I'M TIRED`;
    setTimeout(() => {
        DHtext.innerHTML = `Dani Health: ${DH}`;
        op.style.display = "block";
    }, 1000);
    } if(chance === 3 || chance === 4 || chance === 5){
        DHtext.innerHTML = "STFU I'M TIRED ASF, SUCK MY DICK!";
        setTimeout(() => {
            thingy.style.display = "none";
            lose.style.display = "block";
        }, 1000);
    }
}

function billy(){
    op.style.display = "none";
    let damagetoopp = Math.floor(Math.random() * 75) + 1;
    DH -= damagetoopp;
    DHtext.innerHTML = `Fuck you billy`;
    setTimeout(() => {DHtext.innerHTML = `Dani Health: ${DH}`;}, 1000);
    setTimeout(() => {
        let damagetorei = Math.floor(Math.random() * 75) + 1;
        YH -= damagetorei;
        YHtext.innerHTML = `Your Health: ${YH}`;
        op.style.display = "block";
    }, 1000); 
}

function cs(){
    op.style.display = "none";
    let damagetoopp = Math.floor(Math.random() * 10) + 1;
    DH -= damagetoopp;
    DHtext.innerHTML = `Dani Health: ${DH}`;
    setTimeout(() => {
        let damagetorei = Math.floor(Math.random() * 5) + 1;
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
    } if(DH < 0 || DH === 0){
        thingy.style.display = "none";
        win.style.display = "block";
    }
}, 100);