// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//     name: 'popularesImagen'
//   })

//   export class PopularesImagenPipe implements PipeTransform {

//     transform( pelicula: any): any {

//         const url = 'https://image.tmdb.org/t/p/w500';

//         if ( pelicula.poster_path ){
//           return url + pelicula.poster_path;
//         }else{
//           if ( pelicula.backdrop_path ){
//             return url + pelicula.backdrop_path;
//           }else{
//             return 'assets/img/no-image.png';
//           }
//         }

//     }
// }