var myfavours = {};
const obj = {};
var span = document.getElementsByClassName('close')[0];
var modal = document.getElementById('myModal');
var slideIndex = 1;
var tempclass = '';
var resindicex = window.screen.availWidth;
var resindicey = window.screen.availHeight;

function changeTitle() {
    document.title = 'my-favours';
}

$(function() {
    changeTitle();
    var getitem = localStorage.getItem('myfavours');
    if (getitem == '' | getitem == null | getitem == 'undefined') {
        localStorage.setItem('my-favours', '[]');
    }
    createMyfavours();
});

span.onclick = function() { 
    modal.style.display = 'none';
    $('.slideshow-container').empty();
    $('body').css('overflow-y', 'auto');
}

function openModal(x) {
    x.onclick = function(){
        createModal(x);
        modal.style.display = 'block';
        slideIndex = 1;
        showSlides(slideIndex);
    }
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
  }
  slides[slideIndex-1].style.display = 'block';
  var link = $('.mySlides:visible').data('link'); 
  var a = document.getElementById('download');
  a.href = link.replace('https://www.youtube.com/embed/', 'https://www.youtube.com/watch?v=');
}

function createModal(x) {
    $('.menushow-modal-container').html('');
    var htmlString = ``;
    htmlString = `<div class=\'bg-light fileminus\' style=\'display:float;position:absolute;float:right;right:100px;\' onclick=\'contentminus();\' title=\'remove a content\'>
                    <i class=\'fa fa-minus\'></i></div>
                    <div class=\'bg-light fileplus\' style=\'display:float;position:absolute;float:right;right:70px;\' onclick=\'contentplus();\' title=\'add a content\'>
                    <i class=\'fa fa-plus\'></i></div>
                    <div class=\'bg-light filechange\' style=\'display:float;position:absolute;float:right;right:40px;\' onclick=\'changefavour();\' title=\'change favour\'>
                    <i class=\'fa fa-pencil\'></i></div>
                    <a href=\'\' class=\'bg-light\' style=\'display:float;position:absolute;float:right;right:10px;\' id=\'download\' title=\'go to content\'>
                    <i class=\'fa fa-download\'></i></a>`;
    var element = document.getElementById('myModal');
    if (tempclass != '') {
        element.classList.remove(tempclass);
    }
    element.classList.add(x.src);
    tempclass = x.src;
    $('.menushow-modal-container').append(htmlString);
    var files = obj[x.src] || [];
    $('.slideshow-container').html('');
    htmlString = ``;
    for (let file of files) {
        if (!file.includes('www.youtu')) {
            htmlString += `<div class=\'mySlides\' data-link=\'` + file + `\'>
                                <img src=\'` + file + `\' class=\'content\' style=\'width:80%\'>
                            </div>`;
        }
    }
    for (let file of files) {
        if (file.includes('www.youtu')) {
            file = file.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/');
            htmlString += `<div class=\'mySlides\' data-link=\'` + file + `\'>
                                <iframe src=\'` + file + `\' frameborder=\'0\' allowfullscreen class=\'content\' style=\'width:` + resindicex * 80 / 100 + `px;height:` + 6.6 / 16 * resindicex * 80 / 100 + `px;\'></iframe>
                            </div>`;
        }
    }
    htmlString += `<a class=\'prev\' onclick=\'plusSlides(-1)\'>&#10094;</a>
                  <a class=\'next\' onclick=\'plusSlides(1)\'>&#10095;</a>`;
    $('.slideshow-container').append(htmlString);
    $('body').css('overflow-y', 'hidden');
}

