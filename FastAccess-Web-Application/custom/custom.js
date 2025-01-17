var fastaccess = {};
var pictures = ["black", "img/background1.jpeg", "rgb(20, 20, 20)", "img/background2.jpg", "img/background3.jpg", "rgb(20, 12, 20)"];
var picture = "";
var style = "1";
var boxlinks = ["https://www.google.com", "https://www.youtube.com", "https://app.molotov.tv/channels/", "https://www.tf1.fr", "https://www.6play.fr", "https://www.netflix.com/fr-en/", "https://open.spotify.com"];
var boxnames = ["google", "youtube", "molotov", "tf1", "6play", "netflix", "spotify"];

// Google search
function search() {
    var searchterm = document.getElementById("search").value;
    window.location.href = "https://www.google.com/search?q=" + escape(searchterm);
}

function escape(unsafe) {
    return encodeURIComponent(unsafe);
}

window.onload = function () {
    document.getElementById("search").addEventListener("keydown", function (e) {
        if (e.keyCode == 13) {
            search();
        }
    });

    var getitem = localStorage.getItem('fastaccess');
    if (getitem != '' & getitem != null & getitem != 'undefined') {
        fastaccess = JSON.parse(getitem || '[]');
        style = fastaccess.style;
        pictures = fastaccess.pictures;
        boxlinks = fastaccess.boxlinks;
        boxnames = fastaccess.boxnames;
    }

    changeBox();
    changeStyle();
    changePicture();

    // Mouse click events
    document.body.addEventListener("contextmenu", function (e) {
        if (!e.target.matches('.search') & !e.target.matches('.autocomplete') & !e.target.matches('#search')) {
            e.preventDefault();
        }
    });

    document.body.addEventListener("mousedown", function (e) {
        if (!e.target.matches('.search') & !e.target.matches('.autocomplete') & !e.target.matches('#search')) {
            var posx = e.x;
            var posy = e.y;
            var menu = document.getElementById("menu");
            if (e.which == "3") {
                if (!menu) {
                    var div = document.createElement("div");
                    div.id = "menu";
                    div.classList = "menu";
                    div.innerHTML = "Toggle mode ✎";
                    div.style.left = posx + "px";
                    div.style.top = posy + "px";
                    div.style.position = "absolute";
                    div.style.display = "block";
                    div.style.color = "white";
                    div.style.backgroundColor = "rgb(50, 50, 50)";
                    div.style.zIndex = "10";
                    div.style.cursor = "pointer";
                    div.style.width = 8.6 + "vw";
                    div.style.height = 2 + "vw";
                    div.style.padding = "3px";
                    div.style.margin = "auto";
                    document.body.appendChild(div);
                }
                else {
                    menu.style.left = posx + "px";
                    menu.style.top = posy + "px";
                }
            }
            if (e.which == "1") {
                if (menu) {
                    if (posx > parseInt(menu.style.left) & posx < parseInt(menu.style.left) + 120 & posy > parseInt(menu.style.top) & posy < parseInt(menu.style.top) + 30) {
                        toggleMode();
                    }
                    else {
                        menu.remove();
                    }
                }
            }
        }
    });
};

function changeBox() {
    var page = document.createElement('div');
    page.id = "page";
    page.setAttribute('draggable', false);
    page.addEventListener("dragstart", (event) => { });
    page.addEventListener("dragover", (event) => { });
    page.addEventListener("drop", (event) => { });
    var text = "";
    for (i = 0; i < boxnames.length; i++) {
        text += "<div class=\"box\" id=\"box" + i + "\" draggable=\"false\" ondrop=\"drop(event)\" ondragover=\"allowDrop(event)\" ondragstart=\"drag(event)\" onclick=\"window.location.href='" + boxlinks[i] + "'\"" + "title=\"" + boxlinks[i] + "\"" + ">" + boxnames[i] + "</div>";
    }
    page.innerHTML = text;
    document.body.appendChild(page);
    const elements = document.getElementsByClassName("box");
    for (let i = 0; i < elements.length; i++) {
        elements[i].setAttribute('draggable', false);
        elements[i].addEventListener("dragstart", (event) => { });
        elements[i].addEventListener("dragover", (event) => { });
        elements[i].addEventListener("drop", (event) => { });
    }
}

