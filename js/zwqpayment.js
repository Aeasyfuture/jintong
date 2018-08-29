window.onload=function () {
    let circle2=document.querySelectorAll(".circle2");
    circle2.forEach(function(v,i){
        circle2[i].onclick=function(){
            circle2.forEach(function(v){
                v.classList.remove("circle4");
            })
            circle2[i].classList.add("circle4");
        }
    })
    let button=document.querySelector("button");
    button.onclick=function(){
        open("zwqpassword.html","");
    }

}