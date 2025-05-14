import { Routes } from '@angular/router';
import { AltaComponent } from './components/alta/alta.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { EliminarComponent } from './components/eliminar/eliminar.component';

export const routes: Routes = [
  {
    path:"agregar",
    component:AltaComponent
  },
  {
    path:"buscar",
    component:BuscarComponent
  },
  {
    path:"eliminar",
    component:EliminarComponent
  }
];
