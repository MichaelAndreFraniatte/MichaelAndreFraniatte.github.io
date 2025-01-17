
var channel = '';
var parent = 'michaelandrefraniatte.github.io';
var redirecturi = 'https://michaelandrefraniatte.github.io/streamchat';
var clientid = 'sgkzvz71pmvl54d1h2hv9j8a4ov00t';
var bearer = 'yr4vxobuaftfigconk3otngziyu0gg';
var token = '';
var resy = window.screen.availHeight - 70;
var element = document.getElementById('onair');

function changeTitle() {
    document.title = 'streamchat';
}

$(function() {
    changeTitle();
    var getitem = localStorage.getItem('streamchat');
    if (getitem == '' | getitem == null | getitem == 'undefined') {
        localStorage.setItem('streamchat', '[]');
    }
    var obj = JSON.parse(getitem);
    channel = obj.channel;
    createChat();
    getId();
});

function createChat() {
    var htmlString = '';
    htmlString += `<iframe src=\'https://www.twitch.tv/embed/${channel}/chat?darkpopout&parent=${parent}\' height=\'` + resy + `\' width=\'100%\'></iframe>`;
    $('.chat-container').append(htmlString);
}

function getId() {
    $.ajax({
            type: 'POST',
            url: 'https://id.twitch.tv/oauth2/token?client_id=' + clientid + '&client_secret=' + bearer + '&grant_type=client_credentials',
            success: function(datas) {
                token = 'Bearer ' + datas['access_token'];
                onAir();
                setInterval(function(){
                onAir();
            }, 10000);
        }
    });
}

function onAir() {
    $.ajax({
        type: 'GET',
        url: 'https://api.twitch.tv/helix/users?login=' + channel,
        headers: {
            'Authorization': token,
            'Client-Id': clientid
        },
        success: function(datas) {
            if (datas.stream == null) {      
                element.style.display = 'none';
            }
            else {
                $('#onair').css('display', '');
            }
        }
    });
}

$(function() {
    $('#txtFileInput').click(function(){
        $(this).val('');
    });
});

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
	if(evt.target.error.name == 'NotReadableError') {
	}
}

function processData(txt) {
    var allTextLines = txt.split(', ');
    localStorage.setItem('streamchat', JSON.stringify({channel: allTextLines[0]}));
    location.reload();
}