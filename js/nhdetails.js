window.onload=function () {
    let lingjuan=document.querySelector(".lingjuan");
    let tanchu=document.querySelector(".tanchu");
    let close=document.querySelector(".close");
    let cheng=document.querySelector(".cheng");
    lingjuan.onclick=function () {
        animate(tanchu,{bottom:0},300);
    }
    close.onclick=function () {
        animate(tanchu,{bottom:-796},100);
    }
    cheng.onclick=function () {
        animate(tanchu,{bottom:-796},100);
    }
}