window.onload=function(){
	let box3=document.querySelector(".box3");
	let b31=document.querySelector(".b31");
	let b32=document.querySelector(".b32");
	let flag=true;
	console.log(box3,b31);
	box3.onclick=function(){

		if(flag==true){
			b31.style.zIndex="20";
			b32.style.zIndex="5";
			flag=false;
		}else if(flag==false){
			b31.style.zIndex="5";
			b32.style.zIndex="20";
			flag=true;
		}
		
	}
}