import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fotoalbum'
})
export class FotoalbumPipe implements PipeTransform {

  
  transform(imagenes: any, args?: any): any {
    let noimage = 'assets/img/noimage.png';
    
    if (!imagenes) {
      return noimage;
    }

    return (imagenes.length >0)? imagenes[2].url: noimage; 
  }

}
