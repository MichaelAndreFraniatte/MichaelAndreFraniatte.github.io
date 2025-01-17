
// Words
var words = ['Hi, I like making contents!', 'I like making videos, websites, and programs!', 'I like also playing video games!', 'Here you find my profile, welcome!'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 100,
    speed = 50;
var wordflick = function () {
    setInterval(function () {
        if (forwards) {
            if (offset >= words[i].length) {
                ++skip_count;
                if (skip_count == skip_delay) {
                    forwards = false;
                    skip_count = 0;
                }
            }
        }
        else {
            if (offset == 0) {
                forwards = true;
                i++;
                offset = 0;
                if (i >= len) {
                    i = 0;
                }
            }
        }
        part = words[i].substr(0, offset);
        if (skip_count == 0) {
            if (forwards) {
                offset++;
            }
            else {
                offset--;
            }
        }
        $('.word').text(part);
    }, speed);
};

$(document).ready(function () {
    wordflick();
});

var tabtitle1 = document.getElementById('tabtitle1');
var tab1 = document.getElementById('tab1');
var tabtitle2 = document.getElementById('tabtitle2');
var tab2 = document.getElementById('tab2');
var tabtitle3 = document.getElementById('tabtitle3');
var tab3 = document.getElementById('tab3');

tabtitle1.addEventListener('click', function () {
    tab1.classList.remove("fadeout");
    tab1.classList.remove("fadein");
    tab1.classList.add("fadein");
    tab2.classList.add("fadeout");
    tab2.classList.remove("fadein");
    tab3.classList.add("fadeout");
    tab3.classList.remove("fadein");
    setTimeout(() => {
        tabtitle1.classList.add("tabtitleactive");
        tab1.classList.add("tab1active");
        tab1.classList.remove("hide");
        tabtitle2.classList.remove("tabtitleactive");
        tab2.classList.remove("tab2active");
        tab2.classList.add("hide");
        tabtitle3.classList.remove("tabtitleactive");
        tab3.classList.remove("tab3active");
        tab3.classList.add("hide");
    }, "500");
});

tabtitle2.addEventListener('click', function () {
    tab1.classList.add("fadeout");
    tab1.classList.remove("fadein");
    tab2.classList.remove("fadeout");
    tab2.classList.remove("fadein");
    tab2.classList.add("fadein");
    tab3.classList.add("fadeout");
    tab3.classList.remove("fadein");
    setTimeout(() => {
        tabtitle1.classList.remove("tabtitleactive");
        tab1.classList.remove("tab1active");
        tab1.classList.add("hide");
        tabtitle2.classList.add("tabtitleactive");
        tab2.classList.add("tab2active");
        tab2.classList.remove("hide");
        tabtitle3.classList.remove("tabtitleactive");
        tab3.classList.remove("tab3active");
        tab3.classList.add("hide");
    }, "500");
});

tabtitle3.addEventListener('click', function () {
    tab1.classList.add("fadeout");
    tab1.classList.remove("fadein");
    tab2.classList.add("fadeout");
    tab2.classList.remove("fadein");
    tab3.classList.remove("fadeout");
    tab3.classList.remove("fadein");
    tab3.classList.add("fadein");
    setTimeout(() => {
        tabtitle1.classList.remove("tabtitleactive");
        tab1.classList.remove("tab1active");
        tab1.classList.add("hide");
        tabtitle2.classList.remove("tabtitleactive");
        tab2.classList.remove("tab2active");
        tab2.classList.add("hide");
        tabtitle3.classList.add("tabtitleactive");
        tab3.classList.add("tab3active");
        tab3.classList.remove("hide");
    }, "500");
});