var menuIndex = 1;
var slideIndex = 1;
var obj = {};
var wd = 2;
var wu = 2;
var checkfolder = "";
var collapse = false;
var sizescreenx = $(document).width();
var sizescreeny = $(document).height();
var done = false;
const thumbnails = {};
const titles = {};
var playshots = {};
var isplayshot = {};
var rand = false;

$(document).ready(function () {
    playshots = localStorage.getItem('playshots');
    if (playshots == '' | playshots == null | playshots == 'undefined') {
        localStorage.setItem('playshots', '[]');
    }
    getAllFilesFromFolders();
});

function setImageSource() {
    var src = $(".image:visible").attr('src'); 
    var a = document.getElementById("download");
    a.href = src;
}

function setImagePlayOverlay() {
    try {
        var element = document.getElementsByClassName("thumbnailed");
        for (var i = 0; i < element.length; i++) {
            element[i].style.width = "100%";
            element[i].style.height = "100%"; 
        }
        $("img").removeClass("thumbnailed");
        var id = $(".image:visible").attr('id');
        var el = document.getElementById(id + "-Overlay");
        el.classList.add("thumbnailed");
        var elements = document.getElementsByClassName("overlaytitle");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.cssText = "height:7vh;color:#FFFFFF;";
        }
        var e = document.getElementById(id + "-OverlayTitle");
        e.style.cssText = "height:7vh;color:#FFFFFF;font-style:italic;";
    }
    catch {
        return;
    }
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
    slideIndex = 1;
    }    
    if (n < 1) {
    slideIndex = slides.length;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
    setImageSource();
    setImagePlayOverlay();
}

function plusMenu(n) {
    showMenu(menuIndex += n);
}

function showMenu(n) {
    var menu = document.getElementsByClassName("myMenu");
    if (n > menu.length) {
    menuIndex = 1;
    }
    if (n < 1) {
    menuIndex = menu.length;
    }
    for (var i = 0; i < menu.length; i++) {
        menu[i].style.display = "none";
    }
    menu[menuIndex-1].style.display = "block";
    setTimeout((function(){
        document.getElementById("navbar").style.top = "0";
        document.getElementById("overlay").style.top = "65vh";
        createOverlay();
        setImagePlayOverlay();
    })
    , 500);
}

function getAllFilesFromFolders() {
    try {
        $('.spinner').removeClass('hide');
        $('.spinner').addClass('show');
        playshots = JSON.parse(playshots);
        playshots.forEach(function (val) {
            var name = val.name;
            var files = val.value;
            var array = [];
            for (let file of files) {
                if (file != '') {
                    array.push(file);
                }
            };
            obj[name] = array;
        });
    }
    catch {
        localStorage.setItem('playshots', '[]');
    }
    $('.spinner').removeClass('show');
    $('.spinner').addClass('hide');
    loadThumbnails();
    createMenu();
    createSlides();
}

function createMenu() {
    var keyNames = Object.keys(obj);
    let htmlString = '';
    htmlString = `<div class=\'bg-light collaspse\' style=\'display:float;position:absolute;float:left;left:10px;\' onclick=\'listCollaspse();\' title=\'see playshots\'>
                    <i class=\'fa fa-bars\'></i></div>
                    <div class=\'bg-light folderminus\' style=\'display:float;position:absolute;float:left;left:40px;\' onclick=\'listminus();\' title=\'remove a playshot\'>
                    <i class=\'fa fa-minus\'></i></div>
                    <div class=\'bg-light folderplus\' style=\'display:float;position:absolute;float:left;left:70px;\' onclick=\'listplus();\' title=\'add a playshot\'>
                    <i class=\'fa fa-plus\'></i></div>
                    <div class=\'icon-download\' style=\'display:float;\'><label for=\'filename\'>
                    <div class=\'bg-light foldersave\' style=\'display:float;position:absolute;float:left;left:100px;bottom:0px\'>
                    <i class=\'fa fa-save\' title=\'save playshots\'></i></div></label>
                    <input type=\'button\' onClick=\'handleFilename()\' value=\'Save\' class=\'button\' id=\'filename\'></div>
                    <div class=\'icon-upload\' style=\'display:float;\'><label for=\'txtFileInput\'>
                    <div class=\'bg-light folderopen\' style=\'display:float;position:absolute;float:left;left:130px;bottom:0px\'>
                    <i class=\'fa fa-folder-open\' title=\'open playshots\'></i></div></label>
                    <input type=\'file\' id=\'txtFileInput\' onchange=\'handleFiles(this.files)\' accept=\'.txt\'></div>
                    <div class=\'navMenu\'><a href='#' onclick=\'plusMenu(-1)\' style=\'text-decoration:none;\' title=\'see previous playshot\'><</a></div>`;
    for (let keyName of keyNames) {
        htmlString +=
            `<div class=\'myMenu\'>
            <a href='#' onclick=\'clickMenu()\' class=\'folder\' style=\'text-decoration:none;\' title=\'open playshot\'>`+ keyName + `</a>
        </div>`;
    }
    htmlString += `<div class=\'navMenu\'><a href='#' onclick=\'plusMenu(1)\' style=\'text-decoration:none;\' title=\'see next playshot\'>></a></div>
                    <div class=\'bg-light fileminus\' style=\'display:float;position:absolute;float:right;right:70px;\' onclick=\'valueminus();\' title=\'remove an image\'>
                    <i class=\'fa fa-minus\'></i></div>
                    <div class=\'bg-light fileplus\' style=\'display:float;position:absolute;float:right;right:40px;\' onclick=\'valueplus();\' title=\'add an image\'>
                    <i class=\'fa fa-plus\'></i></div>
                    <a href=\'\' class=\'bg-light\' style=\'display:float;position:absolute;float:right;right:10px;\' id=\'download\' title=\'go to image\'>
                    <i class=\'fa fa-youtube-play\'></i></a>`;
    $('.menushow-container').append(htmlString);
    var folders = (Object.keys(obj).map(key => key));
    var index = 0;
    htmlString = ``;
    for (let folder of folders) {
        htmlString += `<a onclick=\'goToChannel(this)\' data-folder=\'` + index + `\' class=\'gotochannel\'>` + folder + `</a>`;
        index++;
    }
    $('#list').append(htmlString);
    showMenu(1);
 }
 
