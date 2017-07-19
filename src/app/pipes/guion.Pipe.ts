import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'guionPipe'
})
export class guionPipe implements PipeTransform {
  transform(value: any, args: any[]): any {


//value = value.toLowerCase();
 //console.log(value);
 let nombres = value.replace(" ", "-")

 var specialChars = "!@#$^&%*()+=[]\/{}|:<>?,.";

   // Los eliminamos todos
   for (var i = 0; i < specialChars.length; i++) {
       nombres= nombres.replace(new RegExp("\\" + specialChars[i], 'gi'), '');
   }

   // Lo queremos devolver limpio en minusculas
   nombres = nombres.toLowerCase();

   // Quitamos espacios y los sustituimos por _ porque nos gusta mas asi
   nombres = nombres.replace(/ /g,"_");

   // Quitamos acentos y "ñ". Fijate en que va sin comillas el primer parametro
   nombres = nombres.replace(/á/gi,"a");
   nombres = nombres.replace(/é/gi,"e");
   nombres = nombres.replace(/í/gi,"i");
   nombres = nombres.replace(/ó/gi,"o");
   nombres = nombres.replace(/ú/gi,"u");
   nombres = nombres.replace(/ñ/gi,"n");
    return nombres;

  }
}