function changeStyle() {
    if (style == "1") {
        for (var element of document.querySelectorAll(".box")) {
            element.style.backgroundColor = "rgb(53, 51, 51)";
            element.style.borderRadius = "10px";
            element.style.border = "solid 2px white";
            element.style.clipPath = "";
            element.style.color = "white";
        }
        var search = document.getElementsByClassName("search");
        var button = document.createElement('div');
        button.innerHTML = "<input type='submit' onclick='search();' value='Search'>";
        button.style.display = "flex";
        search[0].appendChild(button);
        button.firstElementChild.style.color = "white";
        button.firstElementChild.style.backgroundColor = "rgb(53, 51, 51)";
        button.firstElementChild.style.borderRadius = "0 10px 10px 0";
        button.firstElementChild.style.borderBottom = "solid 2px white";
        button.firstElementChild.style.borderTop = "solid 2px white";
        button.firstElementChild.style.borderRight = "solid 2px white";
        var input = document.getElementById("search");
        input.style.color = "black";
        input.style.backgroundColor = "#f1f1f1";
        input.style.borderRadius = "10px 0 0 10px";
        input.style.borderBottom = "solid 2px rgb(203, 201, 201)";
        input.style.borderTop = "solid 2px rgb(203, 201, 201)";
        input.style.borderLeft = "solid 2px rgb(203, 201, 201)";
    }
    else if (style == "2") {
        for (var element of document.querySelectorAll(".box")) {
            element.style.backgroundColor = "rgb(60, 30, 60)";
            element.style.borderRadius = "0px";
            element.style.border = "";
            element.style.clipPath = "polygon(0% 0%, 90% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 90%, 0% 90%)";
            element.style.color = "white";
        }
        var search = document.getElementsByClassName("search");
        var button = document.createElement('div');
        button.innerHTML = "<img src='img/google1.png' onclick='search();'>";
        button.style.display = "flex";
        search[0].appendChild(button);
        var input = document.getElementById("search");
        input.style.color = "white";
        input.style.backgroundColor = "transparent";
        input.style.borderBottom = "solid 2px rgb(203, 201, 201)";
    }
    else if (style == "3") {
        for (var element of document.querySelectorAll(".box")) {
            element.style.backgroundColor = "rgb(20, 20, 20)";
            element.style.borderRadius = "25px";
            element.style.border = "solid 3px rgb(212,175,55)";
            element.style.clipPath = "";
            element.style.color = "rgb(212, 175, 55)";
        }
        var search = document.getElementsByClassName("search");
        var button = document.createElement('div');
        button.innerHTML = "<img src='img/google2.png' onclick='search();'>";
        button.style.display = "flex";
        search[0].appendChild(button);
        var input = document.getElementById("search");
        input.style.color = "white";
        input.style.backgroundColor = "transparent";
        input.style.borderBottom = "solid 3px rgb(212,175,55)";
    }
    else if (style == "4") {
        for (var element of document.querySelectorAll(".box")) {
            element.style.backgroundColor = "rgb(255, 170, 20)";
            element.style.borderRadius = "0px";
            element.style.border = "";
            element.style.clipPath = "polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)";
            element.style.color = "purple";
        }
        var search = document.getElementsByClassName("search");
        var button = document.createElement('div');
        button.innerHTML = "<input type='submit' onclick='search();' value='Search'>";
        button.style.display = "flex";
        search[0].appendChild(button);
        button.firstElementChild.style.color = "purple";
        button.firstElementChild.style.backgroundColor = "rgb(255, 170, 20)";
        button.firstElementChild.style.clipPath = "polygon(10% 0%, 80% 0%, 100% 10%, 100% 90%, 80% 100%, 0% 100%, 0% 80%, 0% 0%)";
        var input = document.getElementById("search");
        input.style.color = "black";
        input.style.backgroundColor = "#f8c2f4";
        input.style.clipPath = "polygon(5% 0%, 95% 0%, 100% 0%, 100% 100%, 95% 100%, 5% 100%, 0% 95%, 0% 5%)";
    }
    else if (style == "5") {
        for (var element of document.querySelectorAll(".box")) {
            element.style.backgroundColor = "dodgerblue";
            element.style.borderRadius = "";
            element.style.borderWidth = "3px";
            element.style.borderStyle = "solid";
            element.style.borderImage = "linear-gradient(to bottom right, rgb(15, 35, 15) 25%, rgb(255, 54, 54) 100%) 1";
            element.style.clipPath = "";
            element.style.color = "rgb(15, 40, 15)";
        }
        var search = document.getElementsByClassName("search");
        var button = document.createElement('div');
        button.innerHTML = "<input type='submit' onclick='search();' value='Search'>";
        button.style.display = "flex";
        search[0].appendChild(button);
        button.firstElementChild.style.color = "white";
        button.firstElementChild.style.backgroundColor = "rgb(255, 54, 54)";
        button.firstElementChild.style.borderRadius = "";
        button.firstElementChild.style.border = "solid 3px rgb(15, 40, 15)";
        var input = document.getElementById("search");
        input.style.color = "rgb(15, 40, 15)";
        input.style.backgroundColor = "dodgerblue";
        input.style.borderRadius = "";
        input.style.borderBottom = "solid 3px rgb(15, 40, 15)";
        input.style.borderTop = "solid 3px rgb(15, 40, 15)";
        input.style.borderLeft = "solid 3px rgb(15, 40, 15)";
    }
    else if (style == "6") {
        for (var element of document.querySelectorAll(".box")) {
            element.style.backgroundColor = "rgb(30, 15, 30)";
            element.style.borderRadius = "0px";
            element.style.border = "solid 3px rgba(200, 100, 255, 0.25)";
            element.style.clipPath = "";
            element.style.color = "white";
        }
        var search = document.getElementsByClassName("search");
        var button = document.createElement('div');
        button.innerHTML = "<img src='img/google1.png' onclick='search();'>";
        button.style.display = "flex";
        search[0].appendChild(button);
        var input = document.getElementById("search");
        input.style.color = "white";
        input.style.backgroundColor = "rgba(200, 100, 255, 0.05)";
        input.style.borderBottom = "solid 3px rgba(200, 100, 255, 0.5)";
    }
}

