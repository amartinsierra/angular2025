import { Routes } from '@angular/router';
import { TiendaAltaComponent } from './components/tienda-alta/tienda-alta.component';
import { TiendaBuscarComponent } from './components/tienda-buscar/tienda-buscar.component';

export const routes: Routes = [
  {
    path:"alta",
    component:TiendaAltaComponent
  },
  {
    path:"buscar",
    component:TiendaBuscarComponent
  },

];
