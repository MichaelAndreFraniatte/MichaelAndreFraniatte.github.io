var valsection = "";
var valdisplaysection = "";
var userHasScrolled = false;

$(function() {

    // Sidebar toggle behavior
    $('#sidebarCollapse').on('click', function() {
        userHasScrolled = true;
        valdisplaysection = valsection.prop('id');
        $('#sidebar, #content').toggleClass('active');
	    setTimeout(setUserScroll, 300);
    });

    //Smooth scrolling to page anchor on click
    $("a[href*='#']:not([href='#'])").click(function() {
        if (location.hostname == this.hostname && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
	        valsection = anchor;
            if (anchor.length) {
                $("html, body").animate({ scrollTop: anchor.offset().top }, 1000);
            }
        }
    });

    //ScrollSpy
    jQuery(window).scroll(checkActiveSection);
    jQuery(document).ready(checkActiveSection);

});

function checkActiveSection() {
    setTimeout(enableActiveSection, 50);
}

window.onscroll = function (e) {
    if (userHasScrolled) {
	    navigate();
    }
}

function setUserScroll() {
    userHasScrolled = false;
}

function navigate() {
    var section = document.getElementById(valdisplaysection);
    if (section) {
        $("html, body").scrollTop(section.offsetTop);
    }
}

function enableActiveSection() {
    var fromTop = jQuery(window).scrollTop();
    jQuery('.hr').each(function(){
        var sectionOffset = jQuery(this).offset();
        if (sectionOffset.top <= fromTop + 10) {
		    valsection = $(this);
		    jQuery('#navbar li a').addClass('text-dark');
		    jQuery('#navbar li a').addClass('bg-light');
		    jQuery('#navbar li a').removeClass('text-light');
		    jQuery('#navbar li a').removeClass('bg-dark');
		    jQuery('#navbar li[data-id="' + jQuery(this).data('id') + '"] a').removeClass('text-dark');
		    jQuery('#navbar li[data-id="' + jQuery(this).data('id') + '"] a').removeClass('bg-light');
		    jQuery('#navbar li[data-id="' + jQuery(this).data('id') + '"] a').addClass('text-light');
		    jQuery('#navbar li[data-id="' + jQuery(this).data('id') + '"] a').addClass('bg-dark');
        }
    });
}

//Type Writer
var i = 0;
var speed = 100;
var j = 0;
var txt = 'Creative';
var newtxt = '';
var txtarray = ["Creative", "Imaginative", "Worker", "Developer"];
var next = 1;

function typeWriter() {
    if (i < txt.length & j == 0) {
        document.getElementById("typewrite").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    if (i < txt.length & j == 1) {
        document.getElementById("typewrite").innerHTML = txt;
        i++;
        setTimeout(typeWriter, speed);
    }
    if (i < txt.length & j == 2) {
        newtxt = removeByIndex(newtxt, txt.length - i - 1)
        document.getElementById("typewrite").innerHTML = newtxt;
        i++;
        setTimeout(typeWriter, speed);
    }
    if (i >= txt.length) {
        i = 0;
        j++;
        newtxt = txt;
    }
    if (j >= 3) {
        j = 0;
        txt = txtarray[next];
        next++;
        if (next >= txtarray.length) {
            next = 0;
        }
    }
}

function removeByIndex(str,index) {
    return str.slice(0, index) + str.slice(index + 1);
}

$(function() {
    typeWriter();
});

//Print
function printHTML() {
    $('#sidebarCollapse').click();
    setTimeout(function(){ window.print(); }, 1500);
}

//Modal	
function viewModal(elements, x, y) {
    		document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
		var modal = document.getElementById("modal");
		var modalcontent = document.getElementById("modalcontent");
		modalcontent.innerHTML = "";
            var links = elements.replace(/\[|\]/g,'').split(',');
            var linknumber = 0;
		for (var link of links) {
		    var img = document.createElement("img");
		    img.src = link;
		    modalcontent.appendChild(img);
		    linknumber++;
		}
		modal.style.width = x + "px";
		modal.style.left = (window.innerWidth - x) / 2 + "px";
		modal.style.height = y + "px";
		modal.style.top = (window.innerHeight - y) / 2 + "px";
            modalcontent.scrollLeft = 0;
            modalcontent.scrollTop = 0;
	  	modal.style.display = "block";
		if (linknumber <= 1)
            	modalcontent.style.overflowX = 'hidden';
		else
            	modalcontent.style.overflowX = 'scroll';
                 
}

function closeModal() {
    var modal = document.getElementById("modal");
    if (modal) {
        modal.style.display = "none";
    }
    document.getElementsByTagName('html')[0].style.overflowY = 'visible';
}

//Send email
function validateForm() {
  document.getElementById('status').innerHTML = "";
  var name =  document.getElementById('name').value;
  if (name == "") {
      document.getElementById('status').innerHTML = "Name cannot be empty";
      return false;
  }
  var email =  document.getElementById('email').value;
  if (email == "") {
      document.getElementById('status').innerHTML = "Email cannot be empty";
      return false;
  } else {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(email)){
          document.getElementById('status').innerHTML = "Email format invalid";
          return false;
      }
  }
  var subject =  document.getElementById('subject').value;
  if (subject == "") {
      document.getElementById('status').innerHTML = "Subject cannot be empty";
      return false;
  }
  var body =  document.getElementById('message').value;
  if (body == "") {
      document.getElementById('status').innerHTML = "Message cannot be empty";
      return false;
  }
  var emailbody = "From: " + email + "</br>" + "Subject: " + subject + "</br>" + name + ": </br>" + body;
  Email.send({
        SecureToken : "0c6c62c6-5fbb-445c-a70e-2c73398d38b6",
        To : "michael.franiatte@gmail.com",
        From : "michael.franiatte@gmail.com",
        Subject : "https://michaelandrefraniatte.github.io/cv",
        Body : emailbody
  }).then(
      message => Valide()
  );
}

function Valide() {
	document.getElementById('status').innerHTML = 'E-mail sent successfully';
    document.getElementById('send').disabled = true;
}

// Fadout on logo click
function clickLogo() {
    $('body').removeClass('fadeIn');
    $('body').addClass('fade');
    setTimeout(() => {
        localStorage.setItem("copyrights", "accept");
        window.location.href = "../";
    }, 1000);
}

// Going back and reload with event handler instead of the listener addEventListener("focus", (event) => {});
onfocus = (event) => {
    $('body').removeClass('fade');
    $('body').addClass('fadeIn');
};

// Fadein at load
$('body').removeClass('fade');
$('body').addClass('fadeIn');

// Open CV
function openCV() {
	localStorage.setItem("copyrights", "accept");
	location.href="../cv-book/";
}

// Open main
function openMain() {
	localStorage.setItem("copyrights", "accept");
	location.href="../";
}

// Open thesis
function openThesis() {
	localStorage.setItem("copyrights", "accept");
	location.href="../Thesis-Book/";
}