function createSlides() {
    var folder = Object.keys(obj)[0];
    var files = Object.values(obj)[0];
    var a = document.getElementById("download");
    a.href = files[0];
    let htmlString = ``;
    for (let file of files) {
    	htmlString += `<div style="top:10%;align-items:center;position:absolute;">` + folder + `</div>
                       <div class="mySlides" align="center">
                        <div class="item">
                        <object id="` + folder + `-` + file + `" src="` + file + `" class="image">
                        <img src="` + file + `" style="width:60%;height:auto;top:15%;left:20%;display:block;position:absolute;">
                        </object>
                        <div class="centered" style="top:90%;align-items:center;position:absolute;">` + file + `</div>
                        </div>
                       </div>`;
    }
    htmlString += `<div>
                    <a class="prev" onclick="plusSlides(-1)" style="text-decoration:none;color:white;">&#10094;</a>
                    <a class="next" onclick="plusSlides(1)" style="text-decoration:none;color:white;">&#10095;</a>
                   </div>`
    $(".slideshow-container").html(htmlString);
    showSlides(1);
 }

 function clickMenu() {
    var folder = $(".folder:visible").text();
    var files = obj[folder];
    var a = document.getElementById("download");
    a.href = files[0];
    $(".slideshow-container").html("");
    let htmlString = ``;
    for (let file of files) {
    	htmlString += `<div style="top:10%;align-items:center;position:absolute;">` + folder + `</div>
                       <div class="mySlides" align="center">
                        <div class="item">
                        <object id="` + folder + `-` + file + `" src="` + file + `" class="image">
                        <img src="` + file + `" style="width:60%;height:auto;top:15%;left:20%;display:block;position:absolute;">
                        </object>
                        <div class="centered" style="top:90%;align-items:center;position:absolute;">` + file + `</div>
                        </div>
                       </div>`;
    }
    htmlString += `<div>
                    <a class="prev" onclick="plusSlides(-1)" style="text-decoration:none;color:white;">&#10094;</a>
                    <a class="next" onclick="plusSlides(1)" style="text-decoration:none;color:white;">&#10095;</a>
                   </div>`
    $(".slideshow-container").html(htmlString);
    slideIndex = 1;
    showSlides(1);
 }

function createOverlay() {
    var folder = $(".folder:visible").text();
    var folderindex = (Object.keys(obj).map(key => key)).indexOf(folder);
    var fileindex = 0;
    if (folder != checkfolder) {
        checkfolder = folder;
        var files = obj[folder];
        let htmlString = `<div class="container">
                             <div class="row row-eq-height">`;
        for (let file of files) {
    	    htmlString += `<a onclick="goToImage(this)" data-folderindex="` + folderindex + `" data-fileindex="` + fileindex + `" class="goto">
                             <div class="col-xs-3" style="margin-top:3vh;">
                               <img class="align-middle" src="` + file + `" id="` + folder + `-` + file + `-Overlay" style="height:100%;width:100%;"/>
                             </div>
                           </a>`;
             fileindex++;
        }
        htmlString += `</div>
                      </div>`;
        $("#overlay").html(htmlString);
        document.getElementById("overlay").scrollTop = "0px";
    }
}

function goToImage(el) {
    clickMenu();
    var fileindex = Number(el.dataset.fileindex);
    slideIndex += fileindex;
    showSlides(slideIndex);
}

function goToChannel(el) {
    var folderindex = Number(el.dataset.folder);
    menuIndex = folderindex + 1;
    showMenu(menuIndex);
}

