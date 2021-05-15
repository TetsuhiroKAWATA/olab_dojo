function addZero(num){
	let n;
	if(num<10)
		n = "0"+num;
	else
		n = num;
	return n;
}

function ticktack(){
	let time = new Date();
	let hour = addZero(time.getHours());
	let min = addZero(time.getMinutes());
	let sec = addZero(time.getSeconds());
	document.getElementById("clock").innerHTML =(hour+":"+min+":"+sec);
}
setInterval('ticktack()',250);