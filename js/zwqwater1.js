window.onload=function(){
    let pull1=document.querySelectorAll(".pull1");
    let pullList=document.querySelectorAll(".pullList");
    console.log(pull1);
    pull1.forEach(function(v,i){
        pull1[i].onclick=function(){
            pull1.forEach(function(v){
                v.style.color="#3bacfe";
            })
            pull1[i].style.color="#60da9a";
            pullList.forEach(function(v,i){
                v.style.zIndex="105";
                // pullList[i].style.display="block";
                // v.style.height="0";
            })
            pullList[i].style.zIndex="110";
            // pullList[i].style.height="2.18rem";
            // pullList[i-1].style.display="none";
        }
    })

    // let button=document.querySelector("button");
    // button.onclick=function(){
    //     open("zwqaddaddress.html","");
    // }

}