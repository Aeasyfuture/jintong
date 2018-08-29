window.onload=function(){
    let cardTop=document.querySelectorAll(".cardTop li");
    let underline=document.querySelectorAll(".underline");
    let timeList=document.querySelectorAll(".timeList");
    let timeListLi=document.querySelectorAll(".timeList li");
    console.log(cardTop, timeList,timeListLi);
    cardTop.forEach(function(v,index){
        cardTop[index].onclick=function() {
            underline.forEach(function (v) {
                v.style.display = "none";
            })
            underline[index].style.display="block";
            timeList.forEach(function(v){
                v.style.zIndex="5";
            })
            timeList[index].style.zIndex="10";
/*
            for (let i=0;i<timeListLi.length-1;i++) {
                if (timeListLi[i].innerHTML == "已满") {
                    timeListLi[i].classList.add="change";
                }
            }
*/
        }
    })
    for (let i=0;i<timeListLi.length-1;i++){
        timeListLi[i].onclick=function(){
            for (let j=0;j<timeListLi.length-1;j++){
                timeListLi[j].style.background="";
                timeListLi[j].style.color="#41b2fc";
                if (timeListLi[j].innerHTML=="已满"||timeListLi[j].innerHTML=="") {
                    timeListLi[j].style.background="";
                    timeListLi[j].style.color="#c2cdd6";
                }
            }
            timeListLi[i].style.background="#3bacfe";
            timeListLi[i].style.color="#fff";
            if (timeListLi[i].innerHTML=="已满"||timeListLi[i].innerHTML=="") {
                timeListLi[i].style.background="";
                timeListLi[i].style.color="#c2cdd6";
            }
        }
    }

    let exit=document.querySelector(".exit");
    exit.onclick=function(){
        open("zwqwrite.html");
    }

    let button=document.querySelector("button");
    button.onclick=function(){
        open("zwqwrite.html");
    }


}