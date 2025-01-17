
// Get the button
const mybutton = document.getElementsByClassName("topbtn")[0];
if (mybutton) {
	mybutton.addEventListener("click", topFunction);
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

scrollFunction();

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.visibility = "visible";
		mybutton.style.opacity = "0.75";
	} else {
		mybutton.style.display = "hidden";
		mybutton.style.opacity = "0";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	$("html, body").animate({ scrollTop: 0 }, 1000);
}

// RGPD banner
checkingBanner();

function checkingBanner() {
	var getitem = localStorage.getItem("rgpd");
	if (getitem == "" | getitem == null | getitem == "undefined" | getitem == "no consent") {
		openBanner();
		openBannerContact();
	}
	else if (getitem == "consent") {
		closeBanner();
	}
}

const infobulle = document.getElementsByClassName("infobulle")[0];
if (infobulle) {
	infobulle.addEventListener("click", openBanner);
}

function openBanner() {
	const banner = document.getElementById("banner");
	if (banner) {
		banner.style.display = "block";
	}
}

const closebanner = document.getElementById("closebanner");
if (closebanner) {
	closebanner.addEventListener("click", closeBanner);
}

const button1banner = document.getElementById("button1banner");
if (button1banner) {
	button1banner.addEventListener("click", rgpdConsent);
}

const button2banner = document.getElementById("button2banner");
if (button2banner) {
	button2banner.addEventListener("click", rgpdNoConsent);
}

function rgpdConsent() {
	localStorage.setItem("rgpd", "consent");
	closeBanner();
	openBannerContact();
}

function rgpdNoConsent() {
	var getitem = localStorage.getItem("copyrights");
	if (getitem == "accept" | getitem == "expired accept") {
		localStorage.setItem("copyrights", "no accept");
		localStorage.setItem("rgpd", "no consent");
	}
	var target = window.location.href;
	var ismain = target.endsWith('michaelandrefraniatte.github.io') | target.endsWith('michaelandrefraniatte.github.io/') | target.endsWith('michaelandrefraniatte.github.io/index.html') | target.endsWith('michaelandrefraniatte.github.io/#copyrights') | target.endsWith('michaelandrefraniatte.github.io/#copyrights/') | target.endsWith('michaelandrefraniatte.github.io/index.html/#copyrights');
	if (!ismain) {
		window.location.href = "../#copyrights";
	}
	else {
		changeNotVisible();
		document.getElementById("acceptbutton").onclick = async () => {
			var chkBox = document.getElementById('acceptbox');
			if (chkBox.checked) {
				localStorage.setItem("copyrights", "accept");
				changeVisible();
				openBanner();
				openBannerContact();
				setTimeout(expireAccept, 2000);
			}
		};
	}
}

function closeBanner() {
	const banner = document.getElementById("banner");
	if (banner) {
		banner.style.display = "none";
	}
}

// Contact banner
const infobullecontact = document.getElementsByClassName("infobulle-contact")[0];
if (infobullecontact) {
	infobullecontact.addEventListener("click", openBannerContact);
}

function openBannerContact() {
	const bannerContact = document.getElementById("banner-contact");
	if (bannerContact) {
		bannerContact.style.display = "block";
	}
}

const closebannercontact = document.getElementById("closebanner-contact");
if (closebannercontact) {
	closebannercontact.addEventListener("click", closeBannerContact);
}

const buttonbannercontact = document.getElementById("buttonbanner-contact");
if (buttonbannercontact) {
	buttonbannercontact.addEventListener("click", copyEmailToClipboard);
}

function closeBannerContact() {
	const bannercontact = document.getElementById("banner-contact");
	if (bannercontact) {
		bannercontact.style.display = "none";
	}
}

function copyEmailToClipboard() {
	copyTextToClipboard("michael.franiatte@gmail.com")
}

function copyTextToClipboard(text) {
	if (!navigator.clipboard) {
		fallbackCopyTextToClipboard(text);
		return;
	}
	navigator.clipboard.writeText(text);
}

function fallbackCopyTextToClipboard(text) {
	var textArea = document.createElement("textarea");
	textArea.value = text;
	textArea.style.top = "0";
	textArea.style.left = "0";
	textArea.style.position = "fixed";
	document.body.appendChild(textArea);
	textArea.focus();
	textArea.select();
	try {
		var successful = document.execCommand('copy');
	}
	catch { }
	document.body.removeChild(textArea);
}

// Modal box images
var bg_color_img_box = 'rgba(0,0,0,0.9)'
var allow_hide_scroll_img_box = 'no'
var use_fade_inout_img_box = 'no'
var speed_img_box = 0.08
var z_index_dv_img_box = 999
var vopa_img_box, idpopup_img_box

