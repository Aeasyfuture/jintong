window.onload=function(){
    let click=document.querySelector(".click");
    click.onclick=function(){
        open("zwqwritetime.html");
    }
    let top=document.querySelector(".top");
    top.onclick=function(){
        open("zwqaddress.html");
    }
    let button=document.querySelector("button");
    button.onclick=function(){
        open("zwqpayment.html");
    }
}