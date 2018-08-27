window.onload=function () {
    let letter=document.querySelectorAll(".letter li");
    letter.forEach(function (v) {
        v.onclick=function () {
            letter.forEach(function (v) {
                v.style.color="#c1c1c1";
            })
            v.style.color="#36A8FE";
        }
    })
}