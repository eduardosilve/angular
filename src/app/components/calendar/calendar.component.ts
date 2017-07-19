import { Component, OnInit } from '@angular/core';
import {matchService} from '../../servicios/match.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers:[matchService]
})

export class CalendarComponent implements OnInit {
  public calendar;
  constructor(
    private _matchService : matchService
  ){

  }
  ngOnInit() {

    this._matchService.getMatch().subscribe(
      result => {
        this.calendar = result.match;
       //console.log(this.calendar);

      /***** moment for pipes time and dates *******/

        var moment = require('moment');

        /*
        var localLocale = moment('2017-05-29Z');
        moment.locale('es');
        localLocale.locale(false);
        alert(localLocale.format('LLLL'));
        */

  // UTC to GMT for time
        for (var i in this.calendar) {
          //console.log(moment(this.calendar[i].matchInfo.time));
          moment.locale('es');
          var time = moment(this.calendar[i].matchInfo.time, "HH:mm:ssZ"); // false
          this.calendar[i].matchInfo.time = time;
        }
  // translate date to SPANISH
        for (var i in this.calendar) {
          var datef = moment(this.calendar[i].matchInfo.date,""); // false
          datef.locale('es');
          this.calendar[i].matchInfo.date = datef.format('LLLL');
          var slice = this.calendar[i].matchInfo.date.slice(0,-13);
          this.calendar[i].matchInfo.date = slice;
        }
  // translate stage to SPANISH for Quarter-finals, finals...
        for (var i in this.calendar) {
          var stage = this.calendar[i].matchInfo.stage.name;
            stage = stage.replace("Quarter-finals", "Cuartos de final");
            stage = stage.replace("Semi-finals", "Semi-finales");
            stage = stage.replace("Finals", "Finales");
            stage = stage.replace("Clausura -", "");
            stage = stage.replace("Clausura", "");
            this.calendar[i].matchInfo.stage.name = stage


        }


        /********************/

        //console.log(this.calendar.match);
        if (!this.calendar){
          console.log("Error en el servidor");
        }

      },
      error =>{
        var err = <any>error;
        console.log(err);
      }

    );
  }

}
