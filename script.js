//your JS code here. If required.
const line = document.getElementById("line");
let angle = 0;
function rotateLine(){
	angle+=2;
	line.style.transform=`transition(-50%,-50%) rotate($(angle)deg)`
	requestAnimationFrame(rotateLine);
}