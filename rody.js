var YHtext = document.getElementById("reihealth");
var RHtext = document.getElementById("opphealth");
var op = document.getElementById("options");
var thingy = document.getElementById("thing");
var lose = document.getElementById("lost");
var win = document.getElementById("won");
var YH = 300;
var RH = 300;

function old(){
    op.style.display = "none";
    let damagetoopp = Math.floor(Math.random() * 50) + 1;
    RH -= damagetoopp;
    RHtext.innerHTML = "AAA IM SO FUCKIN CRINGEY IN THESE VIDS";
    setTimeout(() => {
        RHtext.innerHTML = `Rody Health: ${RH}`;
        let damagetorei = Math.floor(Math.random() * 50) + 1;
        YH -= damagetorei;
        YHtext.innerHTML = `Your Health: ${YH}`;
        op.style.display = "block";
    }, 1000); 
}

function nick(){
    let nicks = ['rody frwiti', 'gay', 'khtk chabba', 'sussy rody', 'so haram mode rody', 'haram master', 'master of cringe', 'simp', '7alab'];
    const randomNick = nicks[Math.floor(Math.random() * nicks.length)];
    YHtext.innerHTML = randomNick;

    let chance = Math.floor(Math.random() * 3) + 1;
    if(chance === 1){
        op.style.display = "none";
    let damagetoopp = Math.floor(Math.random() * 75) + 1;
    RH -= damagetoopp;
    RHtext.innerHTML = `NOOO THATS TOO CRINGE`;
    setTimeout(() => {
        RHtext.innerHTML = `Rody Health: ${RH}`;
        op.style.display = "block";
        YHtext.innerHTML = `Your Health: ${YH}`;
    }, 1000);
    } if(chance !== 1){
        RHtext.innerHTML = "ALRIGHT FUCK YOU!";
        setTimeout(() => {
            thingy.style.display = "none";
            lose.style.display = "block";
        }, 1000);
    }
}

function fritzel(){
    op.style.display = "none";
    let damagetoopp = Math.floor(Math.random() * 100) + 1;
    RH -= damagetoopp;
    RHtext.innerHTML = `Same Damage Curse!`;
    setTimeout(() => {
        RHtext.innerHTML = `Rody Health: ${RH}`;
        let damagetorei = damagetoopp;
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
    } if(RH < 0 || RH === 0){
        thingy.style.display = "none";
        win.style.display = "block";
    }
}, 100);