function contentminus() {
    var element = document.getElementById('myModal');
    var folder = element.className;
    if (folder != '') {
        var item = prompt('Please enter a content link to delete from ' + folder + ' favour:', '');
        if (!(item == null || item == '')) {
            myfavours = JSON.parse(localStorage.getItem('myfavours') || '[]');
            myfavours = transformObj(myfavours);
            var newmyfavours = [];
            myfavours.forEach(function(val, index) {
                if ((val.content != item & val.myfavour == folder) | val.myfavour != folder) {
                    newmyfavours.push({content: val.content, myfavour: val.myfavour});
                }
            });
            var tempgrouper = newmyfavours;
            var grouped = transformArr(tempgrouper);
            grouped = transformInpand(grouped);
            localStorage.setItem('myfavours', JSON.stringify(grouped));
            location.reload();
        }
    }
}

function contentplus() {
    var element = document.getElementById('myModal');
    var folder = element.className;
    if (folder != '') {
        var item = prompt('Please enter a content link to add in ' + folder + ' favour:', '');
        if (!(item == null || item == '')) {
            myfavours = JSON.parse(localStorage.getItem('myfavours')) || [];
            myfavours = transformObj(myfavours);
            myfavours.push({content: item, myfavour: folder});
            var tempgrouper = myfavours;
            var grouped = transformArr(tempgrouper);
            grouped = transformInpand(grouped);
            localStorage.setItem('myfavours', JSON.stringify(grouped));
            location.reload();
        }
    }
}

function transformInpand(orig) {
    var grouped = [];
    orig.forEach(function(val, index) {
        var name = val.myfavour;
        var files = val.contents;
        var tempgrouped = [];
        for (let file of files) {
            var content = file.content;
            tempgrouped.push(content);
         };
        grouped.push({contents : tempgrouped, myfavour: name});
    });
    return grouped;
}

function transformObj(orig) {
    myfavours = [];
    orig.forEach(function(val, index) {
        var name = val.myfavour;
        var files = val.contents;
        for (let file of files) {
             myfavours.push({content: file, myfavour: name});
         };
    });
    return myfavours;
}

function transformArr(orig) {
    var newArr = [], myfavours = {}, i, j, cur;
    for (i = 0, j = orig.length; i < j; i++) {
        cur = orig[i];
        if (!(cur.myfavour in myfavours)) {
            myfavours[cur.myfavour] = {myfavour: cur.myfavour, contents: []};
            newArr.push(myfavours[cur.myfavour]);
        }
        myfavours[cur.myfavour].contents.push({content: cur.content});
    }
    return newArr;
}

function createMyfavours() {
    $('.spinner').removeClass('hide');
    $('.spinner').addClass('show');
    myfavours = JSON.parse(localStorage.getItem('myfavours') || '[]');
    myfavours = transformObj(myfavours);
    try {
        var grouped = transformArr(myfavours);
        grouped.forEach(function(val, index) {
            var name = val.myfavour;
            var files = val.contents;
            var array = [];
            var n = 0;
            for (let file of files) {
                if (file.content != '') {
                    var content = file.content;
    	            array.push(content);
                }
             };
             obj[name] = array;
        });
    }
    catch {
        localStorage.setItem('my-favours', '[]');
    }
    var keyNames = Object.keys(obj);
    let htmlString = '';
    $('.menu').html('');
    htmlString = `<div class=\'bg-light folderminus\' style=\'display:float;position:absolute;left:10px;top:0px;\' onclick=\'listminus();\' title=\'remove a favour\'>
                    <i class=\'fa fa-minus\'></i></div>
                    <div class=\'bg-light folderplus\' style=\'display:float;position:absolute;left:40px;top:0px;\' onclick=\'listplus();\' title=\'add a favour\'>
                    <i class=\'fa fa-plus\'></i></div>
                    <div class=\'icon-download\' style=\'display:float;\'><label for=\'filename\'>
                    <div class=\'bg-light foldersave\' style=\'display:float;position:absolute;left:70px;top:0px;\'>
                    <i class=\'fa fa-save\' title=\'save favours\'></i></div></label>
                    <input type=\'button\' onClick=\'handleFilename()\' value=\'Save\' class=\'button\' id=\'filename\'></div>
                    <div class=\'icon-upload\' style=\'display:float;\'><label for=\'txtFileInput\'>
                    <div class=\'bg-light folderopen\' style=\'display:float;position:absolute;left:100px;top:0px;\'>
                    <i class=\'fa fa-folder-open\' title=\'open favours\'></i></div></label>
                    <input type=\'file\' id=\'txtFileInput\' onchange=\'handleFiles(this.files)\' accept=\'.txt\'></div>`;
    $('.menu').append(htmlString);
    htmlString = '';
    $('.list').html('');
    var countlength = 0;
    var keylength = keyNames.length;
    for (let keyName of keyNames) {
        if (keyName.length > 5) {
            countlength++;
            if (countlength == 1) {
                htmlString = `<div class=\'row\'>`;
            }
            htmlString += `<img onmouseover=\'openModal(this)\' class=\'\' src=\'` + keyName + `\' style=\'width:80%\'>`;
            if (countlength >= keylength) {
                htmlString += `</div>`;
            }
        }
    }
    $('.list').append(htmlString);
    $('.spinner').removeClass('show');
    $('.spinner').addClass('hide');
}

