import Controller from './controller/controller.js';
import View from './view/view.js';
import AlarmList from "./model/alarmsList.js";

let list = new AlarmList();
let nview = new View();

let ncontroller = new Controller(list,nview);
