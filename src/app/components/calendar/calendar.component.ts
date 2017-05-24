import { Component, OnInit } from '@angular/core';
import {CalendarService} from '../../servicios/calendar.service';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
calendar:any[]=[]

  constructor(private _calendarService:CalendarService ) { }

  ngOnInit() {
   this.calendar = this._calendarService.getcalendar();
    console.log(this.calendar);
  }

}
