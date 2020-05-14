import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './components/inicio/inicio.component';
import { PopularesComponent } from './components/populares/populares.component';
import { CarteleraComponent } from './components/cartelera/cartelera.component';






const APP_ROUTES: Routes = [
    {path: 'inicio', component: InicioComponent },
    {path: 'populares', component: PopularesComponent },
    {path: 'cartelera', component: CarteleraComponent },
    {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
