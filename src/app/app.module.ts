import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

// COMPONENTES
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { GenerosComponent } from './components/generos/generos.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { TrailersComponent } from './components/trailers/trailers.component';
import { CriticaComponent } from './components/critica/critica.component';
import { PopularesComponent } from './components/populares/populares.component';
import { NovedadesComponent } from './components/novedades/novedades.component';

// SUBCOMPONENTES

import { PeliculaSelecNovedadesComponent } from './components/pelicula-selec-novedades/pelicula-selec-novedades.component';
import { PeliculaSelecInicioComponent } from './components/pelicula-selec-inicio/pelicula-selec-inicio.component';

// RUTAS
import { APP_ROUTING } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// SERVICIOS
import { PopularesService } from './services/populares.service';
import { AboutComponent } from './components/about/about.component';

// PIPES
import { ImagenPeliculaPipe } from './pipes/imagen-pelicula.pipe';
import { PeliculaSelecGeneroComponent } from './components/pelicula-selec-genero/pelicula-selec-genero.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    PopularesComponent,
    NovedadesComponent,
    GenerosComponent,
    RankingComponent,
    TrailersComponent,
    CriticaComponent,
    PeliculaSelecNovedadesComponent,
    AboutComponent,
    ImagenPeliculaPipe,
    PeliculaSelecInicioComponent,
    PeliculaSelecGeneroComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule
  ],
  providers: [ PopularesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
