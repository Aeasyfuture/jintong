window.onload=function () {
    let water=document.querySelectorAll(".banner img");
    let lis=document.querySelectorAll(".spot li");
    let now=next=1;
    console.log(water, lis);
    setInterval(move,2000);
    function move() {
        next++;
        if (next==lis.length){
            next=0;
        }
        water[next].style.left="750px";
        animate(water[now],{left:-750});
        animate(water[next],{left:0});
        lis[now].classList.remove("back");
        lis[next].classList.add("back");
        now=next;
    }
    lis.forEach(function (v,i) {
        v.onclick=function () {
            if (now==i){
                return;
            } else if(i>now){
                water[i].style.left="750px";
                animate(water[now],{left:-750});
                animate(water[i],{left:0});
                lis[now].classList.remove("back");
                lis[i].classList.add("back");
            }else {
                water[i].style.left="-750px";
                animate(water[now],{left:750});
                animate(water[i],{left:0});
                lis[now].classList.remove("back");
                lis[i].classList.add("back");
            }
            now=next=i;
        }
    })
    let input=document.querySelector("nav input");
    input.onclick=function () {
        open("nhsearch.html","");
    }
    let my=document.querySelector(".my");
    my.onclick=function () {
        open("nhweixin.html","");
    }
}
