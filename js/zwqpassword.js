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
    let point=document.querySelectorAll(".tanchukuang li");
    let point1=document.querySelectorAll(".tanchukuang li div");
    point.forEach(function(v,i){
        point[i].onclick=function(){
            point[i].style.background="#2fa5ff";
            point1[i].classList.add("point");
            if (i==point.length-1){
                open("zwqindex.html");
            }
        }
    })

}