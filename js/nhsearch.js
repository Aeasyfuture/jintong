window.onload=function () {
    let search=document.querySelector(".search");
    let shuiguan=document.querySelector(".shuiguan");
    console.log(search, shuiguan);
    search.onclick=function () {
        open("nhsearch2.html","");
    }
    shuiguan.onclick=function () {
        open("nhsearch3.html","");
    }
}