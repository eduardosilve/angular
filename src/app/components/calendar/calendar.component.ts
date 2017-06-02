import { Component, OnInit } from '@angular/core';
import {CalendarService} from '../../servicios/calendar.service';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  calendar:any[]=[]

  constructor(private _calendarService:CalendarService ) {


  }

  ngOnInit() {

    this.calendar = this._calendarService.getcalendar();
    var moment = require('moment');
    moment().format();


    for (var i in this.calendar) {

      //console.log(moment(this.calendar[i].matchInfo.time));
      let date = moment(this.calendar[i].matchInfo.time, "HH:mm:ssZ"); // false
      this.calendar[i].matchInfo.time = date;
    }


  }

}