function changePicture() {
    if (style == "1") {
        picture = pictures[0] != "" ? pictures[0] : "black";
    }
    else if (style == "2") {
        picture = pictures[1] != "" ? pictures[1] : "img/background1.jpeg";
    }
    else if (style == "3") {
        picture = pictures[2] != "" ? pictures[2] : "rgb(20, 20, 20)";
    }
    else if (style == "4") {
        picture = pictures[3] != "" ? pictures[3] : "img/background2.jpg";
    }
    else if (style == "5") {
        picture = pictures[4] != "" ? pictures[4] : "img/background3.jpg";
    }
    else if (style == "6") {
        picture = pictures[5] != "" ? pictures[5] : "rgb(20, 12, 20)";
    }
    if (isColor(picture)) {
        document.body.style.background = picture;
    }
    else {
        document.body.style.background = "url('" + picture + "') no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundSize = "cover";
    }
}

function isColor(strColor) {
    var str = new Option().style;
    str.color = strColor;
    return str.color == strColor;
}

var togglemode = false;

function toggleMode() {
    var menu = document.getElementById("menu");
    menu.remove();
    if (togglemode) {
        togglemode = false;
    }
    else {
        togglemode = true;
    }
    AddMenuPicture();
    AddMenuStyle();
    AddMenuBox();
    AddMenuRemoveBox();
    AddSave();
    AddOpen();
    AddDrag();
}

function AddMenuPicture() {
    if (togglemode) {
        var div = document.createElement("div");
        div.id = "menupicture";
        div.classList = "menupicture";
        div.innerHTML = "background ✎";
        div.style.left = 1 + "vw";
        div.style.top = 1 + "vw";
        div.style.position = "absolute";
        div.style.display = "block";
        div.style.color = "white";
        div.style.backgroundColor = "rgb(50, 50, 50)";
        div.style.zIndex = "10";
        div.style.cursor = "pointer";
        div.style.width = 8.1 + "vw";
        div.style.height = 2 + "vw";
        div.style.padding = "3px";
        div.style.margin = "auto";
        div.title = "change background";
        div.addEventListener("click", addPicture);
        document.body.appendChild(div);
    }
    else {
        var menupicture = document.getElementById("menupicture");
        menupicture.remove();
    }
}

function addPicture() {
    var item = prompt('Please enter a picture link or a color for change background or not enter anything for default background:', '');
    var link = changeLink(item);
    if (style == "1") {
        pictures[0] = link;
    }
    else if (style == "2") {
        pictures[1] = link;
    }
    else if (style == "3") {
        pictures[2] = link;
    }
    else if (style == "4") {
        pictures[3] = link;
    }
    else if (style == "5") {
        pictures[4] = link;
    }
    else if (style == "6") {
        pictures[5] = link;
    }
    fastaccess = { pictures: pictures, style: style, boxlinks: boxlinks, boxnames: boxnames };
    localStorage.setItem('fastaccess', JSON.stringify(fastaccess));
    location.reload();
}

