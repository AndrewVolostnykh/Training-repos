import controller from './controller/controller';
import view from './view/view';
import alarm from './model/alarm';

var alarmSound = new Audio();
alarmSound.src = 'alarmSound.mp3';

function addAlarm(button) {

    var ms = document.getElementById('alarmTime').valueAsNumber;

    if(isNaN(ms)){
        alert('Invalid Date');
        return;
    }
    
    var alarm = new Date(ms);
    var alarmTime = new Date(alarm.getUTCFullYear(),
     alarm.getUTCMonth(), alarm.getUTCDay(),
      alarm.getUTCHours(), alarm.getUTCMinutes(),
       alarm.getUTCSeconds(), alarm.getUTC());
    var difference = alarmTime.getTime() - (new Date()).getTime();

    if(difference < 0){
        alert(">HERE MUST BE NAME OF ALARM CLOCK< is already specified time");
        // and here play audio
        return;
    }

    setTimeout(initAlarm, difference);

    button.innerText = 'Delete alarm';
    button.setAttribute('onclick', 'deleteAlarm(this);');
};

function deleteAlarm(button) {
    button.innerText = 'Set alarm';
    button.setAttribute('onclick', 'addAlarm(this)');
};

function initAlarm () {
    alarmSound.play
    document.getElementById('alarmOptions').style.display = '';


};

function stopAlarm() {
    alarmSound.pause();
    alarmSound.currentTime = 0;
    document.getElementById('alarmOptions').style.display = 'none';
}
