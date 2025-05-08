import { Routes } from '@angular/router';
import { ValidacionComponent } from './components/validacion/validacion.component';
import { RegistroComponent } from './components/registro/registro.component';

export const routes: Routes = [
  {
    path:"validar",
    component:ValidacionComponent
  },
  {
    path:"registrar",
    component:RegistroComponent
  }
];