function changeLink(val) {
    val = val.replace('https://drive.google.com/file/d/', 'https://drive.google.com/uc?id=');
    val = val.replace('/view?usp=drive_link', '');
    val = val.replace('/view?usp=sharing', '');
    if (val.includes('https://drive.google.com/uc?id=')) {
        val = val.replace('https://drive.google.com/uc?id=', 'http://drive.google.com/uc?id=');
        val = val.replace('http://drive.google.com/uc?id=', 'http://drive.google.com/thumbnail?sz=s4000&id=');
    }
    return val;
}

function AddMenuStyle() {
    if (togglemode) {
        var div = document.createElement("div");
        div.id = "menustyle";
        div.classList = "menustyle";
        div.innerHTML = "style ✎";
        div.style.left = 10 + "vw";
        div.style.top = 1 + "vw";
        div.style.position = "absolute";
        div.style.display = "block";
        div.style.color = "white";
        div.style.backgroundColor = "rgb(50, 50, 50)";
        div.style.zIndex = "10";
        div.style.cursor = "pointer";
        div.style.width = 4.5 + "vw";
        div.style.height = 2 + "vw";
        div.style.padding = "3px";
        div.style.margin = "auto";
        div.title = "change design";
        div.addEventListener("click", addStyle);
        document.body.appendChild(div);
    }
    else {
        var menustyle = document.getElementById("menustyle");
        menustyle.remove();
    }
}

function addStyle() {
    var item = prompt('Please enter a style with number between 1 and 6 for style 1 (1) or style 2 (2) or style 3 (3) or style 4 (4) or style 5 (5) or style 6 (6):', '');
    if (item != null & item != "" & (item == "1" | item == "2" | item == "3" | item == "4" | item == "5" | item == "6")) {
        fastaccess = { pictures: pictures, style: item, boxlinks: boxlinks, boxnames: boxnames };
        localStorage.setItem('fastaccess', JSON.stringify(fastaccess));
        location.reload();
    }
}

function AddMenuBox() {
    if (togglemode) {
        var div = document.createElement("div");
        div.id = "menubox";
        div.classList = "menubox";
        div.innerHTML = "box ✎";
        div.style.left = 15.5 + "vw";
        div.style.top = 1 + "vw";
        div.style.position = "absolute";
        div.style.display = "block";
        div.style.color = "white";
        div.style.backgroundColor = "rgb(50, 50, 50)";
        div.style.zIndex = "10";
        div.style.cursor = "pointer";
        div.style.width = 4 + "vw";
        div.style.height = 2 + "vw";
        div.style.padding = "3px";
        div.style.margin = "auto";
        div.title = "add box";
        div.addEventListener("click", addBox);
        document.body.appendChild(div);
    }
    else {
        var menubox = document.getElementById("menubox");
        menubox.remove();
    }
}

function addBox() {
    var item1 = prompt('Please enter a link of website', '');
    if (item1 != null & item1 != "") {
        var item2 = prompt('Please enter a name for website', '');
        if (item2 != null & item2 != "") {
            boxlinks.push(item1);
            boxnames.push(item2);
            fastaccess = { pictures: pictures, style: style, boxlinks: boxlinks, boxnames: boxnames };
            localStorage.setItem('fastaccess', JSON.stringify(fastaccess));
            location.reload();
        }
    }
}

function AddMenuRemoveBox() {
    if (togglemode) {
        var div = document.createElement("div");
        div.id = "menuremovebox";
        div.classList = "menuremovebox";
        div.innerHTML = "remove box ✎";
        div.style.left = 20.5 + "vw";
        div.style.top = 1 + "vw";
        div.style.position = "absolute";
        div.style.display = "block";
        div.style.color = "white";
        div.style.backgroundColor = "rgb(50, 50, 50)";
        div.style.zIndex = "10";
        div.style.cursor = "pointer";
        div.style.width = 8 + "vw";
        div.style.height = 2 + "vw";
        div.style.padding = "3px";
        div.style.margin = "auto";
        div.title = "remove box";
        div.addEventListener("click", removeBox);
        document.body.appendChild(div);
    }
    else {
        var menuremovebox = document.getElementById("menuremovebox");
        menuremovebox.remove();
    }
}

