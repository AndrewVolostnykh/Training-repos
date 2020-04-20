import Alarm from "../model/alarm.js";
import alarmList from "../model/alarmsList.js"; 
import view from "../view/view.js"; 

export default class Controller{

    constructor(alarmList, view){
        this.alarmList = alarmList;
        this.view = view;
        document.querySelector('#setButton').addEventListener('click', (e) => this.addAlarm(e)); 
        console.log('read button by selector')
    }
    
    addAlarm(){
        var timeInMS = document.getElementById("alarmTime").valueAsNumber;
        if(isNaN(timeInMS)){
            alert("Invalid date");
            return;
        }

        var alarmTime = new Date(timeInMS);
        alarmTime.setHours(alarmTime.getHours() - 3); // processing time to our format

        var newAlarm = new Alarm(alarmTime, 0);
        this.alarmList.addAlarm(newAlarm);

        var dateNow = new Date();

        var difference = alarmTime - dateNow;
        if(difference < 0){
            alert("This time already passed");
            return;
        }

        window.setTimeout(initAlarm(newAlarm), 20000);

        console.log("date now: " + dateNow + ", alarm time: " + alarmTime + ", difference: " + difference);


        function initAlarm(newAlarm){
            newAlarm.play();
            //view.addButton(button);
        }
    }


}
