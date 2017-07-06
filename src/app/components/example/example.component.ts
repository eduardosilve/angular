import { Component, OnInit } from '@angular/core';
import {PeticionesService} from '../../servicios/calendarhttp.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
  providers:[PeticionesService]
})


export class ExampleComponent implements OnInit {
public articulos;
  constructor(
    private _peticionesService : PeticionesService
   ){

}

  ngOnInit() {
      this._peticionesService.getArticulos().subscribe(
          result => {
            //  console.log(result);

          },
          error =>{
              var err = <any>error;
              console.log(err);
          }

      );
   }

}
