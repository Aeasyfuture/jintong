window.onload=function () {
    let no=document.querySelector(".no");
    let yes=document.querySelector(".yes");
    no.onclick=function () {
        open("index.html","");
    }
    yes.onclick=function () {
        open("nhlogin.html","");
    }
}