var hwin_img_box = window.innerHeight
var wwin_img_box = window.innerWidth
var himg_img_box, padtop_img_box, idfadein_img_box
var img_img_box = new Image()

var imageinc = 0
var imagearray = []

var crtdv_img_box = document.createElement('div')
crtdv_img_box.id = 'img_box'
document.getElementsByTagName('body')[0].appendChild(crtdv_img_box)
idpopup_img_box = document.getElementById("img_box")
idpopup_img_box.style.top = 0
idpopup_img_box.style.left = 0
idpopup_img_box.style.opacity = 0
idpopup_img_box.style.width = '100%'
idpopup_img_box.style.height = '100%'
idpopup_img_box.style.display = 'none'
idpopup_img_box.style.position = 'fixed'
idpopup_img_box.style.cursor = 'pointer'
idpopup_img_box.style.textAlign = 'center'
idpopup_img_box.style.zIndex = z_index_dv_img_box
idpopup_img_box.style.backgroundColor = bg_color_img_box

function img_box(self) {
	if (event.target.parentNode.className == 'card') {
		imagearray = getNextSiblings(event.target);
	}
	document.getElementsByTagName('html')[0].style.overflowY = 'hidden'
	var namepic_img_box = typeof self === 'string' ? self : self.src
	vopa_img_box = 0
	img_img_box.src = namepic_img_box
	img_img_box.onload = function () {
		himg_img_box = img_img_box.height
		wimg_img_box = img_img_box.width
		idpopup_img_box.innerHTML = '<img src=' + namepic_img_box + '>'
		if (wimg_img_box > wwin_img_box) {
			idpopup_img_box.getElementsByTagName('img')[0].style.width = '90%'
		}
		else if (himg_img_box > hwin_img_box) {
			idpopup_img_box.getElementsByTagName('img')[0].style.height = '90%'
			himg_img_box = hwin_img_box * 90 / 100
		}
		if (himg_img_box < hwin_img_box) {
			padtop_img_box = (hwin_img_box / 2) - (himg_img_box / 2)
			idpopup_img_box.style.paddingTop = padtop_img_box + 'px'
		}
		else {
			idpopup_img_box.style.paddingTop = '0px'
		}

		if (allow_hide_scroll_img_box == 'yes') {
			document.body.style.overflow = 'hidden'
		}
		idpopup_img_box.style.display = 'block'
	}
	if (use_fade_inout_img_box == 'yes') {
		idfadein_img_box = setInterval(function () {
			if (vopa_img_box <= 1.1) {
				idpopup_img_box.style.opacity = vopa_img_box
				vopa_img_box += speed_img_box
			}
			else {
				idpopup_img_box.style.opacity = 1
				clearInterval(idfadein_img_box)
			}
		}, 10)
	}
	else {
		idpopup_img_box.style.opacity = 1
	}
}
idpopup_img_box.onclick = function (e) {
	imageinc++
	if (imageinc >= imagearray.length) {
		imageinc = 0
		var idfadeout_img_box = setInterval(function () {
			if (vopa_img_box >= 0) {
				idpopup_img_box.style.opacity = vopa_img_box
				vopa_img_box -= speed_img_box
			} else {
				idpopup_img_box.style.opacity = 0
				clearInterval(idfadeout_img_box)
				idpopup_img_box.style.display = 'none'
				idpopup_img_box.innerHTML = ''
				vopa_img_box = 0
				document.getElementsByTagName('html')[0].style.overflowY = 'visible'
			}
		}, 10)
	}
	else
		img_box(imagearray[imageinc])
}

function getNextSiblings(elem) {
	var result = [];
	var node = elem.parentNode.firstChild;
	while (node) {
		if (node.tagName == 'IMG') {
			result.push(node.src);
		}
		node = node.nextElementSibling;
	}
	return result;
}

// Fadeout on new link
var modalaccept = document.getElementsByClassName("modalaccept")[0];

$('a:not(.dl-link)').click(function (event) {
	event.preventDefault();
	$('#main').removeClass('fadeIn');
	$('#main').addClass('fade');
	setTimeout(() => { newPage(this.href) }, 1000);
});

function newPage(newlocation) {
	localStorage.setItem("copyrights", "accept");
	window.location = newlocation;
}

