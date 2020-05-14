import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

// COMPONENTES
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PopularesComponent } from './components/populares/populares.component';
import { CarteleraComponent } from './components/cartelera/cartelera.component';

// RUTAS
import { APP_ROUTING } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// SERVICIOS
import { PopularesService } from './services/populares.service';

// PIPES
// import { PopularesImagenPipe } from './pipes/populares-imagen.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    PopularesComponent,
    CarteleraComponent,
    // PopularesImagenPipe
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
