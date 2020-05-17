import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'novedadesImagen'
  })

  export class ImagenPeliculaPipe implements PipeTransform {

    transform( novedad: any): any {

        const url = 'https://image.tmdb.org/t/p/w500';

        if ( novedad.poster_path ){
          return url + novedad.poster_path;
        }else{
          if ( novedad.backdrop_path ){
            return url + novedad.backdrop_path;
          }else{
            return 'assets/img/no-image.png';
          }
        }

    }
}