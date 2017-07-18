import { Component, OnInit } from '@angular/core';
import {rankService} from '../../servicios/rank.service';


@Component({
  selector: 'app-rank',
  templateUrl: './rankApertura.component.html',
  styleUrls: ['./rankApertura.component.css'],
  providers:[rankService]
})

export class rankAperturaComponent implements OnInit {
 public rank;
  constructor(
    private _rankService : rankService
   ){

}
ngOnInit() {

    this._rankService.getRank().subscribe(
        result => {
          this.rank = result.stage[0].division[0].ranking;
        
           //console.log(result.stage[0].division[0].ranking);
          if (!this.rank){
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
