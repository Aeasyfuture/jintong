window.onload=function (){
    let coupons_hide=document.querySelectorAll(".coupons_hide");
    console.log(coupons_hide);
    let btn=document.querySelectorAll(".option_in_box li");
    console.log(btn);
    let li_hide=document.querySelector(".li_hide");
    console.log(li_hide);
    let now=next=0;
    for(let i=0;i<btn.length;i++){
        btn[i].onclick=function () {
            for (let j=0;j<btn.length;j++){
                coupons_hide[j].style.zIndex="5";
                btn[now].classList.remove("hot");
                btn[j].classList.add("hot");

                now=j;
            }
            coupons_hide[i].style.zIndex="10";
            btn[now].classList.remove("hot");
            btn[i].classList.add("hot");
            now=i;
        }
    }
}