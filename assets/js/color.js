generate.onclick = function(){

	var red = document.getElementById('red').value;
	var green = document.getElementById('green').value;
	var blue = document.getElementById('blue').value;
	var color = document.getElementById('color');


	color.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")"; 

}

clear.onclick = function(){

	var red = document.getElementById('red');
	var green = document.getElementById('green');
	var blue = document.getElementById('blue');
	var color = document.getElementById('color');

	red.value="0";
	green.value="0";
	blue.value="0";

	color.style.backgroundColor = "rgb(0,0,0)";

}