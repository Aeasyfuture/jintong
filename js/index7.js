window.onload=function(){
	let b111s=document.querySelectorAll(".b111");
	let y1s=document.querySelectorAll(".y1");
	let x1s=document.querySelectorAll(".x1");
	let flag=true;
	/*console.log(b111s,y1s,x1s);*/
	for(let i=0;i<b111s.length;i++){
		b111s[i].onclick=function(){
			if(flag==true){
				y1s[i].style.zIndex="20";
				x1s[i].style.zIndex="5";
				flag=false;
			}else if(flag==false){
				y1s[i].style.zIndex="5";
				x1s[i].style.zIndex="20";
				flag=true;
			}
			
		}
	}


	let b411s=document.querySelectorAll(".b411");
	let y11s=document.querySelectorAll(".y11");
	let x11s=document.querySelectorAll(".x11");
	for(let i=0;i<b411s.length;i++){
		b411s[i].onclick=function(){
			if(flag==true){
				y11s[i].style.zIndex="20";
				x11s[i].style.zIndex="5";
				for(let j=0;j<y1s.length;j++){
					y1s[j].style.zIndex="20";
					x1s[j].style.zIndex="5";
				}
				

				flag=false;
			}else if(flag==false){
				y11s[i].style.zIndex="5";
				x11s[i].style.zIndex="20";
				for(let j=0;j<y1s.length;j++){
					x1s[j].style.zIndex="20";
					y1s[j].style.zIndex="5";
				}
				flag=true;
			}
			
		}
	}


	let section2s=document.querySelectorAll(".section2");
	let b12s=document.querySelectorAll(".b12");
	console.log(section2s,b12s);
	for(let j=0;j<b12s.length;j++){
		b12s[j].onclick=function(){
			section2s[j].style.display="none";
		}
	}
}