var YHtext = document.getElementById("reihealth");
var SHtext = document.getElementById("opphealth");
var op = document.getElementById("options");
var thingy = document.getElementById("thing");
var lose = document.getElementById("lost");
var win = document.getElementById("won");
var YH = 500;
var SH = 250;

function kiss(){
    op.style.display = "none";
    let damagetoopp = Math.floor(Math.random() * 50) + 1;
    SH -= damagetoopp;
    SHtext.innerHTML = "I WAS A KID";
    setTimeout(() => {
        SHtext.innerHTML = `Sasake Health: ${SH}`;
        let damagetorei = Math.floor(Math.random() * 50) + 1;
        YH -= damagetorei;
        YHtext.innerHTML = `Your Health: ${YH}`;
        op.style.display = "block";
    }, 1000); 
}

function narutohot(){
    let nicks = ['Naruto fucked sakura', 'naruto hot', 'you\'re ugly'];
    const randomNick = nicks[Math.floor(Math.random() * nicks.length)];
    YHtext.innerHTML = randomNick;

    let chance = Math.floor(Math.random() * 3) + 1;
    if(chance === 1){
        op.style.display = "none";
    let damagetoopp = Math.floor(Math.random() * 200) + 1;
    SH -= damagetoopp;
    let replies = ['NOT MY BITCH', 'NARUTO IS GAY', 'STFU'];
    const randomReply = replies[Math.floor(Math.random() * replies.length)];
    SHtext.innerHTML = randomReply;
    setTimeout(() => {
        SHtext.innerHTML = `Sasake Health: ${SH}`;
        op.style.display = "block";
        YHtext.innerHTML = `Your Health: ${YH}`;
    }, 1000);
    } if(chance !== 1){
        SHtext.innerHTML = "Suck My Dick";
        setTimeout(() => {
            thingy.style.display = "none";
            lose.style.display = "block";
        }, 1000);
    }
}

setInterval(function(){
    //this code runs every second.
    if(YH < 0 || YH === 0){
        thingy.style.display = "none";
        lose.style.display = "block";
    } if(SH < 0 || SH === 0){
        thingy.style.display = "none";
        win.style.display = "block";
    }
}, 100);