import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';

@Injectable()
export class matchService{

public url : string ;

constructor( private _http:Http){
  this.url="assets/apiData/match.json";

}
getMatch(){
  return this._http.get(this.url)
                   .map(res => res.json())
                   /*.do(res => console.log("User data" + JSON.stringify(res))) */
                   .catch(this.handleError);
  }

  private handleError(error: Response) {
          console.log(error);
          return Observable.throw(error.json().error || 'Internal Server error');
  }

}
