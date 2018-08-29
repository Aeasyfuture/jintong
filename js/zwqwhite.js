window.onload=function(){
    let circle=document.querySelectorAll(".circle");
    circle.forEach(function(v,i){
        circle[i].onclick=function(){
            circle.forEach(function(v){
                v.classList.remove("circle1");
            })
            circle[i].classList.add("circle1");
        }
    })

    let button=document.querySelector("button");
    button.onclick=function(){
        open("zwqaddaddress.html","");
    }

}