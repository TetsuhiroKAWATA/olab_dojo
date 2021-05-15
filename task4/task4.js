let num3=0;

document.getElementById("btn1").onclick = function(){
	let num1 = parseInt(document.getElementById("n1").value);
	let num2 = parseInt(document.getElementById("n2").value);
	document.getElementById("answer").innerHTML=(num1+num2);
	num3++;
	document.getElementById("cong").innerHTML=(num3+"回使われました");
};