window.onload=function(){
	let b211s=document.querySelectorAll(".b211");
	let h2s=document.querySelectorAll(".h21");
	let h3s=document.querySelectorAll(".h31");
	console.log(b211s,h2s,h3s);
	for(let i=0;i<b211s.length;i++){
		b211s[i].onclick=function(){
			for(let j=0;j<b211s.length;j++){
				b211s[j].className="b211";
				h2s[j].className="h21";
				h3s[j].className="h31";
			}
			b211s[i].className="b211 active";
			h2s[i].className="h21 active1";
			h3s[i].className="h31 active2";
		}
	}
}