function loadThumbnails() {
    var folders = Object.keys(obj);
    for (let folder of folders) {
        var files = obj[folder];
        for (let file of files) {
            var img = new Image();
            img.src = file.link;
            img.addEventListener("load", function () {
            });
        }
    }
}

$(document).on("mousemove", function(event) {
    mouseOnTop(event.pageY);
});

function mouseOnTop(y) {
    if (wd == 1) {
        document.getElementById("navbar").style.top = "0";
        document.getElementById("overlay").style.top = "65vh";
        createOverlay();
    }
    if (wu == 1 & !collapse) {
        document.getElementById("navbar").style.top = "-50px";
        document.getElementById("overlay").style.top = "100vh";
    }
    if (y < 50 | y > window.screen.availHeight - 280)
    {
	    if (wd <= 1) {
		    wd = wd + 1;
	    }
	    wu = 0;
    }
    else
    {
	    if (wu <= 1) {
		    wu = wu + 1;
	    }
	    wd = 0;
    }
}

function listCollaspse() {
    if (!collapse) {
        collapse = true;
        document.getElementById("list").style.display = "inline-block";
    }
    else {
        collapse = false;
        document.getElementById("list").style.display = "none";
    }
}

function listminus() {
    var item = prompt('Please enter a playshot name to delete:', '');
    if (!(item == null || item == '')) {
        playshots = JSON.parse(localStorage.getItem('playshots') || '[]');
        var newplayshots = [];
        playshots.forEach(function (val) {
            if (val.name != item) {
                newplayshots.push({ name: val.name, value: val.value });
            }
        });
        localStorage.setItem('playshots', JSON.stringify(newplayshots));
        location.reload();
    }
}

function listplus() {
    var item = prompt('Please enter a playshot name to add:', '');
    if (!(item == null || item == '')) {
        playshots = JSON.parse(localStorage.getItem('playshots')) || [];
        playshots.push({ name: item, value: [] });
        localStorage.setItem('playshots', JSON.stringify(playshots));
        location.reload();
    }
}

function valueminus() {
    var folder = $('.folder:visible').text();
    if (folder != '') {
        var item = prompt('Please enter a link to add from ' + folder + ' playshot:', '');
        if (!(item == null || item == '')) {
            playshots = JSON.parse(localStorage.getItem('playshots') || '[]');
            var newplayshots = [];
            playshots.forEach(function (val) {
                if (val.name != folder) {
                    newplayshots.push({ name: val.name, value: val.value });
                }
                else {
                    var array = [];
                    var files = val.value;
                    for (let file of files) {
                        if (file != item) {
                            array.push(file);
                        }
                    }
                    newplayshots.push({ name: val.name, value: array });
                }
            });
            localStorage.setItem('playshots', JSON.stringify(newplayshots));
            location.reload();
        }
    }
}

function valueplus() {
    var folder = $('.folder:visible').text();
    if (folder != '') {
        var item = prompt('Please enter a link to add from ' + folder + ' playshot:', '');
        if (!(item == null || item == '')) {
            playshots = JSON.parse(localStorage.getItem('playshots') || '[]');
            var newplayshots = [];
            playshots.forEach(function (val) {
                if (val.name != folder) {
                    newplayshots.push({ name: val.name, value: val.value });
                }
                else {
                    var array = [];
                    array.push(item);
                    var files = val.value;
                    for (let file of files) {
                        array.push(file);
                    }
                    newplayshots.push({ name: val.name, value: array });
                }
            });
            localStorage.setItem('playshots', JSON.stringify(newplayshots));
            location.reload();
        }
    }
}

function handleFilename() {
    exportTableToTXT('playshot.txt');
}

function exportTableToTXT(filename) {
    var txt = localStorage.getItem('playshots');
    downloadTXT(txt, filename);
}

function downloadTXT(txt, filename) {
    var txtFile;
    var downloadLink;
    if (window.Blob == undefined || window.URL == undefined || window.URL.createObjectURL == undefined) {
        return;
    }
    txtFile = new Blob([txt], { type: 'text/txt' });
    downloadLink = document.createElement('a');
    downloadLink.download = filename;
    downloadLink.href = window.URL.createObjectURL(txtFile);
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
    downloadLink.click();
}

$(function () {
    $('#txtFileInput').click(function () {
        $(this).val('');
    });
});

function handleFiles(files) {
    $('.spinner').removeClass('hide');
    $('.spinner').addClass('show');
    getAsText(files[0]);
}

function getAsText(fileToRead) {
    var reader = new FileReader();
    reader.onload = loadHandler;
    reader.onerror = errorHandler;
    reader.readAsText(fileToRead);
}

function loadHandler(event) {
    var txt = event.target.result;
    processData(txt);
}

function errorHandler(evt) {
    if (evt.target.error.name == 'NotReadableError') {
    }
}

function processData(txt) {
    localStorage.setItem('playshots', txt);
    location.reload();
}