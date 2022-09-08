let input = document.getElementById("some");
let btn = document.getElementById("click");
let info =  document.getElementById("info");
let data = function(){
	if (input.value!==""){
		let h1=document.createElement("p");
		h1.innerText=input.value;
		info.appendChild(h1);
		input.value="";
	}
}
	btn.addEventListener("click",function(){
		data();
	})