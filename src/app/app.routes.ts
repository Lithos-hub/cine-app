import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './components/inicio/inicio.component';
import { PopularesComponent } from './components/populares/populares.component';
import { GenerosComponent } from './components/generos/generos.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { TrailersComponent } from './components/trailers/trailers.component';
import { CriticaComponent } from './components/critica/critica.component';
import { NovedadesComponent } from './components/novedades/novedades.component';
import { PeliculaSelecNovedadesComponent } from './components/pelicula-selec-novedades/pelicula-selec-novedades.component';
import { AboutComponent } from './components/about/about.component';






const APP_ROUTES: Routes = [
    {path: 'inicio', component: InicioComponent },
    {path: 'inicio/populares', component: PopularesComponent },
    {path: 'inicio/novedades', component: NovedadesComponent },
    {path: 'inicio/generos', component: GenerosComponent },
    {path: 'inicio/ranking', component: RankingComponent },
    {path: 'inicio/trailers', component: TrailersComponent },
    {path: 'inicio/critica', component: CriticaComponent },
    {path: 'populares', component: PopularesComponent },
    {path: 'novedades', component: NovedadesComponent },
    {path: 'pelicula/:id/:pag', component: PeliculaSelecNovedadesComponent },
    {path: 'generos', component: GenerosComponent },
    {path: 'ranking', component: RankingComponent },
    {path: 'trailers', component: TrailersComponent },
    {path: 'critica', component: CriticaComponent},
    {path: 'about', component: AboutComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