// Fadout on logo click
function clickLogo() {
	$('#main').removeClass('fadeIn');
	$('#main').addClass('fade');
	setTimeout(() => {
		var target = window.location.href;
		var ismain = target.endsWith('michaelandrefraniatte.github.io') | target.endsWith('michaelandrefraniatte.github.io/') | target.endsWith('michaelandrefraniatte.github.io/index.html') | target.endsWith('michaelandrefraniatte.github.io/#copyrights') | target.endsWith('michaelandrefraniatte.github.io/#copyrights/') | target.endsWith('michaelandrefraniatte.github.io/index.html/#copyrights');
		if (!ismain) {
			window.location.href = "../";
		}
		else {
			window.location.href = "https://github.com/michaelandrefraniatte";
		}
	}, 1000);
}

var target = window.location.href;
if (!target.endsWith("/#copyrights")) {
	changeVisible();
}

checkAcceptCopyrights();

function checkAcceptCopyrights() {
	var target = window.location.href;
	if (localStorage.getItem("rgpd") != "consent" | target.endsWith("/#copyrights")) {
		changeNotVisible();
		document.getElementById("acceptbutton").onclick = async () => {
			var chkBox = document.getElementById('acceptbox');
			if (chkBox.checked) {
				localStorage.setItem("copyrights", "accept");
				changeVisible();
				setTimeout(expireAccept, 2000);
			}
		};
	}
}

// Timeout after navigation
function expireAccept() {
	localStorage.setItem("copyrights", "expired accept");
}

// Going back and reload with event handler instead of the listener addEventListener("focus", (event) => {});
onfocus = (event) => {
	var target = window.location.href;
	if (!target.endsWith("/#copyrights")) {
		changeVisible();
	}
	checkAcceptCopyrights();
};

function changeVisible() {
	$('#main').removeClass('fade');
	$('#main').addClass('fadeIn');
	modalaccept.style.display = "none";
	document.getElementsByTagName('html')[0].style.overflowY = 'visible';
	document.body.style.overflow = 'visible';
}

function changeNotVisible() {
	$('#main').removeClass('fadeIn');
	$('#main').addClass('fade');
	modalaccept.style.display = "block";
	document.getElementsByTagName('html')[0].style.overflowY = "hidden";
	document.body.style.overflow = 'hidden';
	var getitem = localStorage.getItem("copyrights");
	if (getitem == "no accept" | getitem == "expired accept" | localStorage.getItem("rgpd") == "no consent") {
		var chkBox = document.getElementById('acceptbox');
		chkBox.checked = true;
	}
}

// Pagination
var numberofpages = document.querySelectorAll(".pagination").length;
var pagenumber = 1;

function goToPage(number) {
	pagenumber = number;
	var pagination = document.querySelectorAll(".pagination");
	pagination.forEach((el) => {
		if (el.dataset.id != pagenumber) {
			el.innerText = "〇";
		}
		else {
			el.innerText = "⬤";
		}
	});
	var page = document.querySelectorAll(".page");
	page.forEach((el) => {
		if (el.dataset.id != pagenumber) {
			el.style.display = "none";
		}
		else {
			el.style.display = "";
		}
	});
}

function sliceToPage(number) {
	pagenumber += number;
	if (pagenumber <= 0) {
		pagenumber = 1;
	}
	if (pagenumber >= numberofpages + 1) {
		pagenumber = numberofpages;
	}
	goToPage(pagenumber);
}

// Slideshow for Youtube videos
var Player;
var slideindex = 0;
var videoids = [];

processFill();

function processFill() {
	var player = document.querySelector("#player");
	if (player) {
		var videoid = player.dataset.videoid;
		videoids = videoid.replace(/\[|\]/g, '').split(',');
		createPlayer(videoids[0]);
	}
}

function createPlayer(videoid) {
	var widthsize = 100 + '%';
	var heightsize = screen.availWidth * 0.4 + 'px';
	window.YT.ready(function () {
		Player = new YT.Player("player", {
			width: widthsize,
			height: heightsize,
			videoId: videoid,
			playerVars: {
				autoplay: 0,
				controls: 1,
				rel: 1,
				showinfo: 1,
				loop: 0,
				modestbranding: 1
			},
			events: {
			}
		});
	});
}

function plusSlides(n) {
	slideindex += n;
	if (slideindex >= videoids.length)
		slideindex = 0;
	if (slideindex < 0)
		slideindex = videoids.length - 1;
	Player.stopVideo();
	Player.destroy();
	Player = null;
	var player = document.querySelector("#player");
	player.innerHTML = "<div class='loader'></div>";
	createPlayer(videoids[slideindex]);
}

// Disguard context menu to open
document.body.addEventListener("contextmenu", function (e) {
	e.preventDefault();
});