var posx = 0;
var posy = 0;
var posrandx = 0;
var posrandy = 0;
var resx = 0;
var resy = 0;
var randx = 0;
var randy = 0;
var movefaster = 1000;
var go = false;
var score = 0;
var timer = 0;
var refreshIntervalId;
var shootedX = new Array;
var shootedY = new Array;

function sound(){
    new Audio('assets/shoot.mp3').play();
}

$(document).click(function(){
    sound();
});

$('#button-center').click(function(e) {
    score = score + 5; 
});

$('#button-middle').click(function(e) {
    score = score + 4; 
});

$('#button-border').click(function(e) {
    score = score + 3; 
});

$('#button-outer').click(function(e) {
    score = score + 2;  
});

$('#button-edge').click(function(e) {
    score = score + 1;  
    var bounds = e.target.getBoundingClientRect();
    var shootposX  = e.pageX - this.offsetLeft;
    var shootposY = e.pageY - this.offsetTop;
    var t = document.getElementById('button-center');
    var s = document.createElement('div');
    s.setAttribute('id', 'shooted-' + score);
    var x = (shootposX + 7 - 50).toString();
    var y = (shootposY + 7 - 50).toString();
    s.className = '.shooted';
    s.setAttribute('style', `left:` + x + `px;top:` + y + `px;position:absolute;
    background-color:black;
    outline:none;
    border-radius:100%;
    border:none;
    width:6px;
    height:6px;
    cursor:crosshair;`);
    t.appendChild(s);
    $('#shoot').css({left:shootposX + 7 - 50, top:shootposY + 7 - 50});
});

$('#go').click(function() {
    var p = document.getElementById('button-center');
    removeAllChildNodes(p);
    timer = 0;
    score = 0;
    go = true;
    moveTarget();
    document.getElementById('target').style.display = 'block';
    document.getElementById('start').style.display = 'none';
    document.body.style.cursor = 'crosshair';
    refreshIntervalId = setInterval(function(){
        moveTarget();
    }, movefaster);
});

function moveTarget() {
    resx = $(document).width();
    resy = $(document).height();
    randx = Math.floor(Math.random() * (resx - 200)) + 50;
    randy = Math.floor(Math.random() * (resy - 200)) + 50;
    posrandx = randx;
    posrandy = randy;
    $('#button-center').css({left:10, top:10});
    $('#button-middle').css({left:10, top:10});
    $('#button-border').css({left:10, top:10});
    $('#button-outer').css({left:10, top:10});
    $('#button-edge').css({left:posrandx - 50, top:posrandy - 50});
    document.body.style.cursor = 'crosshair';
    timer++;
    if (timer == 31) {
        clearInterval(refreshIntervalId);
        movefaster = 900;
        refreshIntervalId = setInterval(function(){
            animateTarget();
        }, movefaster);
    }
}

function animateTarget() {
    if (timer < 60) {
        resx = $(document).width();
        resy = $(document).height();
        randx = Math.floor(Math.random() * (resx - 200)) + 50;
        randy = Math.floor(Math.random() * (resy - 200)) + 50;
        posrandx = randx;
        posrandy = randy;
        $('#button-center').animate({left:10, top:10}, movefaster);
        $('#button-middle').animate({left:10, top:10}, movefaster);
        $('#button-border').animate({left:10, top:10}, movefaster);
        $('#button-outer').animate({left:10, top:10}, movefaster);
        $('#button-edge').animate({left:posrandx - 50, top:posrandy - 50}, movefaster);
    }
    timer++;
    if (timer > 60) {
        document.getElementById('start').style.display = 'flex';
        if (score < 500) {
            $('#go').html('SCORE : ' + score);
        }
        if (score >= 500) {
            $('#go').html('SCORE : ' + score + ', NICE !');
        }
        go = false;
        clearInterval(refreshIntervalId);
        $('#button-edge').animate({left:$(document).width() / 2 - 50, top:$(document).height() / 2 + 25}, 0);
    }
    document.body.style.cursor = 'crosshair';
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}