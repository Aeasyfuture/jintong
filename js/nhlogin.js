window.onload=function () {
    let fast=document.querySelector(".fast");
    let number=document.querySelector(".number");
    let big=document.querySelector(".big");
    let home=document.querySelector(".home");
    let blue=document.querySelector(".blue");
    let blue2=document.querySelector(".blue2");
    fast.onclick=function () {
        big.style.zIndex="10";
        home.style.zIndex="5";
        blue.style.display="block";
        blue2.style.display="none";
        number.style.color="rgba(0,0,0,0.2)";
        fast.style.color="rgba(0,0,0,0.6)";
    }
    number.onclick=function () {
        home.style.zIndex="10";
        big.style.zIndex="5";
        blue.style.display="none";
        blue2.style.display="block";
        number.style.color="rgba(0,0,0,0.6)";
        fast.style.color="rgba(0,0,0,0.2)";
    }
    let log=document.querySelector(".log");
    log.onclick=function () {
        open("nhregister.html","");
    }
}