
document.addEventListener('DOMContentLoaded',function(){
	var imgs = document.querySelectorAll('img');
	imgs.forEach((img) => {
  		img.style.display = "block";
	});
	document.getElementById('title').style.display = "block";
})

var count = 0;

var title = document.getElementById('title');

slideAuto();

var refreshInterval = setInterval(slideAuto, 5000);

function slideAuto() {
	count++;
	if (count == 1) {
		document.getElementById('slidelabel1').click();
		title.innerHTML = 'Wiimote Joycon Left';
	}
	if (count == 2) {
		document.getElementById('slidelabel2').click();
		title.innerHTML = 'Joycon Left';
	}
	if (count == 3) {
		document.getElementById('slidelabel3').click();
		title.innerHTML = 'Joycon Right';
	}
	if (count == 4) {
		document.getElementById('slidelabel4').click();
		title.innerHTML = 'Joycons';
	}
	if (count == 5) {
		document.getElementById('slidelabel5').click();
		title.innerHTML = 'Wiimote (Nunchuck)';
	}
	if (count == 6){
		document.getElementById('slidelabel6').click();
		title.innerHTML = 'Wiimote Joycon Right One Hand';
	}
	if (count >= 7){
		document.getElementById('slidelabel7').click();
		title.innerHTML = 'Wiimote Joycon/Nunchuck Switch (One Hand)';
		count = 0;
	}
}

document.getElementById('slidelabel1').onclick = function(){
	count = 1;
    title.innerHTML = 'Wiimote Joycon Left';
	clearInterval(refreshInterval);
	refreshInterval = setInterval(slideAuto, 5000);
}

document.getElementById('slidelabel2').onclick = function(){
	count = 2;
    title.innerHTML = 'Joycon Left';
	clearInterval(refreshInterval);
	refreshInterval = setInterval(slideAuto, 5000);
}

document.getElementById('slidelabel3').onclick = function(){
	count = 3;
    title.innerHTML = 'Joycon Right';
	clearInterval(refreshInterval);
	refreshInterval = setInterval(slideAuto, 5000);
}

document.getElementById('slidelabel4').onclick = function(){
	count = 4;
    title.innerHTML = 'Joycons';
	clearInterval(refreshInterval);
	refreshInterval = setInterval(slideAuto, 5000);
}

document.getElementById('slidelabel5').onclick = function(){
	count = 5;
    title.innerHTML = 'Wiimote (Nunchuck)';
	clearInterval(refreshInterval);
	refreshInterval = setInterval(slideAuto, 5000);
}

document.getElementById('slidelabel6').onclick = function(){
	count = 6;
    title.innerHTML = 'Wiimote Joycon Right One Hand';
	clearInterval(refreshInterval);
	refreshInterval = setInterval(slideAuto, 5000);
}

document.getElementById('slidelabel7').onclick = function(){
	count = 7;
    title.innerHTML = 'Wiimote Joycon/Nunchuck Switch (One Hand)';
	clearInterval(refreshInterval);
	refreshInterval = setInterval(slideAuto, 5000);
}

var btn = document.getElementsByClassName("btn")[0];
btn.addEventListener('click', () => { 
	localStorage.setItem("copyrights", "accept");
	location.href="../soul-controller-mojo-showcase/";
}, false);