function removeBox() {
    var item = prompt('Please enter a name of website', '');
    if (item != null & item != "") {
        var index = boxnames.indexOf(item);
        if (index > -1) {
            boxnames.splice(index, 1);
            boxlinks.splice(index, 1);
        }
        fastaccess = { pictures: pictures, style: style, boxlinks: boxlinks, boxnames: boxnames };
        localStorage.setItem('fastaccess', JSON.stringify(fastaccess));
        location.reload();
    }
}

function AddSave() {
    if (togglemode) {
        var div = document.createElement("div");
        div.id = "menusave";
        div.innerHTML = `<div class=\'icon-download\'><label for=\'filename\'>
                    <div class=\'bg-light foldersave\'>
                    <i class=\'fa fa-save\' title=\'save configs\'></i></div></label>
                    <input type=\'button\' onClick=\'handleFilename()\' value=\'Save\' class=\'button\' id=\'filename\'></div>`;
        div.style.left = 29.5 + "vw";
        div.style.top = 1 + "vw";
        div.style.position = "absolute";
        div.style.display = "block";
        div.style.color = "white";
        div.style.backgroundColor = "rgb(50, 50, 50)";
        div.style.zIndex = "10";
        div.style.cursor = "pointer";
        div.style.width = 1.5 + "vw";
        div.style.height = 2 + "vw";
        div.style.padding = "3px";
        div.style.margin = "auto";
        document.body.appendChild(div);
    }
    else {
        var menusave = document.getElementById("menusave");
        menusave.remove();
    }
}

function AddOpen() {
    if (togglemode) {
        var div = document.createElement("div");
        div.id = "menuopen";
        div.innerHTML = `<div class=\'icon-upload\'><label for=\'txtFileInput\'>
                    <div class=\'bg-light folderopen\'>
                    <i class=\'fa fa-folder-open\' title=\'open configs\'></i></div></label>
                    <input type=\'file\' id=\'txtFileInput\' onchange=\'handleFiles(this.files)\' accept=\'.txt\'></div>`;
        div.style.left = 32 + "vw";
        div.style.top = 1 + "vw";
        div.style.position = "absolute";
        div.style.display = "block";
        div.style.color = "white";
        div.style.backgroundColor = "rgb(50, 50, 50)";
        div.style.zIndex = "10";
        div.style.cursor = "pointer";
        div.style.width = 1.5 + "vw";
        div.style.height = 2 + "vw";
        div.style.padding = "3px";
        div.style.margin = "auto";
        document.body.appendChild(div);
    }
    else {
        var menuopen = document.getElementById("menuopen");
        menuopen.remove();
    }
}

function handleFilename() {
    exportTableToTXT('fastaccess.txt');
}

function exportTableToTXT(filename) {
    var txt = localStorage.getItem('fastaccess');
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

function handleFiles(files) {
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
    localStorage.setItem('fastaccess', txt);
    location.reload();
}

function AddDrag() {
    const elements = document.getElementsByClassName("box");
    if (togglemode) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].setAttribute('draggable', true);
        }
        $(".box").off("click");
    }
    else {
        for (let i = 0; i < elements.length; i++) {
            elements[i].setAttribute('draggable', false);
        }
        $(".box").on('click');
    }
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    var data = ev.dataTransfer.setData("text", ev.target.id);
    var draggedelement = document.getElementById(ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var draggedelement = document.getElementById(data);
    var droppedelement = document.getElementById(ev.target.id);
    insertAfter(droppedelement, draggedelement);
    saveOrder();
}

function insertAfter(referenceNode, newNode) {
    $(newNode).insertAfter(referenceNode);
}

function saveOrder() {
    var newboxnames = [];
    var newboxlinks = [];
    const elements = document.getElementsByClassName("box");
    for (let i = 0; i < elements.length; i++) {
        var name = elements[i].innerHTML;
        var link = elements[i].title;
        newboxnames.push(name);
        newboxlinks.push(link);
    }
    fastaccess = { pictures: pictures, style: style, boxlinks: newboxlinks, boxnames: newboxnames };
    localStorage.setItem('fastaccess', JSON.stringify(fastaccess));
    boxlinks = newboxlinks;
    boxnames = newboxnames;
}

ondragover = (event) => {
    event.preventDefault();
};

ondragstart = (event) => {
};

ondrop = (event) => {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggingelement = document.getElementById(data);
    var droppingelement = document.getElementById(event.target.id);
    if (draggingelement != "" & !droppingelement) {
        droppingelement = document.getElementById("page").firstChild;
        insertBefore(droppingelement, draggingelement);
        saveOrder();
    }
};

function insertBefore(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode);
}