function handleFilename() {
	exportTableToTXT('my-favours.txt');
}

function exportTableToTXT(filename) {
    var txt = localStorage.getItem('myfavours');
    downloadTXT(txt, filename);
}

function downloadTXT(txt, filename) {
    var txtFile;
    var downloadLink;
	if (window.Blob == undefined || window.URL == undefined || window.URL.createObjectURL == undefined) {
		return;
	}
    txtFile = new Blob([txt], {type:'text/txt'});
    downloadLink = document.createElement('a');
    downloadLink.download = filename;
    downloadLink.href = window.URL.createObjectURL(txtFile);
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
    downloadLink.click();
}

$(function() {
    $('#txtFileInput').click(function(){
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
	if(evt.target.error.name == 'NotReadableError') {
	}
}

function processData(txt) {
    localStorage.setItem('myfavours', txt);
    location.reload();
}

function listminus() {
    var item = prompt('Please enter a favour to delete:', '');
    if (!(item == null || item == '')) {
        myfavours = JSON.parse(localStorage.getItem('myfavours') || '[]');
        myfavours = transformObj(myfavours);
        var newmyfavours = [];
        myfavours.forEach(function(val, index) {
            if (val.myfavour != item) {
                newmyfavours.push({content: val.content, myfavour: val.myfavour});
            }
        });
        var tempgrouper = newmyfavours;
        var grouped = transformArr(tempgrouper);
        grouped = transformInpand(grouped);
        localStorage.setItem('myfavours', JSON.stringify(grouped));
        location.reload();
    }
}

function listplus() {
    var item = prompt('Please enter a favour to add:', '');
    if (!(item == null || item == '')) {
        myfavours = JSON.parse(localStorage.getItem('myfavours')) || [];
        myfavours = transformObj(myfavours);
        myfavours.push({content: '', myfavour: item});
        var tempgrouper = myfavours;
        var grouped = transformArr(tempgrouper);
        grouped = transformInpand(grouped);
        localStorage.setItem('myfavours', JSON.stringify(grouped));
        location.reload();
    }
}

function changefavour() {
    var element = document.getElementById('myModal');
    var folder = element.className;
    if (folder != '') {
        var item = prompt('Please enter a new favour link to change from ' + folder + ' favour:', '');
        if (!(item == null || item == '')) {
            myfavours = JSON.parse(localStorage.getItem('myfavours') || '[]');
            myfavours = transformObj(myfavours);
            var newmyfavours = [];
            myfavours.forEach(function(val, index) {
                if (val.myfavour == folder) {
                    newmyfavours.push({content: val.content, myfavour: item});
                }
                if (val.myfavour != folder) {
                    newmyfavours.push({content: val.content, myfavour: val.myfavour});
                }
            });
            var tempgrouper = newmyfavours;
            var grouped = transformArr(tempgrouper);
            grouped = transformInpand(grouped);
            localStorage.setItem('myfavours', JSON.stringify(grouped));
            location.reload();
        }
    }
}