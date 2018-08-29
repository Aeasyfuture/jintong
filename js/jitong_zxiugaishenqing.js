window.onload = function(){
    //服务类型弹框
    let fwlxa = document.querySelector(".nr .tknr .jtk .fwlx .fwlxa");
    let tknr1 = document.querySelector(".nr .tknr .jtk .tankuang .tknr1");
    let guanbix = document.querySelector(".nr .tknr .jtk .tankuang .tknr1 .toubu .guanbix");
    let nn = document.querySelector(".nr .tknr .jtk .tankuang .tknr1 .nn");

    fwlxa.onclick = function(){
        tknr1.style.left = "-5px";
        tknr1.style.boxShadow = "0 0 30px 12rem rgba(0, 0, 0, 0.4)";
    }
    guanbix.onclick = function(){
        tknr1.style.left = "540px";
        tknr1.style.boxShadow = "";
    }
    nn.onclick = function(){
        tknr1.style.left = "540px";
        tknr1.style.boxShadow = "";
    }
    

    //退款原因
    let fwlxa1 = document.querySelector(".nr .tknr .jtk1 .fwlx .fwlxa");
    let tknr11 = document.querySelector(".nr .tknr .jtk1 .tankuang .tknr2");
    let guanbix1 = document.querySelector(".nr .tknr .jtk1 .tankuang .tknr2 .toubu .guanbix");
    let nn1 = document.querySelector(".nr .tknr .jtk1 .tankuang .tknr2 .nn");
    fwlxa1.onclick = function(){
        tknr11.style.left = "-5px";
        tknr11.style.boxShadow = "0 0 30px 12rem rgba(0, 0, 0, 0.4)";
    }
    guanbix1.onclick = function(){
        tknr11.style.left = "540px";
        tknr11.style.boxShadow = "";
    }
    nn1.onclick = function(){
        tknr11.style.left = "540px";
        tknr11.style.boxShadow = "";
    }

}