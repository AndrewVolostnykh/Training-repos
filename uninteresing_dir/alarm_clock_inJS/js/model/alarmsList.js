import Alarm from "./alarm.js";

export default class AlarmList {
    constructor(){
        this.alarmList = [];
    }

    listLength(){
        return this.alarmList.length;
    }

    addAlarm(newAlarm){
        if(newAlarm === Alarm){
            this.alarmList.push(newAlarm);
        } else {
            return;
        }
    }

    deleteAlarm(alarmId){
        const alarmIndex = this.alarmList.map( (alarm) => alarm.id === alarmId);
        this.alarmList.splice(alarmIndex, 1);
    }

}