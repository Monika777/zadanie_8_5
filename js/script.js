var a = 0,
	h = 0,
	triangleArea = 0;

function calculations() {
	a = document.getElementById("base").value;
	h = document.getElementById("height").value;
	triangleArea = a*h/2;
	document.getElementById("result").innerHTML=triangleArea;
	console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);
}