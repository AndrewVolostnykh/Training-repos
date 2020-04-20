export default class Alarm {
    constructor(finishDate, id) { 
        this.id = id;
        this.finishDate = finishDate;
    }

    play(){
       alert('the alarm went off ' + this.id);
    }
}