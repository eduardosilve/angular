import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'guionPipe'
})
export class guionPipe implements PipeTransform {
  transform(value: any, args: any[]): any {


//value = value.toLowerCase();
 //console.log(value);
 let nombres = value.replace(" ", "-")
    return nombres;
  }
}
