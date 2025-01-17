
var getitem = localStorage.getItem("copyrights");

// Checking acceptation
if (getitem != "accept") {
	goToMain();
}
else {
	setTimeout(expireAccept, 2000);
}

// Going back and reload with event handler instead of the listener onfocus = (event) => {};
addEventListener("focus", (event) => {
	if (getitem != "accept") {
		goToMain();
	}
	else {
		setTimeout(expireAccept, 2000);
	}
});

// Go to main if not accepting copyrights
function goToMain() {
	var target = window.location.href;
	var ismain = isMainPage(target);
	if (localStorage.getItem("rgpd") != "consent") {
		if (!ismain) {
			window.location.href = "../#copyrights";
		}
		else if (ismain) {
			window.location.href = "./#copyrights";
		}
	}
}

// Timeout after navigation
function expireAccept() {
	localStorage.setItem("copyrights", "expired accept");
}

// Enable interaction after content loading totally completed
function window_onload() {
	var target = window.location.href;
	var ismain = isMainPage(target);
	var sc = document.createElement('script');
	sc.src = ismain ? "custom/custom.js" : "../custom/custom.js";
	document.getElementsByTagName('head')[0].appendChild(sc);
}

function isMainPage(str) {
	return str.endsWith('michaelandrefraniatte.github.io') | str.endsWith('michaelandrefraniatte.github.io/') | str.endsWith('michaelandrefraniatte.github.io/index.html') | str.endsWith('Website/index.html') | str.endsWith('Website/Src/index.html') | str.endsWith('michaelandrefraniatte.github.io/#copyrights') | str.endsWith('michaelandrefraniatte.github.io/#copyrights/') | str.endsWith('michaelandrefraniatte.github.io/index.html/#copyrights') | str.endsWith('Website/index.html/#copyrights') | str.endsWith('Website/Src/index.html/#copyrights');
}

// About on keyboard key F11
window.addEventListener("DOMContentLoaded", () => {
	document.body.addEventListener('keyup', (event) => {
		if (event.key === 'F1') {
			alert('• Author: Michaël André Franiatte.\n• Contact: michael.franiatte@gmail.com.\n• Publisher: https://github.com/michaelandrefraniatte.\n• Copyrights: All rights reserved, no permissions granted.\n• License: Not open source, not free of charge to use.');
		}
	});
});