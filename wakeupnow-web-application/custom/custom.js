window.addEventListener('DOMContentLoaded', () => {
    
    var wd = 2;
    var wu = 2;

    var timetowakeup;
    
    // watch
    const watchScreen = document.querySelector('#actualhour');
  
    // timer
    const timerScreen = document.querySelector('#wakeuphour');

    // timer
    const clockScreen = document.querySelector('#sleephour');

    setTime();
    setInterval(setTime, 300);

    function setTime() {
        const now = new Date();
        var hour = now.toLocaleTimeString();
        watchScreen.innerHTML = hour;
        if (watchScreen.innerHTML == timerScreen.innerHTML)
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
        if (wd == 1) {
            sound();
            localStorage.setItem('wakeup', timerScreen.innerHTML);
        }
        var difftimems = parseReadableTimeIntoMilliseconds(timerScreen.innerHTML) - parseReadableTimeIntoMilliseconds(watchScreen.innerHTML);
        if (difftimems < 0 ) {
            difftimems = parseReadableTimeIntoMilliseconds('24:00:00') + difftimems;
        }
        var clock = parseMillisecondsIntoReadableTime(difftimems);
        clockScreen.innerHTML = clock;
    }
  
    function sound(){
        new Audio('assets/bensound-dreams.mp3').play();
    }

    var timetowakeup = localStorage.getItem('wakeup');

    if (timetowakeup != null & timetowakeup != '') {
        timerScreen.innerHTML = timetowakeup;
    }
    else {
        timerScreen.innerHTML = '00:00:00';
    }

    function parseMillisecondsIntoReadableTime(milliseconds) {
        var seconds = milliseconds / 1000;
        var hours = parseInt(seconds / 3600);
        seconds = seconds % 3600;
        var minutes = parseInt(seconds / 60); 
        seconds = seconds % 60;
        return (hours >= 10 ? hours : '0' + hours) + ':' + (minutes >= 10 ? minutes : '0' + minutes) + ':' + (seconds >= 10 ? seconds : '0' + seconds);
    }

    function parseReadableTimeIntoMilliseconds(hms) {
        var a = hms.split(':'); 
        var milliseconds = a[0] * 60 * 60 * 1000 + a[1] * 60 * 1000 + a[2] * 1000;
        return milliseconds;
    }

});