import { Component, OnInit } from '@angular/core';
import {rankService} from '../../servicios/rank.service';
@Component({
  selector: 'app-rank',
  templateUrl: './rankApertura.component.html',
  styleUrls: ['./rankApertura.component.css']
})
export class rankAperturaComponent implements OnInit {
rank:any[]=[];

  constructor( private _rankService:rankService ) { }

  ngOnInit() {
    this.rank = this._rankService.getRank();
    console.log(this.rank);
  }

}
