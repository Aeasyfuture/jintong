window.onload = function(){
    let circle = document.querySelectorAll(".nr .xing .xingxing .xx div");

    circle.forEach(function(a,i){
        a.onclick = function(){
            for(let j=0;j < circle.length;j++){
                circle[j].classList.remove("btn");
                console.log(circle);
            }
            // a.classList.remove("btn");
            for(let j=0;j <= i;j++){
                circle[j].classList.add("btn");
                console.log(circle);
            }
        }
    });

}